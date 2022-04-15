import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./login-signup.css";
import { useAuth } from "../../context";

export function SignupPage() {
  const { authToken, signupUser, isLoadingSignup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [firstNameErrorMsg, setFirstNameErrorMsg] = useState("");
  const [lastNameErrorMsg, setLastNameErrorMsg] = useState("");
  useEffect(() => {
    // if user is already logged in and tries to access signup page, they will be redirected to home page
    if (authToken) {
      navigate(-1);
    }
  }, []);
  function signupUserClickHandler(e) {
    e.preventDefault();
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!firstName) {
      setFirstNameErrorMsg("Required field");
    }
    if (!lastName) {
      setLastNameErrorMsg("Required field");
    }
    if (!email) {
      setEmailErrorMsg("Required field");
    } else if (!emailRegex.test(email)) {
      setEmailErrorMsg("Invalid email");
    }
    if (!password) {
      setPasswordErrorMsg("Required field");
    }
    if (!confirmPassword) {
      setConfirmPasswordErrorMsg("Required field");
    }
    if (password && confirmPassword && password !== confirmPassword) {
      setConfirmPasswordErrorMsg("Passwords do not match");
    }
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      emailRegex.test(email)
    ) {
      signupUser({ email, password });
    }
  }

  return (
    <main className="auth-page">
      <div className="card card-basic auth-card">
        <h2 className="card-header txt-center heading h2 heading-auth">
          <Link to="/login" className="btn-link btn-link-basic login-auth">
            Login
          </Link>{" "}
          /
          <Link to="/signup" className="btn-link btn-link-primary signup-auth">
            Signup
          </Link>
        </h2>
        <form className="form-auth my-3 txt-left">
          <div className="input-group auth-input-group">
            <label className="input-label py-1 py-1" htmlFor="firstName">
              First Name<sup>*</sup>
            </label>
            <input
              className="input-outline"
              type="text"
              autoComplete="off"
              name="firstName"
              placeholder="John"
              id="firstName"
              onChange={(e) => {
                setFirstNameErrorMsg("");
                setFirstName(e.target.value);
              }}
              required
            />
            <small className="msg-error">{firstNameErrorMsg}</small>
          </div>
          <div className="input-group auth-input-group">
            <label className="input-label py-1" htmlFor="lastName">
              Last Name<sup>*</sup>
            </label>
            <input
              className="input-outline"
              type="text"
              autoComplete="off"
              name="lastName"
              placeholder="Doe"
              id="lastName"
              onChange={(e) => {
                setLastNameErrorMsg("");
                setLastName(e.target.value);
              }}
              required
            />
            <small className="msg-error">{lastNameErrorMsg}</small>
          </div>
          <div className="input-group auth-input-group">
            <label className="input-label py-1" htmlFor="emailID">
              Email ID<sup>*</sup>
            </label>
            <input
              className="input-outline w-100"
              type="email"
              autoComplete="off"
              name="emailID"
              placeholder="delicious_desserts@email.com"
              id="emailID"
              onChange={(e) => {
                setEmailErrorMsg("");
                setEmail(e.target.value);
              }}
              required
            />
            <small className="msg-error">{emailErrorMsg}</small>
          </div>
          <div className="input-group auth-input-group">
            <label className="input-label py-1" htmlFor="password">
              Password<sup>*</sup>
            </label>
            <input
              className="input-outline w-100"
              type="password"
              name="password"
              placeholder="*******"
              id="password"
              onChange={(e) => {
                setPasswordErrorMsg("");
                setPassword(e.target.value);
              }}
              required
            />
            <small className="msg-error">{passwordErrorMsg}</small>
          </div>
          <div className="input-group auth-input-group">
            <label className="input-label py-1" htmlFor="confirm-password">
              Confirm Password<sup>*</sup>
            </label>
            <input
              className="input-outline w-100"
              type="password"
              name="confirm-password"
              placeholder="*******"
              id="confirm-password"
              onChange={(e) => {
                setConfirmPasswordErrorMsg("");
                setConfirmPassword(e.target.value);
              }}
              required
            />
            <small className="msg-error">{confirmPasswordErrorMsg}</small>
          </div>
          {/* <p className="txt checkbox-input-group auth-checkbox">
            <input type="checkbox" name="tnc" value="tnc" />
            <label htmlFor="tnc">
              Agree to terms and conditions<sup>*</sup>
            </label>
          </p> */}
          <button
            className="btn-basic btn-primary btn-auth my-3"
            onClick={signupUserClickHandler}
          >
            {!isLoadingSignup ? "Register" : "Loading..."}
          </button>
        </form>
        <div className="card-footer">
          <div className="action-button">
            <Link to="/" className="btn-link btn-link-basic">
              FORGOT PASSWORD?
            </Link>
          </div>
          <div className="action-icons">
            ALREADY REGISTERED?{" "}
            <Link to="/login" className="btn-link btn-link-primary txt-bold">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
