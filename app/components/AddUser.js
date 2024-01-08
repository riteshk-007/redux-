"use client";

import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const UserDispatch = () => {
    if (name === "") return alert("Please enter a name");
    dispatch(addUser(name));
    setName("");
  };
  return (
    <div className=" flex flex-col  w-1/2 mx-auto gap-5 border p-1">
      <h2 className="text-2xl font-bold text-center">Add User</h2>
      <input
        type="text"
        placeholder="add user"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg"
      />
      <button
        disabled={name === "" ? true : false}
        onClick={UserDispatch}
        className={`bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 ${
          name === "" ? "bg-blue-200 hover:bg-blue-200" : ""
        }`}
      >
        Add
      </button>
    </div>
  );
};

export default AddUser;
