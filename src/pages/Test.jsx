import React, { useEffect, useState } from 'react'
import jsonFakeData from '../fakeData.json';
import { useParams } from 'react-router-dom';
// const data = jsonFakeData;
function Test() {
  const [data, setData] = useState(jsonFakeData);
  const [filteredData, setFilteredData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filterTest = (writedTo) => {
      const newData = data.filter((item) => item.writedTo === writedTo);
      setFilteredData(newData);
    }
    if (id) {
      filterTest(id);
    } else {
      setFilteredData(data);
    }
  }, [data, id]);

  console.log(filteredData);

  return (
    <div>
      {
        filteredData.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.avatar}></img>
              <div>{item.createdAt}</div>
              <div>{item.nickname}</div>
              <div>{item.content}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Test