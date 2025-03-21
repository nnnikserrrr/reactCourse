import React from 'react'
import UserName from './userName'

let USERS = [
  {id: 1,name: 'Alex', surname: 'test', age: 20, passportId: 123},
  {id: 2,name: 'Alex',surname: 'test2', age: 20, passportId: 66},
  {id: 3,name: 'John', surname: 'test2', age: 56, passportId: 123},
  {id: 4,name: 'Bob', surname: 'test3', age: 10, passportId: 50}
]

const changeUniqueKey = (user) => {
  return (`${user.name}_${user.surname}_${user.age}_${user.passportId}`)
}

const App = () => {
  const changeName = (id, name) => {
    USERS = USERS.map((user) => {
      if(user.id === id) {
        return {id: user.id,
                name: name,
                surname: user.surname,
                age: user.age,
                passportId: user.passportId
        }
      }
      return user
    })
  }
  
  const data = []
  USERS.forEach((user) => {
    const key = changeUniqueKey(user)
    
    data.push(
      <div key = {key}>
        <UserName userName = {user.name} userSurname = {user.surname} userAge = {user.age} changeName = {changeName} />
      </div>
    )
  
  })
  
  return (
    <div>{data}</div>
  )
}

export default App