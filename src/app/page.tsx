'use client'
import { PageContainer, PageContent } from './styles/pageStyle'
import { BiLogoFlask } from 'react-icons/bi';
import { SiDjango } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { TbSql } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';

import Link from 'next/link';

export default function Home() {
  return (
    <PageContainer>
      <PageContent>
        <div className="SobreMim" id='SobreMimID'>
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

          <div className="Whats">
            <h3 className='WhatsH3'>Whats I do</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci quaerat dolore sed, sequi delectus est a repudiandae suscipit cum assumenda eius alias soluta neque quae facilis porro quidem ab!</p>
            <div className="ContainerHabilidades">
              <div className="ContainerHab1">

                <div className="Habilidade">
                  <FaPython size={90} color={'#306998'} />
                  <h2>Python</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque accusamusadipisicing elit. Vel doloremque accusamus</p>
                </div>

                <div className="Habilidade">
                  <SiDjango size={90} color={'#092e20'} />
                  <h2>Django</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque accusamusadipisicing elit. Vel doloremque accusamus</p>
                </div>

                <div className="Habilidade">
                  <BiLogoFlask size={90} />
                  <h2>Python</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque accusamusadipisicing elit. Vel doloremque accusamus</p>
                </div>

              </div>

              <div className="ContainerHab2">

                <div className="Habilidade">
                  <TbSql size={90} />
                  <h2>SQL</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque accusamusadipisicing elit. Vel doloremque accusamus</p>
                </div>

                <div className="Habilidade">
                  <DiMsqlServer size={90} />
                  <h2>SQL Server</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque accusamusadipisicing elit. Vel doloremque accusamus</p>
                </div>

                <div className="Habilidade">
                  <GrMysql size={90} />
                  <h2>MySQL</h2>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel doloremque accusamusadipisicing elit. Vel doloremque accusamus</p>
                </div>

              </div>

            </div>

          </div>
        </div>


        <div className="Projetos" id='ProjetosID'>

          <div className="ProjetosContainer">

            <div className="ProjetosHead">
              <h1>Projetos</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nulla aliquid repellat quis architecto atque dolorem dolores voluptatibus, quia labore consequatur? Soluta</p>
              <button>Contato</button>
            </div>

          </div>

        </div>

        <div className="Curriculo" id='CurriculoID'>

        </div>

        <div className="Contato" id='ContatoID'>

        </div>
      </PageContent>
    </PageContainer>
  )
}
