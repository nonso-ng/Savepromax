import { useContext } from "react";
import { userAuthContext } from "../Context/userAuthContext";


const Login = () => {
  const { setUsername, setUsermail, setShowProfile, username, usermail, userpassword, setUserpassword } =
    useContext(userAuthContext);
  //const {setUsermail} = useContext (userAuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //     username, usermail
    // }
    // console.log(data);
    setShowProfile( username, usermail,userpassword )
  };

  return (
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
    </div>
  );
};

export default Login;
