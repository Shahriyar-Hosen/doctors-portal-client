import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      const url = `http://localhost:5000/admin/${email}`;
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }
  }, [user]);

  return [admin];
};

export default useAdmin;
