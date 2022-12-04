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
  //for redirect to other page
  const navigate = useNavigate();
//which data need to  save in user filed
  const[user , setUser] = useState({
    name :'',
    email:'',
    age: '',
    phone:'',
    place:'',
    password:''
  })
  let name , value; 
// getting data from userinput
  const handlerInput = (e)=>{
    name = e.target.name;
    value = e.target.value;

      setUser({...user , [name]:value})
  }
//sanding data to backend
  const PostData = async(e)=>{
    e.preventDefault()
    //saveing in user
    const {name , email , phone , age , place , password} = user
    //saving in add router 
      const res = await fetch("/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          phone,
          age,
          place,
          password
        })
      });
//show result to cliet
      const data = await res.json()
      console.log(data)
      if (data.message) {
        window.alert(data.message);
        navigate("/login");
      } else {
        window.alert(data.err);
      }

  }




  // const navigate = useNavigate();

  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   place: "",
  //   password: "",
  // });
  // let name, value;

  // const handlerInput = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUser({ ...user, [name]: value });
  // };

  // const PostData = async (e) => {
  //   e.preventDefault();
  //   const { name, email, phone, place, password } = user;

  //   const res = await fetch("/add", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       place,
  //       phone,
  //       password,
  //     }),
  //   });

  //   const data = await res.json();
  //   console.log(data);
  //   if (data.message) {
  //     window.alert(data.message);
  //     navigate("/login");
  //   } else {
  //     window.alert(data.err);
  //   }
  // };

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
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handlerInput}
                  type="text"
                  className="w-100"
                />
              </div>

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
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Phone"
                  name="phone"
                  id="phone"
                  value={user.phone}
                  onChange={handlerInput}
                  type="number"
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Age"
                  name="age"
                  id="age"
                  value={user.age}
                  onChange={handlerInput}
                  type="number"
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Place "
                  name="place"
                  id="place"
                  value={user.place}
                  onChange={handlerInput}
                  type="text"
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
                Already have an account?{" "}
                <a href="/login" class="link-info">
                  Login here
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
