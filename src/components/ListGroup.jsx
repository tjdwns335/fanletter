import React from 'react';
import styled from 'styled-components';
import defaultUser from "assets/defaultuser.jpg";
import { getLocationDate } from 'utill/date';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ListGroup() {
  const letters = useSelector((state) => state.letters);
  const activeMember = useSelector((state) => state.member);
  const filterFakeData = letters.filter(item => item.writedTo === activeMember);
  const navigate = useNavigate();
  return (
    <ListWrap>
      {
        filterFakeData.length === 0 ? <p>{activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되보세요!</p> :
          filterFakeData.map((item) => {
            return (
              <LetterWrap key={item.id} onClick={() => navigate(`/detail/${item.id}`)}>
                <UserInfo>
                  <AvatarStyle>
                    <img src={item.avatar ?? defaultUser} alt="아바타 이미지" />
                  </AvatarStyle>
                  <NickNameStyle>
                    <p>{item.nickname}</p>
                    <time>{getLocationDate(item.createdAt)}</time>
                  </NickNameStyle>
                </UserInfo>
                <ContentStyle>
                  {item.content}
                </ContentStyle>
              </LetterWrap>
            )
          })
      }
    </ListWrap>
  )
}

export default ListGroup

const ListWrap = styled.ul`
  background-color: #333;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 12px;
  border-radius: 12px;
  color: #fff;
`
const LetterWrap = styled.li`
  display:flex;
  flex-direction: column;
  gap:12px;
  color: #faeded;
  padding: 12px;
  border: 1px solid #faeded;
  border-radius: 12px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover{
    transform: scale(1.03);
  }
`
const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
const AvatarStyle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

const NickNameStyle = styled.div`
  display: flex;
  flex-direction:column;
  gap:6px;
`
const ContentStyle = styled.p`
  background-color: #f8f8f8;
  border-radius: 12px;
  padding: 12px;
  margin-left: 62px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #333;
`