import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logout", {
      method: "get",
      headers: {
        Accept: "appllication/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/about");
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
}

export default Logout;
