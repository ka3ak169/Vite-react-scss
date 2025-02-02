import Navbar from "./Navbar";

function Header({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <div className='header'>
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </>
  );
}

export default Header;