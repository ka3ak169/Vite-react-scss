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
        <div className='banner__contacts'>
          <div className='banner__cell'>
            <span className='banner__description'>address</span>
            <p className='banner__address'>Tbilisi. Next to Axis tower. Cross the road there and on the right will be</p>
          </div>
          <div className='banner__cell'>
            <span className='banner__description'>telephone</span>
            <span className='banner__address'>8-800-555-35-35<br />8-155-333-22-11</span>
          </div>
          <div className='banner__cell'>
            <span className='banner__description'>operating mode</span>
            <p className='banner__address'>Opening: Well, as soon as we wake up<br />Closing: How you want to cheal</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner