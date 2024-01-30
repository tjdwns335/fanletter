import React from 'react'

function FormContent() {
  return (
    <form>
      <label>닉네임 : </label>
      <input type="text" />
      <label>내용 : </label>
      <textarea maxlength="100"></textarea>
      <div>
        <label>누구에게 보내실 건가요?</label>
        <select>
          <option value="효정">효정</option>
          <option value="미미">미미</option>
          <option value="유아">유아</option>
          <option value="승희">승희</option>
          <option value="유빈">유빈</option>
          <option value="아린">아린</option>
        </select>
      </div>
      <button>팬레터 등록</button>
    </form>
  )
}

export default FormContent