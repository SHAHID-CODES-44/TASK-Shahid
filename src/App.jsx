import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
// import UserCard from './components/UserCard';
// import UserModal from './components/GenderFilter';
// import SearchBar from './components/SearchBar';
// import GenderFilter from './components/GenderFilter';
import UserDirectory from './components/UserDirectory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<UserDirectory/>}/>
      {/* <Route path='/UserCard' element={<UserCard/>}/>
      <Route path='/UserModal' element={<UserModal/>}/>
      <Route path='/SearchBar' element={<SearchBar/>}/>
      <Route path='/GenderFilter' element={<GenderFilter/>}/> */}
     </Routes>
    </>
  )
}

export default App
