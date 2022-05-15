import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
    //   update / PUT Method update using id
      const url = `http://localhost:5000/user/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data inside useToken:", data);
        });
      // ------------------------------------
    }
  }, [user]);

  return [token];
};

export default useToken;
