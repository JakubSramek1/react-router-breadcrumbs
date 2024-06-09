import { Link } from "react-router-dom";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/users">Users</Link>
    </>
  );
};

export default Home;
