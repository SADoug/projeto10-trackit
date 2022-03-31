import styled from "styled-components";
import logo from "./../assets/logo-trackit.png"

function Topo() {
    return (
        <Topo1>
            <div className="title">TrackIt</div>
            <img src={logo} />
        </Topo1>
    )

}

const Topo1 = styled.div`
position: fixed;
display: flex;
justify-content: space-around;
width: 375px;
height: 70px;
left: 0px;
top: 0px;
right: 0px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

.title {
position: fixed;
left: 0;
width: 97px;
height: 49px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
/* identical to box height */
color: #FFFFFF;
}

img {
    border-radius: 98.5px;
}`;

export default Topo;