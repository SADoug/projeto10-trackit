import { useState, useEffect } from "react";
import styled from "styled-components";

import FloatingCartButton from "./FloatingCartButton";
import Location from "./Location";
import Item from "./Item";
import TopBar from "./TopBar";
import axios from "axios";

export default function MarketPage({token}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const URL = "https://mock-api.driven.com.br/api/v2/camppi/items/";
    const promise = axios.get(URL, config); // post? (URL, body, config)
    promise.then(response => {
      const {data} = response;
      console.log(data);
      setItems(data);
    });
    promise.catch(err => console.log(err.response));
  }, []);
  
  function montarProdutos() {
    if(items.length > 0) {
      return items.map(item => {
        const {title, description, image, price} = item;
        return (
          <Item 
            key={title}
            title={title} 
            image={image} 
            price={price} 
            description={description} 
          />
        )
      })
    }

    return <p>Carregando...</p>;
  }
  
  return (
    <Container>
      <TopBar />
      <Location />
      {montarProdutos()}
      <FloatingCartButton />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 27px 20px;
  background-color: #F7F7F7;
`;
