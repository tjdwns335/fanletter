import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setMember } from 'testRedux/modules/member';

function Header() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;
    dispatch(setMember(e.target.textContent));
  }
  return (
    <HeaderStyle>
      <TitleStyle>오마이걸 팬레터</TitleStyle>
      <UlStyle onClick={onActiveMember}>
        <ListStyle $activeMember={activeMember}>효정</ListStyle>
        <ListStyle $activeMember={activeMember}>미미</ListStyle>
        <ListStyle $activeMember={activeMember}>유아</ListStyle>
        <ListStyle $activeMember={activeMember}>승희</ListStyle>
        <ListStyle $activeMember={activeMember}>유빈</ListStyle>
        <ListStyle $activeMember={activeMember}>아린</ListStyle>
      </UlStyle>
    </HeaderStyle>
  )

}

export default Header

const HeaderStyle = styled.header`
  background: url(https://i.namu.wiki/i/23IWDVBFIP9J3Gi288Tm_N_Ji-gxLuVuH0ti2BxMPx90ScamKjClMqSwUalYYRoOAjDrBj5rQy7RDF9H9td7LA.webp);
  width: 100%;
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
  background-clip: text;
  margin-bottom: 50px;
`;
const UlStyle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 80px;
  background: linear-gradient(90deg, rgba(233,228,155,1) 0%, rgba(172,212,254,1) 20%, rgba(236,171,206,1) 50%, rgba(172,212,254,1) 75%, rgba(233,228,155,1) 100%);
  padding: 0 15px;
  border-radius: 15px;
`
const ListStyle = styled.li`
  ${props => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: #fff;
      `
    }
    return css`
      background-color: #16f397;
    `
  }}
  width: 90px;
  height: 40px;
  background-color: ${props => props.backgroundColor};
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`

// #16f397
