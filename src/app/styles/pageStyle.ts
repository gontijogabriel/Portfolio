import styled from "styled-components";

export const PageContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
margin-left: 280px;
`

export const PageContent = styled.div`
width: 100%;
max-width: 1280px;
margin-bottom: 20px;
background-color: antiquewhite;
align-items: center;
padding: 35px;
.SobreMim{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.Projetos{
    height: 100vh;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Curriculo{
    height: 100vh;
    width: 100%;
    background-color: blue;
}
.Contato{
    height: 100vh;
    width: 100%;
    background-color: yellow;
}
.Name{
    display: flex;
    justify-content: space-between;
}
img{
    height: 240px;
    width: 300px;
}
.Informacoes{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.InfoP{
    max-width: 600px;
}
.ButtonPortfolio{
    padding: 8px 15px;
    border-radius: 8px;
    background-color: grey;
    color: white;
    border: none;
}
.ButtonResume{
    padding: 8px 15px;
    border-radius: 8px;
    background-color: purple;
    color: white;
    border: none;
}
.ButtonS{
    width: 100%;
    display: flex;
    justify-content: left;
    gap: 2rem;
}
.Whats{
    width: 100%;
}
.WhatsH3{
    padding: 5px;
    border-left: solid 2px black;
}
.ContainerHabilidades{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 15px;
}
.ContainerHab1{
    background-color: aqua;
    height: 260px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.ContainerHab2{
    background-color: white;
    height: 260px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.Habilidade{
    height: 90%;
    width: 300px;
    background-color: beige;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 10px;
    gap: 0.5rem;
    border-radius: 12px;
}
.ProjetosHead{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 800px;
    background-color: aqua;
}

`

