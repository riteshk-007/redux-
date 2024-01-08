"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodo } from "../redux/TodoSlice";

const Todo = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const TodoList = useSelector((data) => data.todos.todos);

  return (
    <div>
      <div className=" flex flex-col  w-1/2 mx-auto gap-5 border p-1">
        <h2 className="text-2xl font-bold text-center">Add Todo</h2>
        <input
          type="text"
          placeholder="Add Todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-400 p-2 rounded-lg"
        />
        <button
          disabled={name === "" ? true : false}
          onClick={() => {
            dispatch(addTodos(name));
            setName("");
          }}
          className={`bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 ${
            name === "" ? "bg-blue-200 hover:bg-blue-200" : ""
          }`}
        >
          Add
        </button>
      </div>

      <div className="flex justify-center items-center">
        <Link
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          href="/"
        >
          {" "}
          Home Page{" "}
        </Link>
      </div>

      <div className="flex flex-col w-1/2 mx-auto gap-5 my-4 p-2 border">
        <h2 className="text-2xl font-bold text-center">Display Todo</h2>
        {TodoList.length &&
          TodoList?.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center border p-2 my-1 rounded-lg bg-gray-300"
            >
              <h3 className="text-xl font-bold">{todo.name}</h3>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
