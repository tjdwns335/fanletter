import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from 'testRedux/modules/authSlice';

function Layout() {
  const dispatch = useDispatch();
  return (
    <>
      <Wrap>
        <Link to="/">Home</Link>
        <div>
          <Link to="/profile">프로필</Link>
          <Link onClick={() => { dispatch(logout()) }}>로그아웃</Link>
        </div>
      </Wrap>
      <Outlet />
    </>
  )
}

export default Layout

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 100px;
  background-color: #f6ba24;
  color: #1f2667;
  user-select: none;
  & a, & div a{
    text-decoration: none;
  }
  & a:hover{
    color:#16f397;
  }
  & div a:hover{
    color:#16f397;
  }
  & div a:nth-child(2){
    margin-left: 15px;
  }
`