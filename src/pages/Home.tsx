import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Home = () => (
  <>
    <Breadcrumbs />
    <h1>Home</h1>
    <Link to="/users">Users</Link>
  </>
);

export default Home;
