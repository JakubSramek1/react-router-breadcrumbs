import { Link } from "react-router-dom";

type UsersProps = {};

const Users = ({}: UsersProps) => {
  return (
    <>
      <h1>Users</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/users/1">Frodo Baggins</Link>
        <Link to="/users/2">Samwise Gamgee</Link>
        <Link to="/users/3">Gandalf</Link>
      </div>
    </>
  );
};

export default Users;
