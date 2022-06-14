import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const clearValue = () => {
    setEmail(null);
    setPassword(null);
    document.getElementById("email").value = null;
    document.getElementById("password").value = null;
  };
  return (
    <div className={classes.pages}>
      <div className={classes.signinContainer}>
        <div className={classes.topic}>Sign in with your email address</div>
        <div className={classes.input}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            style={{
              borderRadius: "150px",
              marginTop: "9px",
            }}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={classes.submit}>
          <Button
            className={classes.button}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "7px",
              backgroundColor: "grey",
            }}
            variant="contained"
            size="large"
            onClick={() => {
              alert(`Email: ${email}, Password ${password}`);
              clearValue();
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
      <div className={classes.help}>
        <div className={classes.helpItem}>Forgot password</div>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={classes.helpItem}>Back to home page</div>
        </Link>
      </div>
    </div>
  );
};
export default Login;
