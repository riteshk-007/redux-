import Link from "next/link";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";

export default function Home() {
  return (
    <>
      <AddUser />
      <div className="flex justify-center items-center gap-3">
        <Link
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          href="/todolist"
        >
          {" "}
          Todo Page{" "}
        </Link>
        <Link
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          href="/apiuser"
        >
          API USER
        </Link>
      </div>
      <DisplayUser />
    </>
  );
}
