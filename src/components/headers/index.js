import React from 'react'
import { Hearder } from './style'
import logo from '../../assets/logotmdb.png'
import { Link } from 'react-router-dom'
const headers = () => {
  return (
    <Hearder>
      <div className="content">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </Hearder>
  )
}

export default headers