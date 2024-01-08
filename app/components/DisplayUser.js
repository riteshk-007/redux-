"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUser = () => {
  const userData = useSelector((data) => data.users.users);
  const dispatch = useDispatch();
  const deleteUser = (e) => {
    dispatch(removeUser(e));
  };
  return (
    <div className="flex flex-col w-1/2 mx-auto gap-5 my-4 p-2 border">
      <h2 className="text-2xl font-bold text-center">Display User</h2>

      {userData.map((user) => (
        <div
          key={user.id}
          className="flex justify-between items-center border p-2 my-1 rounded-lg bg-gray-300"
        >
          <h3 className="text-xl font-bold">{user.name}</h3>

          <button
            onClick={() => deleteUser(user.id)}
            className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
