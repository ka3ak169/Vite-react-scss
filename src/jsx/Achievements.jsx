/* eslint-disable react/no-unescaped-entities */
function Achievements() {
  
  return (
    <>
      <div className='achievements'>
        <div className='achievements__inscription'>
          <h2 className='achievements__title'>
          WHAT DO YOU GET WHEN BUYING OUR DELICIOUS GIN
          </h2>
          <div className='banner__points achievements__points'>
            <div className='banner__point'></div>
            <div className='banner__point'></div>
            <div className='banner__point'></div>
            <div className='banner__point'></div>
          </div>
          <p className='achievements__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. 
          </p>
        </div>
        <div className='achievements__sheets-container'>
          <div className='achievements__left-column'>
            <div className='achievements__cell'>
              <span className='achievements__number'>#1</span>
              <p className='achievements__cup'>OUR GIN BOASTS A RICH MULTIFACETED FLAVOR</p>
            </div>
            <div className='achievements__cell'>
              <span className='achievements__number'>#3</span>
              <p className='achievements__cup'>EACH BOTTLE OF OUR GIN IS THE RESULT OF METICULOUS HANDCRAFTED WORK</p>
            </div>
            <div className='achievements__cell'>
              <span className='achievements__number'>#5</span>
              <p className='achievements__cup'>WE PRODUCE ONLY LIMITED BATCHES OF OUR GIN</p>
            </div>
          </div>
          <div className='achievements__right-column'>
          <div className='achievements__cell'>
              <span className='achievements__number'>#2</span>
              <p className='achievements__cup'>EACH BOTTLE OF OUR GIN IS A WORK OF ART WITH AN EXQUISITE DESIGN</p>
            </div>
            <div className='achievements__cell'>
              <span className='achievements__number'>#4</span>
              <p className='achievements__cup'>BY PURCHASING OUR GIN, YOU'RE NOT JUST BUYING A DRINK, BUT ACQUIRING AN ENTIRE LIFESTYLE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Achievements