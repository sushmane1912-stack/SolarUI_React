import { useEffect, useState } from "react";
import apiService from "../../services/apiService";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    apiService
      .getCurrentUser()
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
};

export default Profile;
