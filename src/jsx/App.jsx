import { Routes, Route} from 'react-router-dom';
import '../css/App.css'
import './Header'
import Header from './Header'

function App() {
  
  return (
    <>
      <div className='first-screen'>
        <Header />
        <Routes>
          {/* <Route path="/" element={< />}/> */}
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
