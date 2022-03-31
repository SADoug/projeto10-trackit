import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <img src="https://financesonline.com/uploads/2019/12/Track-It-logo1.png" />
      <div className="title">TrackIt</div>
    </Container>
  );
}

const Container = styled.div`
  padding: 41px 0;
  font-size: 64px;
  font-family: 'Pacifico', cursive;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    position: relative;
    bottom: -3px;
    right: -5px;
    width: 64px;
    height: 64px;
  }

  .title {
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;
/* identical to box height */

text-align: center;

color: #126BA5;
  }
`;
