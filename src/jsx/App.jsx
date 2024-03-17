import { Routes, Route} from 'react-router-dom';
import '../css/App.css'
import './Header'
import Header from './Header'
import Banner from './Banner'
import Achievements from './Achievements'

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
              <Achievements />
            </>  
            }
          />
          {/* <Route
            path="messages"
            element={< />}
          /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
