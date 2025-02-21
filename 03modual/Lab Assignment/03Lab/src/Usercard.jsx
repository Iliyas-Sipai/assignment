import React from 'react'

function Usercard({name,age,location}) {
  return (
    <div className='usercard'>
      <h4> name is{name}</h4>
      <h4> age is{age}</h4>
      <h4>location is {location}</h4>
    </div>
  )
}

export default Usercard
