import React from 'react';

const Profile = ({ name, email }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Profile Details</h2>
      <p className="text-gray-700"><span className="font-medium">Name:</span> {name}</p>
      <p className="text-gray-700"><span className="font-medium">Email:</span> {email}</p>
    </div>
  );
};

export default Profile;
