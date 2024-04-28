function Contacts() {
  
  return (
    <>        
      <div className='contacts'>
        <div className='contacts__cell'>
          <span className='contacts__description'>address</span>
          <p className='contacts__address'>Tbilisi. Next to Axis tower. Cross the road there and on the right will be</p>
        </div>
        <div className='contacts__cell'>
          <span className='contacts__description'>telephone</span>
          <span className='contacts__address'>8-800-555-35-35<br />8-155-333-22-11</span>
        </div>
        <div className='contacts__cell'>
          <span className='contacts__description'>operating mode</span>
          <p className='contacts__address'>Opening: Well, as soon as we wake up<br />Closing: How you want to cheal</p>
        </div>
      </div>
    </>
  )
}

export default Contacts