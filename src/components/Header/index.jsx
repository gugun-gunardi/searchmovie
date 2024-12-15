const Header = ({ title, children }) => {
  return (
    <nav className='navbar navbar-dark fixed-top bg-dark'>
      <a className='navbar-brand ' href='#' style={{ paddingLeft: '10px' }}>
        {title}
      </a>

      <div className='row '>
        <form className='form-inline mt-2] mt-md-0'>{children}</form>
      </div>
    </nav>
  );
};

export default Header;
