import React from 'react'

const UserName = (props) => {
  return (
    props.userAge > 20 ? (<p className='fewfe'>{props.userName}<button>Изменить имя</button></p>) : (<p className='fewfe'>{props.userName} {props.userSurname}</p>)
      )
}

export default UserName