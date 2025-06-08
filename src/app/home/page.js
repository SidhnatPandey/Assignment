"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const identifier = localStorage.getItem("userIdentifier");

    const fetchData = () => {
      axios
        .get(`https://otp-backend-w4lj.onrender.com/api/v1/userDetails?identifier=${identifier}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data?.user);
            console.log(response.data?.user);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <p style={{display: "flex", justifyContent: "center", alignItems: "center"}}>Hello {user?.identifier ? `, ${user.identifier}` : ""}!</p>
      <p>Welcome to New App</p>
    </div>
  );
};

export default Page;
