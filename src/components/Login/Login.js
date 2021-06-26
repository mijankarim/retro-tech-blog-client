import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    success: false,
    error: "",
  });

  const [validation, setValidation] = useState({
    emailValidation: "",
    passwordValidation: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/manageBlogs" } };

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.name = res.user.displayName;
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log("Sign in info", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      const isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      if (!isFieldValid && e.target.value) {
        const newValidation = { ...validation };
        newValidation.email = "Email Is Not Valid";
        setValidation(newValidation);
      } else {
        const newValidation = { ...validation };
        newValidation.email = "";
        setValidation(newValidation);
      }
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      if (!isFieldValid && e.target.value) {
        const newValidation = { ...validation };
        newValidation.password =
          "Password should more than 6 Characters and has at least one number";
        setValidation(newValidation);
      } else {
        const newValidation = { ...validation };
        newValidation.password = "";
        setValidation(newValidation);
      }
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  return (
    <div className="form-container mx-auto border border-dark px-4 py-4 my-4">
      <h3 className="mb-3 text-center">Login</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          {validation.email && (
            <p className="text-danger mt-3 text-center">{validation.email}</p>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {validation.password && (
            <p className="text-danger mt-3 text-center">
              {validation.password}
            </p>
          )}
        </Form.Group>

        <Button className="city-btn full-width-btn" type="submit">
          Sign In
        </Button>
      </Form>

      {user.error && (
        <p className="text-danger mt-3 text-center">{user.error}</p>
      )}

      {user.success && (
        <p className="text-success mt-3 text-center">
          User Logged In Successfully.
        </p>
      )}
    </div>
  );
};

export default Login;
