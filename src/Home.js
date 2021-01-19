import Axios from 'axios';

export default function Home(props) {
  const handleJoin = () => {
    Axios.get(`http://localhost:3000/join`).then((res) => {
      props.history?.push(`/join/${res.data.link}?
           quality=${quality}`);
    });
  };

  return (
    <>
      <button onClick={handleJoin}>join</button>
    </>
  );
}
