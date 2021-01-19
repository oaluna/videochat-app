import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faVideo,
  faShieldAlt,
  faUserFriends,
  faCommentAlt,
  faRecordVinyl,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import Video from 'twilio-video';
import Participant from './Participant';
import './Room.css';

const Room = ({ roomName, token, handleLogout, audioRef, videoRef }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);


  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName
    }).then((room) => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });
    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);



  const remoteParticipants = participants.map(participant => (
    <Participant key={participant.sid} participant={participant} height={100} />
  ));

  return (
    <div className="room" room={room}>

      <div className='mainLeft'>
        <div className='mainVideos'>
          <div id='videoGrid'>
          <div className="local-participant">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ''
        )}
      </div>
      <h3 className="remote-participants-header">Remote Participants</h3>
      <div className="remote-participants">{remoteParticipants}</div>

        </div>


        </div>
        <div className='mainControls'>
          <div className='mainControlsBlock'>
            <div

              className='mainControlsButton mainMuteButton'>
              <i className='fas fa-microphone'>
                <FontAwesomeIcon icon={faMicrophone} />
              </i>
              <span>Mute</span>
            </div>
            <div

              className='mainControlsButton mainVideoButton'>
              <i className='fas fa-video'>
                <FontAwesomeIcon icon={faVideo} />
              </i>
              <span>Stop Video</span>
            </div>
          </div>

          <div className='mainControlsBlock'>
            <div className='mainControlsButton'>
              <i className='fas fa-shield-alt'>
                <FontAwesomeIcon icon={faShieldAlt} />
              </i>
              <span>Security</span>
            </div>
            <div className='mainControlsButton'>
              <i className='fas fa-user-friends'>
                <FontAwesomeIcon icon={faUserFriends} />
              </i>
              <span>Participants</span>
            </div>
            <div className='mainControlsButton'>
              <i className='fas fa-comment-alt'>
                <FontAwesomeIcon icon={faCommentAlt} />
              </i>
              <span>Chat</span>
            </div>
            <div className='mainControlsButton'>
              <i className='fas fa-record-vinyl'>
                <FontAwesomeIcon icon={faRecordVinyl} />
              </i>
              <span>Record</span>
            </div>
      </div>

          <div className='mainControlsBlock'>
            <div className='mainControlsButtonEndMeeting'>
              <span className='leaveMeeting'>End Meeting</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mainRight'>
        <div className='mainHeader'>
          <h6>Chat</h6>
        </div>
        <div className='mainChatWindow'>
          <ul className='messagesContainer'></ul>
        </div>
        <div className='messageSendingTo'>
          To:{' '}
          <span>
            Everyone{' '}
            <i className='fas fa-angle-down'>
              <FontAwesomeIcon icon={faCaretDown} />
            </i>
          </span>{' '}
        </div>
        <div className='mainMessageContainer'>
          <input
            id='chatMessage'
            type='text'
            placeholder='Type message here...'
          />
        </div>
</div>
</div>
  );
};

export default Room;
