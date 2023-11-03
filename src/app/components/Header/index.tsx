import { HeaderContainer } from "./styled"
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { TbDeviceImacCode } from 'react-icons/tb';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

import Link from "next/link";

export const Header = () => {
    return (
        <HeaderContainer>
            
            <h1>Gabriel Gontijo</h1>
            <img src="https://encurtador.com.br/lsuEP" alt="Foto de Perfil"/>
            <p>Hi, my name is Gabriel and I'm a backend developer. Welcome to my personal website!</p>
            <div className="IconsLinks">
                <Link href={'https://github.com/gontijogabriel'} target="_blank"><AiOutlineGithub size={50}/></Link>
                <Link href={'https://www.linkedin.com/in/gontijogabriel/'} target="_blank"><FaLinkedin size={50}/></Link>
            </div>

            <nav className="">
                <ul>
                    <Link href={'#SobreMimID'}><li><BsFillPersonFill size={25}/>Sobre mim</li></Link>
                    <Link href={'#ProjetosID'}><li><TbDeviceImacCode size={25}/>Projetos</li></Link>
                    <Link href={'#CurriculoID'}><li><BsFillFileEarmarkPersonFill size={25}></BsFillFileEarmarkPersonFill>Curriculo</li></Link>
                    <Link href={'#ContatoID'}><li><HiOutlineMail size={25}/>Contato</li></Link>
                </ul>
            </nav>

            <div className="DarkMode">
                button
            </div>
            
        </HeaderContainer>
    )
}