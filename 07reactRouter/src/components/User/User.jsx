import React from 'react'
import { useParams } from 'react-router'

function User() {
  const {UserId} = useParams();
  return (
    <div className='text-2xl font-bold text-center p-3 bg-gray-400 text-blue-950'>
      User: {UserId}
    </div>
  )
}

export default User
