import React, { useState } from 'react'
import styled from 'styled-components';

function FormContent({ girlGroup }) {
  const addEventHandler = (e) => {
    e.preventDefault();
  }
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  return (
    <FormStyle>
      <SectionStyle>
        <LabelStyle>닉네임 : </LabelStyle>
        <InputStyle
          type="text"
          value={name}
        />
      </SectionStyle>
      <SectionStyle>
        <LabelStyle>내용 : </LabelStyle>
        <TextareaStyle
          maxlength="100"
          value={detail}
        ></TextareaStyle>
      </SectionStyle>
      <SectionStyle>
        <SecondLabel>누구에게 보내실 건가요?</SecondLabel>
        <select>
          {
            girlGroup.map((girl) => <option value={girl.name}>{girl.name}</option>)
          }
        </select>
      </SectionStyle>
      <FormButton>
        <button onClick={addEventHandler}>팬레터 등록</button>
      </FormButton>
    </FormStyle >
  )
}

export default FormContent

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 40%;
  background-color: #e2e2e2;
`

const SectionStyle = styled.section`
  margin-bottom: 30px;
  height: 100%;
  display: flex;
  align-items: center;
`
const LabelStyle = styled.label`
  display: inline-block;
  width: 10%;
  margin-right: 5%;
  height: 100%;
`
const InputStyle = styled.input`
  width: 75%;
`
const TextareaStyle = styled.textarea`
  resize: none;
  height: 80px;
  width: 75%;
`
const SecondLabel = styled.label`
  margin-right: 3%;
`

const FormButton = styled.div`
  text-align: right;
  button{
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #16f397;
    color: #333;
    margin-bottom: 10px;
    margin-right: 10px;
    border-color: transparent;
    &:hover{
      background-color: #fff;
    }
  }
`


