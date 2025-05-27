import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

// 哈哈哈哈

const Login: FC = () => {
  const nav=useNavigate()
  function clickHandler(){
    nav(-1)
  }
// 这段话在这里
  return (
    <div>
      <div>Login</div>
      <button onClick={clickHandler}>返回了么？不想返回</button>
    </div>
  )
  //新建一个分支
}

export default Login
