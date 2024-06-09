import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <>
      <Breadcrumbs />
      <h1>Home</h1>
      <Link to="/users">Users</Link>
    </>
  );
};

export default Home;
