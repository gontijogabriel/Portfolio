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
    background-color: black;
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
    justify-content: center;
    gap: 2rem;
}
.Whats{
    width: 100%;
}
.WhatsH3{
    padding: 8px;
    border-left: solid 2px black;
}
`

