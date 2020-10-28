import React , { useState } from 'react'
import Tweet from './Tweet'


function App(){

  const [ users , setUsers ] = useState([
    { name: 'Thiago'   , message: 'Olá' },
    { name: 'Lucas'    , message: 'Olá2' },
    { name: 'Leopoldo' , message: 'Olá3' }
  ])

  return (
    <div className='app'>
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  )
}

export default App