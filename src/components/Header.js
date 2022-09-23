import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => {
  return (
    <header className='header'>
      <div className='' style={{ marginLeft:"1em", width:"10%" }}>
        <img src="images/logo.png" alt="logo" style={{ width:"100px"}} />
      </div>
      <div style={{ width:"80%" }}>
        <h1 style={{ color:"#DC9D00"}} >{title}</h1>
        <h3 className='subTitle'>{subtitle}</h3>
      </div>
      <div className='' style={{ marginLeft:"1em", width:"10%" }}>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header