import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import dataArr from './mockData';


export default function DisplayedData({ filter }) {
  const [mockData, setMockData] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    console.log(dataArr.dataArr)
    setMockData(dataArr.dataArr)
  }, [])

  useEffect(() => {
    console.log('filter', filter)
    filter = filter.toLowerCase();
    let filteredData = mockData
    filteredData = filteredData.filter(dataRow => {
        return dataRow.toLowerCase().includes(filter)
    })

    setDisplay(filteredData.map(dataRow => {
      return (
        <Row 
          key={dataRow}
        >
          <div className='data-row'>
            {dataRow}
          </div>
        </Row>
      )
    }))
  }, [filter])


  return (
    <Row>
      <Col>
        {display}
      </Col>
    </Row>
  )
}