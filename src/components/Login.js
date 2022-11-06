import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { userAuthContext } from "../Context/userAuthContext";

const Login = () => {
  const {
    setUsername,
    setUsermail,
    setShowProfile,
    username,
    usermail,
    userpassword,
    setUserpassword,
  } = useContext(userAuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowProfile(username, usermail, userpassword);
  };

  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Show the login information" />
        <link rel="canonical" href="/src/App.js" />
      </Helmet>
      <div className="container">
        <div className="login-section">
          <h1> Login To Your Account</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              required
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              onChange={(event) => {
                setUsermail(event.target.value);
              }}
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              onChange={(event) => {
                setUserpassword(event.target.value);
              }}
            />
            <button className="btn">SUBMIT</button>
          </form>
        </div>
        <div class="login-img"></div>
      </div>
    </>
  );
};

export default Login;
