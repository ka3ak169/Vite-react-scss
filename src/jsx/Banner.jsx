function Banner() {
  
  return (
    <>
      <div className='banner'>
        <div className='banner__logo'></div>
        <div className='banner__points'>
          <div className='banner__point'></div>
          <div className='banner__point'></div>
          <div className='banner__point'></div>
          <div className='banner__point'></div>
        </div>
        <p className='banner__text'>Flavora gin is the most delicious and incredible in the world</p>
        <button className='banner__button'>
          ORDER
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
        </button>        
      </div>
    </>
  )
}

export default Banner