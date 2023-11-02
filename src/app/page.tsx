'use client'
import { PageContainer, PageContent } from './styles/pageStyle'

export default function Home() {
  return (
    <PageContainer>
      <PageContent>
        <div className="SobreMim">
          <div className="Name">
            <div className="Informacoes">
              <h2>Gabriel Gontijo</h2>
              <h5>Full Stack Developer</h5>
              <p className='InfoP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit id tempore assumenda, quos iste provident aspernatur officiis. Quidem eaque voluptas suscipit omnis veritatis eveniet neque deserunt ipsa inventore ea?</p>
              <div className='ButtonS'>
                <button className='ButtonPortfolio'>View Portfolio</button>
                <button className='ButtonResume' >View Resume</button>
              </div>
            </div>
            <div>
              <img src="https://encurtador.com.br/lsuEP" alt="Foto de Perfil" />
            </div>
          </div>

          <div className='Whats'>
            <h3 className='WhatsH3'>Whats I do?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci quaerat dolore sed, sequi delectus est a repudiandae suscipit cum assumenda eius alias soluta neque quae facilis porro quidem ab!</p>
          </div>
        </div>


        <div className="Projetos">

        </div>

        <div className="Curriculo">

        </div>

        <div className="Contato">

        </div>
      </PageContent>
    </PageContainer>
  )
}
