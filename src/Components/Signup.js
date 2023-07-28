import React, { useContext, useRef } from 'react'
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';
import './signup.css';




function Signup() {

    const navigate = useNavigate();

    const {user,setUser} = useContext(myContext);

    const nameRef = useRef();
    const passwordRef = useRef();

   

    const handleSubmit = (e)=> {
        
        e.preventDefault()
        const nameValue = nameRef.current.value;
        const PasswordValue = passwordRef.current.value;

        setUser([...user, {name: nameValue, password: PasswordValue, id: Date.now()}])
        console.log(user);

        navigate('/login')
    }


  return (
    <div>
        <h1>Signup</h1>
        <input type='text' placeholder='Enter Username' ref={nameRef} style={{ padding: '10px', margin: '5px', width: '300px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <input type='password' placeholder='Enter the Password' ref={passwordRef} style={{ padding: '10px', margin: '5px', width: '300px', border: '1px solid #ccc', borderRadius: '5px' }} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signup