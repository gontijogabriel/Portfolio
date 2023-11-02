import styled from "styled-components";

export const HeaderContainer = styled.header`
background: pink;
width: 280px;
height: 100vh;
position: fixed;
padding: 25px;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
h1{
    font-size: 1.5rem;
}
img{
    width: 15rem;
    border-radius: 50%;
}
p{
    text-align: center;
}
ul{
    list-style: none;
    display: flex;
    gap: 1.5rem;
    align-items: left;
    flex-direction: column;
}
li{
    display: flex;
    gap: 0.5rem;
}
.DarkMode{
    background-color: antiquewhite;
    width: 75px;
    height: 30px;
    border-radius: 25px;
}
`

