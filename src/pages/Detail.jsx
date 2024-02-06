import React, { useState } from 'react'
import styled from 'styled-components'
import defaultUser from "assets/defaultuser.jpg";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getLocationDate } from 'utill/date';
import { useDispatch, useSelector } from 'react-redux';
import { changeLetter, deleteLetter } from 'testRedux/modules/letters';

function Detail() {
  const letters = useSelector((state) => state.letters);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [changeBtn, setChangeBtn] = useState(false);
  const [changeText, setChangeText] = useState('');
  const { createdAt, nickname, avatar, content, writedTo } = letters.find(item => item.id === id);

  const deleteButton = () => {
    const deleteAnswer = window.confirm('삭제하시겠습니까?');
    if (deleteAnswer) {
      navigate("/")
      dispatch(deleteLetter(id));
    }
  }

  const changeDetail = () => {
    if (!changeText) {
      return alert("수정사항이 없습니다!");
    }
    const changeAnswer = window.confirm('수정하시겠습니까?');
    if (changeAnswer) {

      dispatch(changeLetter({ id, changeText }));
      setChangeBtn(false);
      setChangeText('');
    }
  }
  return (
    <Wrap>
      <HomeBtnStyle>
        <Link to="/">
          <button>홈으로</button>
        </Link>
      </HomeBtnStyle>
      <DetailContent>
        <UserInfoStyle>
          <NickNameStyle>
            <AvatarStyle>
              <img src={avatar || defaultUser} alt="아바타 이미지" />
            </AvatarStyle>
            <span>{nickname}</span>
          </NickNameStyle>
          <time>{getLocationDate(createdAt)}</time>
        </UserInfoStyle>
        <MemberStyle>To: {writedTo}</MemberStyle>
        {
          changeBtn ?
            <>
              <TextareaStyle
                defaultValue={content}
                onChange={(e) => setChangeText(e.target.value)}
              />
              <BtnGroup>
                <button onClick={() => setChangeBtn(false)}>취소</button>
                <button onClick={changeDetail}>수정완료</button>
              </BtnGroup>
            </> :
            <>
              <ContentStyle>{content}</ContentStyle>
              <BtnGroup>
                <button onClick={() => setChangeBtn(true)}>수정</button>
                <button onClick={deleteButton}>삭제</button>
              </BtnGroup>
            </>
        }
      </DetailContent>
    </Wrap>
  )
}

export default Detail

const Wrap = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const HomeBtnStyle = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  & button{
    font-size: 14px;
    cursor: pointer;
    background-color: #333;
    color: #faeded;
    margin-bottom: 10px;
    margin-right: 10px;
    border-color: transparent;
    padding: 10px;
    font-weight: 700;
    &:hover{
      background-color: #ff4848;
      color: #333;
    }
  }
`

const DetailContent = styled.div`
  background-color: #333;
  color: #fff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 700px;
  padding: 30px;
`
const UserInfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span{
    font-size: 32px;
  }
`
const NickNameStyle = styled.div`
  display:flex;
  align-items: center;
  gap: 12px;
`

const MemberStyle = styled.span`
  font-size: 24px;
`
const ContentStyle = styled.p`
  font-size: 24px;
  padding: 12px;
  background-color: #faeded;
  color: #000;
  border-radius: 10px;
  padding: 30px;
  width: 640px;
  height: 280px;
  font-family: 'Roboto';
`

const BtnGroup = styled.div`
  display:flex;
  justify-content: flex-end;
  gap:10px;
  button{
    font-size: 14px;
    cursor: pointer;
    background-color: #faeded;
    color: #333;
    margin-bottom: 10px;
    margin-right: 10px;
    border-color: transparent;
    padding: 8px;
    font-weight: 700;
    &:hover{
      background-color: #fff;
      color: #333;
    }
  }
`

const AvatarStyle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  & img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
const TextareaStyle = styled.textarea`
  font-size: 24px;
  padding: 12px;
  background-color: #faeded;
  color: #000;
  border-radius: 10px;
  padding: 30px;
  resize: none;
  width: 639px;
  height: 280px;
  font-family: 'Roboto';
  line-height: 1.5;
`
