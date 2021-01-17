import React from 'react'
import './Lobby.css'

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  password,
  handlePasswordChange,
  handleSubmit
}) => {
  return (
    <form className="lobby-form" onSubmit={handleSubmit}>
    <div className="logo">
      <h1 className="lobby-header">
        <div className="logo">
            {' '}
            <div id="hologram" className='color1'>
              <h1 id="lobby-hologram">Enter a name for your room to get started</h1>
            </div>
            <div id="hologram" className='color2'>
            <h1 id="lobby-hologram">Enter a name for your room to get started</h1>
            </div>
            <div id="hologram" className='color3'>
            <h1 id="lobby-hologram">Enter a name for your room to get started</h1>
            </div>
          </div >
      </h1>
      </div>
      <div className="form-body">
        <label className="form-label" htmlFor="name">Name:</label>
        <input className="form-input"
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <label className="form-label" htmlFor="password">Password:</label>
        <input className="form-input" type="text" id="field" value={password} onChange={handlePasswordChange} required />
      </div>

      <div>
        <label className="form-label" htmlFor="room">Room name:</label>
        <input className="form-input-2"
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          required
        />
      </div>
      <button className="form-btn" type="submit">Submit</button>
    </form>
  );
};

export default Lobby;
