import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/index";
import "./login-signup.css";

export function LoginPage() {
  const {
    loginAsGuest,
    authToken,
    isLoadingLoginAsGuest,
    loginUser,
    isLoadingLoginUser,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // if user is already logged in and tries to access login page, they will be redirected to previous page
    if (authToken) {
      navigate(-1);
    }
  }, []);

  function loginUserClickHandler(e) {
    e.preventDefault();
    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!email) {
      setEmailErrorMsg("Required field");
    } else if (!emailRegex.test(email)) {
      setEmailErrorMsg("Invalid email");
    }
    if (!password) {
      setPasswordErrorMsg("Required field");
    }
    if (email && password && emailRegex.test(email)) {
      loginUser(email, password);
    }
  }

  return (
    <main className="auth-page">
      <div className="card card-basic auth-card">
        <h2 className="card-header heading h2 heading-auth txt-center">
          <Link to="/login" className="btn-link btn-link-primary login-auth">
            Login
          </Link>
          /
          <Link to="/signup" className="btn-link btn-link-basic signup-auth">
            Signup
          </Link>
        </h2>
        <form className="form-auth my-3 txt-left">
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

          <button
            className="btn-basic btn-primary btn-auth my-3"
            to="../screens/view-notes.html"
            onClick={(e) => {
              loginUserClickHandler(e);
            }}
            disabled={isLoadingLoginUser || isLoadingLoginAsGuest}
          >
            {!isLoadingLoginUser ? "Login" : "Logging in..."}
          </button>
          <div className="my-2 txt-sm txt-center">OR</div>
          <button
            className="btn-basic btn-primary btn-auth my-3"
            type="button"
            disabled={isLoadingLoginUser || isLoadingLoginAsGuest}
            onClick={() => {
              loginAsGuest();
            }}
          >
            {!isLoadingLoginAsGuest ? "Login As Guest" : "Logging in..."}
          </button>
        </form>
        <div className="card-footer">
          <div className="action-button">
            <Link to="/" className="btn-link btn-link-basic">
              FORGOT PASSWORD?
            </Link>
          </div>
          <div className="action-icons txt-gray">
            NEW USER?
            <Link
              to="/signup"
              className="btn-link btn-link-primary txt-bold pl-1"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
