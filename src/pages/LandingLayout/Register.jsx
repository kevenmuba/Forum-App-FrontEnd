import { Navigate, useNavigate } from 'react-router-dom'
import axios from '../../axiosConfig'
import React, { useRef } from 'react'
// useref is react builtin props

function Register() {
  //  
  const userNameDom = useRef(null)
  const firstNameDom = useRef(null)
  const lastNameDom = useRef(null)
  const emailDom = useRef(null)
  const passwordDom = useRef(null)
  //console.log(userNameDom);
   const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(emailDom.current.style.backgroundColor = 'red')
    let usernameValue = userNameDom.current.value
    let firstnameValue = firstNameDom.current.value
    let lastnameValue = lastNameDom.current.value
    let emailValue = emailDom.current.value
    let passValue = passwordDom.current.value

    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passValue
    ) {
       alert('Please provide all required information')
      return;
    }
    try {
      await axios.post('/users/register', {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passValue
      })
      alert('Registration Successful, please login!')
      navigate('/login')
    } catch (err) {
     // alert(err.message)
     alert("Username or Email already in use.")
    }
    
   
  }
  return (
    <div className='col card p-5 text-center'>
    <div>
      <h3 className='m-3'>Join the network</h3>
      <p className='mb-5'>Already have an account?{" "}
        <a href="#"  className='fw-semibold text-decoration-non text-warning'> Sing in</a>
      </p>
    </div>

    <form onSubmit={handleSubmit}  action="">
      <div className='d-flex flex-column gap-3'>
        <input  ref={emailDom}  type="email" className='form-control p-3' placeholder='Email address' />
        <div className='d-flex gap-3'>
          <input ref={firstNameDom}  type="text" className='form-control p-3' placeholder='First Name' />

          <input ref={lastNameDom}  type="text" className='form-control p-3' placeholder='Last Name' />
        </div>
        <input ref={userNameDom} type="text" className='form-control p-3' placeholder='User Name' />
        <input ref={passwordDom}  type="password" className='form-control p-3' placeholder='password' />
      </div>

      <div className='p-3'>
        <small>I agree to the privacy and terms of service.</small>
      </div>

      <div className='d-grid'>
        <button type='submit' className='btn btn-primary action__btn fs-5 fw-semibold'>Agree and join</button>
        <div className='mt-3'>
          <p className='d-flex justify-content-center'>
            <a href="#" className='fw-semibold text-decoration-none text-warning'>Already have an account?</a>
          </p>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Register
