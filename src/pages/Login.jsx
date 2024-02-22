import { authApi } from 'api';
import useForm from 'hooks/useForm';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styled, { css } from 'styled-components'
import { __login } from 'testRedux/modules/authSlice';

function Login() {
  const dispatch = useDispatch();
  const [loginMode, setLoginMode] = useState(true);
  const { formState, onChangeHandler, resetForm } = useForm({
    id: "", password: "", nickname: "",
  });
  const { id, password, nickname } = formState;


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (loginMode) {
      dispatch(__login(id, password));
    } else {
      try {
        const { data } = await authApi.post("/register", {
          id, password, nickname
        });
        if (data.success) {
          setLoginMode(true);
          resetForm();
          toast.success(data.message);
        }

      } catch (error) {
        toast.error(error.response.data.message);
      }

    }
  }

  return (
    <Container>
      <FormStyle onSubmit={onSubmitHandler}>
        <TitleStyle>{loginMode ? "로그인" : "회원가입"}</TitleStyle>
        <InputStyle
          name="id"
          type="text"
          placeholder="아이디는 (4-10)글자"
          minLength={4}
          maxLength={10}
          value={id}
          onChange={onChangeHandler}
        />
        <InputStyle
          name="password"
          type="text"
          placeholder="비밀번호은 (4-15글자)"
          minLength={4}
          maxLength={15}
          value={password}
          onChange={onChangeHandler}
        />{!loginMode && <InputStyle
          name="nickname"
          type="text"
          placeholder="닉네임은 (1-10글자)"
          minLength={1}
          maxLength={10}
          value={nickname}
          onChange={onChangeHandler}
        />}
        <LoginBtnStyle
          disabled={loginMode ? !id || !password : !id || !password || !nickname}>
          {loginMode ? "로그인" : "회원가입"}
        </LoginBtnStyle>
        <ToggleText>
          <span onClick={() => setLoginMode((prev) => !prev)}>{loginMode ? "회원가입" : "로그인"}</span>
        </ToggleText>
      </FormStyle>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display:flex;
  justify-content: center;
  align-items: center;
`
const FormStyle = styled.form`
  background-color: #fff;
  width: 500px;
  border-radius: 12px;
  padding: 30px;
  font-size: 16px;
  text-align: center;
`
const TitleStyle = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
  text-align: left;
`
const InputStyle = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 100%;
  display: block;
  margin-bottom: 24px;
  padding: 10px 0;
`
const LoginBtnStyle = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 16px;
  color: #fff;
  cursor: pointer;
  ${props => {
    if (props.disabled) {
      return css`
        background-color: lightgray;
      `
    }
    return css`background-color: black;`
  }}

`

const ToggleText = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 24px;
  & span{
    color: lightgray;
    cursor: pointer;
    user-select: none;
    &:hover{
      color: black;
    }
  }
`