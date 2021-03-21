import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DisplayedData from "./DisplayedData";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState('');


  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <Container>
        <form>
          <Row>
          <label for='search'>Type in a search phrase to begin. All data is the text "mockData" concatenated with an integer. For example, type in "11". </label>
          </Row>
          <input
            name='search'
            onChange={ (event) => handleChange(event) }
            placeholder="search data"
            ></input>
        </form>
        <DisplayedData filter={inputValue}/>
      </Container>
    )


}