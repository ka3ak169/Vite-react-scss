function Banner({ togglePopup }) {
  return (
    <>
      <div className='banner'>
        <div className='banner__logo'></div>
        <button className='banner__button' onClick={togglePopup}>
          ORDER
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
        </button>        
      </div>
    </>
  );
}

export default Banner;
