import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DetailPage from '../pages/DetailPage'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/detail/:name' element={<DetailPage />}></Route>
    </Routes>
  )
}

export default Routing
