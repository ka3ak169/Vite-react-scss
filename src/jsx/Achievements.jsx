function Achievements() {
  
  return (
    <>
      <div className='achievements'>
        <div className='achievements__inscription'>
          <h2 className='achievements__title'></h2>
          <div className='banner__points'>
            <div className='banner__point'></div>
            <div className='banner__point'></div>
            <div className='banner__point'></div>
            <div className='banner__point'></div>
          </div>
          <p className='achievements__text'></p>
        </div>
        <div className='achievements__sheets-container'>
          <div className='achievements__left-column'>
            <div className='achievements__cell'>
              <span className='achievements__number'></span>
              <p className='achievements__cup'></p>
            </div>
            <div className='achievements__cell'>
              <span className='achievements__number'></span>
              <p className='achievements__cup'></p>
            </div>
            <div className='achievements__cell'>
              <span className='achievements__number'></span>
              <p className='achievements__cup'></p>
            </div>
          </div>
          <div className='achievements__right-column'>
          <div className='achievements__cell'>
              <span className='achievements__number'></span>
              <p className='achievements__cup'></p>
            </div>
            <div className='achievements__cell'>
              <span className='achievements__number'></span>
              <p className='achievements__cup'></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Achievements