import React, { useState } from 'react'
import Header from 'components/Header'
import FormGroup from 'components/FormGroup'
import ListGroup from 'components/ListGroup';

function Home() {
  const [activeMember, setActiveMember] = useState("효정");

  return (
    <>
      <Header activeMember={activeMember} setActiveMember={setActiveMember} />
      <FormGroup />
      <ListGroup activeMember={activeMember} />
    </>
  )
}

export default Home