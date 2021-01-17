const RoomComponent = (props) => {
  const handleDisconnect = () => {
    socketInstance.current?.destroyConnection();
    props.history.push('/');
  };
  return (
    <>
      <div id='room-container'></div>
      <button onClick={handleDisconnect}>Disconnect</button>
    </>
  );
};

export default RoomComponent;
