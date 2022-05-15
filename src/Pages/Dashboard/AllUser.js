import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AllUser = () => {
  const { isLoading, data: users } = useQuery(["users"], () =>
    fetch(`http://localhost:5000/user`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl">All User {users.length}</h1>
    </div>
  );
};

export default AllUser;
