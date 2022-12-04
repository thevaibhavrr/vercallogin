import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  const [username, setUserName] = useState({});
  const [show, setShow] = useState(false);

  const HomePage = async () => {
    try {
      const res = await fetch("/about", { method: "get" });
      const data = await res.json();
      await setUserName(data);
      setShow(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    HomePage();
  }, []);

  return (
    <header>
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/colour-smoke-background_71163-196.jpg')",
          height: "610px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">welcome {username.name}</h1>
              <h5 className="mb-4">
                {show
                  ? `welcome ${username.name} , we are happy to see you`
                  : "Join us for more featurs"}
              </h5>

              <div>
                {show ? (
                  <MDBBtn
                    className="m-2"
                    tag="a"
                    outline
                    size="lg"
                    // target="_blank"
                    href="/about"
                  >
                    See Your Details
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    className="m-2"
                    tag="a"
                    outline
                    size="lg"
                    // target="_blank"
                    href="/register"
                  >
                    Ragiester User
                  </MDBBtn>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
