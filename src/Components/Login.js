import React, { useContext, useRef } from 'react'
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const {user, login, setLogin} = useContext(myContext);

    const nameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e)=> {
        e.preventDefault()
        const nameValue = nameRef.current.value;
        const PasswordValue = passwordRef.current.value;

        const findUser = user.find((users) => users.name === nameValue)
        
        if(findUser && findUser.password === PasswordValue){
            setLogin(true);
            alert('Login Successful');
            navigate('/');
        }
        else
        {alert('invalid Username or Password')}
    }
  return (
    <div>
        <h1>Login</h1>
        <input type='text' placeholder='Enter the Usernme' ref={nameRef}/>
        <input type='password' placeholder='Enter the Password' ref={passwordRef}/>
        <button onClick={handleLogin}>Login</button>
        
    </div>
  )
}

export default Login