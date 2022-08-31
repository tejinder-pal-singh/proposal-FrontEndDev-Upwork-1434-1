import "./header.css";
const Header = () => {
  return (
    <div className='header'>
      <h1 className='heading'>Work<span>Alert</span></h1>
      <button className='outline-btn' onClick={() => { alert('Hi! thanks for showing interest') }}>SIGN UP</button>
    </div>

  )
}
export default Header
