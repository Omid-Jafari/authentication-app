import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider";
import { Link } from 'react-router-dom';
import Button from './component/Button';

import axios from './api/axios';
import styled from "styled-components";
const LOGIN_URL = '/api/login';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 320px;
  padding: 20px;
  color: grey;

  input {
    width: 100%;
    height: 30px;
    border: 1px solid grey;
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }

  .error {
    color: red;
  }

`;

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  
  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ username:user, password:pwd }),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: false
          }
      );
      // console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      setAuth({ user, pwd });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (error) {
      setErrMsg('Login Failed');
    }
  };

    return (
      <Wrapper>{success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <Link to="/users">Go to Users list.</Link>
            </p>
        </section>
    ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <Button>Login</Button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    {/*put router link here*/}
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
    )}
      </Wrapper>
    );
}

export default Login;