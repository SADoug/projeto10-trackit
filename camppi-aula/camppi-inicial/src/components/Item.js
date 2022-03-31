import styled from "styled-components";

import Button from "./Button";

export default function Item({ title, description, image, price }) {
  return (
    <Container>
      <div className="left">
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <Price>
          <span className="unit">R$</span> {price.toFixed(2).replace(".", ",")}
        </Price>
      </div>

      <div className="right">
        <img src={image} />
        <Button noMargin>Adicionar</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 2px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-right: 10px;
  }

  .right {
    flex-shrink: 0;
    width: 128px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      height: 70px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  }

  :not(:last-of-type) {
    border-bottom: 1px solid #C4C4C4;
  }
`;

const Title = styled.div`
  font-size: 14px;
  color: #F60919;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #222222;
`;

const Price = styled.div`
  font-size: 14px;
  color: #222222;
  padding-bottom: 10px;

  .unit {
    color: #F60919;
  }
`;
