import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderStyle>
      <TitleStyle>오마이걸 팬레터</TitleStyle>
      <UlStyle>
        <ListStyle>효정</ListStyle>
        <ListStyle>미미</ListStyle>
        <ListStyle>유아</ListStyle>
        <ListStyle>승희</ListStyle>
        <ListStyle>유빈</ListStyle>
        <ListStyle>아린</ListStyle>
      </UlStyle>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
  background: url(https://i.namu.wiki/i/23IWDVBFIP9J3Gi288Tm_N_Ji-gxLuVuH0ti2BxMPx90ScamKjClMqSwUalYYRoOAjDrBj5rQy7RDF9H9td7LA.webp) no-repeat;
  width: 40%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`
const TitleStyle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(90deg, rgba(233,228,155,1) 0%, rgba(172,212,254,1) 20%, rgba(236,171,206,1) 50%, rgba(172,212,254,1) 75%, rgba(233,228,155,1) 100%);
  color: transparent;
    -webkit-background-clip: text;
  margin-bottom: 50px;
`;
const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: 80px;
  background: linear-gradient(90deg, rgba(233,228,155,1) 0%, rgba(172,212,254,1) 20%, rgba(236,171,206,1) 50%, rgba(172,212,254,1) 75%, rgba(233,228,155,1) 100%);
  padding: 0 15px;
`
const ListStyle = styled.li`
  width: 50px;
  height: 30px;
  background-color: #16f397;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
`
