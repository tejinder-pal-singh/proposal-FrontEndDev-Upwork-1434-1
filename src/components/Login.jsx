import { useState } from 'react'
import Header from './Header'
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')
  return (
    <>
      <Header />
      <main className='login'>
        <h2 className='page-heading'>Log In</h2>
        <input type={'email'} autoComplete="off" placeholder="Email Address" value={email} onChange={(e) => { setEmail(e.target.value) }} className='email-field input-field' />
        <input type={'password'} autoComplete={"off"} autocomplete="off" placeholder="Password" value={passwd} onChange={(e) => { setPasswd(e.target.value) }} className='passwd-field input-field' />
        <section className='btn-section'>
          <button className='action-btn secondary-btn' style={{ marginRight: '16px' }} onClick={() => { alert(`Let's get connected and develop functionality as well`) }} >Forgot Password</button>
          <button className='action-btn primary-btn' onClick={() => { alert(`Let's do business together`) }}>Log in</button>
        </section>
      </main>
    </>
  )
}
export default Login
