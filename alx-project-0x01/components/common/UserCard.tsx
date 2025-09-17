import React from "react";
import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <p className="text-gray-700">{user.email}</p>
      <p className="text-sm text-gray-600">{user.phone}</p>
      <p className="text-sm text-gray-600">{user.website}</p>

      <div className="mt-2 text-sm">
        <strong>Company:</strong> {user.company.name}
        <br />
        <em>{user.company.catchPhrase}</em>
      </div>

      <div className="mt-2 text-sm">
        <strong>Address:</strong> {user.address.street}, {user.address.city}
      </div>
    </div>
  );
};

export default UserCard;
