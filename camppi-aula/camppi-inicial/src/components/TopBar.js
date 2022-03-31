import styled from "styled-components";

import SmallLogo from "./SmallLogo";
import User from "./User";

export default function TopBar() {
  const user = {
    name: "Joe",
    image: "https://i.imgur.com/1zISlxg.png"
  };

  return (
    <Container>
      <SmallLogo />
      <User name={user.name} image={user.image} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
