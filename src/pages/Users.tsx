import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { usersData } from "../data";

const Users = () => (
  <>
    <Breadcrumbs />
    <h1>Users</h1>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {usersData.map(({ name, id }) => (
        <Link to={`/users/${id}`}>{name}</Link>
      ))}
    </div>
  </>
);

export default Users;
