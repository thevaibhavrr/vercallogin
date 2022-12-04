import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

function Register() {
  // for redirect page to other page after succesfull login
  const navigate = useNavigate();

  // saveing data in user from user input
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  // getting data from user input
  const handlerInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    // saveing data in setUser filed and after save in user
    setUser({ ...user, [name]: value });
  };
  //sanding data to backend after click login button
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    // sanding in backend login page
    const res = await fetch("/login", {
      //method useing
      method: "post",
      //which type language use
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    // for sanding data to user sceccsfull or not
    const data = await res.json();
    console.log(data);
    if (data.message) {
      window.alert(data.message);
      navigate("/");
    } else {
      window.alert(data.err);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handlerInput}
                  type="email"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handlerInput}
                  type="password"
                />
              </div>

              <MDBBtn
                className="mb-4"
                size="lg"
                type="submit"
                id="singup"
                name="singup"
                onClick={PostData}
              >
                Register
              </MDBBtn>
              {/* </form> */}

              <p className="ms-5">
                Don't have an account?{" "}
                <a href="/register" class="link-info">
                  Register here
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
