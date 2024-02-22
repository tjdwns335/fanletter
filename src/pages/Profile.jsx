import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { __changeProfile } from 'testRedux/modules/authSlice';

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth);
  const [change, setChange] = useState(false);
  const [changeText, setChangeText] = useState(nickname);
  const [imageSelect, setImageSelect] = useState(avatar);
  const [fileSelect, setFileSelect] = useState(null);
  const dispatch = useDispatch();

  const onChangeImage = (e) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFileSelect(file)
    if (file) {
      let image = window.URL.createObjectURL(file);
      setImageSelect(image);
    }
  }

  const doneClickHandler = () => {
    const formData = new FormData();
    if (changeText) {
      formData.append("nickname", changeText);
    }
    if (imageSelect !== avatar) {
      formData.append("avatar", fileSelect);
    }
    dispatch(__changeProfile(formData));
    setChange(false);
  }

  return (
    <LoginWrap>
      <ProfileContents>
        <h1>프로필 관리</h1>
        {change ? <>
          <AvatarStyle>
            <label>
              <img src={imageSelect} alt="아바타 이미지" />
              <input
                type="file"
                onChange={onChangeImage}
                accept="image/*"
              />
            </label>
          </AvatarStyle>
          <input
            type="text"
            value={changeText}
            onChange={(e) => setChangeText(e.target.value)}
          />
          <p>{userId}</p>
          <BtnGroup>
            <LoginBtnStyle onClick={() => setChange(false)}>취소</LoginBtnStyle>
            <LoginBtnStyle onClick={doneClickHandler}>수정완료</LoginBtnStyle>
          </BtnGroup>
        </> : <>
          <AvatarStyle>
            <img src={imageSelect} alt="userAvatar" />
          </AvatarStyle>
          <NicknameStyle>{changeText}</NicknameStyle>
          <p>{userId}</p>
          <LoginBtnStyle onClick={() => setChange(true)}>수정하기</LoginBtnStyle>
        </>}
      </ProfileContents>
    </LoginWrap>
  )
}

export default Profile;

const LoginWrap = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
const ProfileContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #f6ba24; 
  padding: 30px 150px;
  border-radius: 15px;
  
  & h1{
    font-size: 30px;
    font-weight: 700;
  }
`

const AvatarStyle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  & img{
    width: 100%;
    height: 100%;
  }
  & input{
    display: none;
  }
`

const NicknameStyle = styled.p`
  font-size: 20px;
  font-weight: 700;
`

const LoginBtnStyle = styled.button`
  background-color: black;
  color: #fff;
  padding: 8px 20px;
  cursor: pointer;
`

const BtnGroup = styled.div`
  display: flex;
  gap: 12px
`