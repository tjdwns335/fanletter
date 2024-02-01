import React from 'react'
import Header from '../components/Header'
import FormGroup from '../components/FormGroup'

function Home() {
  const girlGroup = [
    {
      id: 1,
      name: "효정",
    },
    {
      id: 2,
      name: "미미",
    },
    {
      id: 3,
      name: "유아",
    },
    {
      id: 4,
      name: "승희",
    },
    {
      id: 5,
      name: "유빈",
    },
    {
      id: 6,
      name: "아린",
    },
  ]
  return (
    <>
      <Header girlGroup={girlGroup} />
      <FormGroup girlGroup={girlGroup} />
    </>
  )
}

export default Home