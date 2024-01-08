"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromAPI } from "../redux/slice";
import { useEffect } from "react";

const Page = () => {
  const dispatch = useDispatch();
  const apiUserData = useSelector((data) => data.users.fetchData);

  useEffect(() => {
    dispatch(fetchDataFromAPI());
  }, [dispatch]);
  return (
    <div>
      <Link
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        href="/"
      >
        Home
      </Link>
      <h1>user</h1>

      <div className="grid grid-cols-3 gap-4 bg-black p-2 rounded-lg">
        {apiUserData.map((item) => (
          <div
            className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 my-2 "
            key={item.id}
          >
            <h1 className="border-b-2 border-white"> ID: {item.id}</h1>
            <h1 className="border-b-2 border-white"> Name: {item.name}</h1>
            <h1>Email: {item.email}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
