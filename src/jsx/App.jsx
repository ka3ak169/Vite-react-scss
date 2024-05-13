import { Routes, Route } from 'react-router-dom';
import '../css/App.css'
import './Header'
import Header from './Header'
import Banner from './Banner'
import Achievements from './Achievements'
import Calc from './Calc'
import SocialIcons from './SocialIcons'
import Contacts from './Contacts'
import UsProducts from './UsProducts'
import Product from './Product'
import Slider from './Slider'
import SliderItem from './SliderItem'
import { slides } from '../../public/data/products'

console.log(slides);



function App() {
  
  return (
    <>
      <div className='main'>
        <Header />
        <Routes>
          <Route path="/"
            element={
            <>
              <Banner />
              {/* <Contacts /> */}
              <SocialIcons />
              {/* <Achievements /> */}
              <UsProducts />
              <Slider slides={slides}/>
              {/* <Calc /> */}
            </>  
            }
          />
          {/* <Route
            path="contacts"
            element={
              <>
                <Banner />
                <Achievements />
                <Calc />
              </>  
              }
          /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
