import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { usersData } from "../data";
import { useEffect } from "react";

const UserDetail = () => {
  const { id } = useParams();
  const user = usersData.find((user) => user.id === parseInt(id as string, 10));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current location state does not have a breadcrumb state
    if (!location.state?.title) {
      // Navigate to the same pathname with a new state
      navigate(location.pathname, { state: { userName: user?.name } });
    }
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <Breadcrumbs />
      <h1>{user.name}</h1>
      <h3>{user.description}</h3>
    </>
  );
};

export default UserDetail;
