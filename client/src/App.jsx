import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Users from './Users';
import CreateUsers from './CreateUser';
import UpdateUsers from './UpdateUser';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUsers/>}></Route>
          <Route path='/update/:id' element={<UpdateUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
