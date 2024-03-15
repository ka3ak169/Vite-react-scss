import { Routes, Route} from 'react-router-dom';
import '../css/App.css'
import './Header'
import Header from './Header'
import Banner from './Banner'

function App() {
  
  return (
    <>
      <div className='main'>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />}/>
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
