import { HeaderContainer } from "./styled"
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { TbDeviceImacCode } from 'react-icons/tb';

export const Header = () => {
    return (
        <HeaderContainer>
            
            <h1>Gabriel Gontijo</h1>
            <img src="https://encurtador.com.br/lsuEP" alt="Foto de Perfil"/>
            <p>Hi, my name is Simon Doe andm a senior software engineer. Welcome to my personal website!</p>
            <div className="IconsLinks">
                <AiOutlineGithub size={50}/>
                <FaLinkedin size={50} />
            </div>
            <nav className="">
                <ul>
                    <li><BsFillPersonFill size={25}/>Sobre mim</li>
                    <li><TbDeviceImacCode size={25}/>Projetos</li>
                    <li>Curriculo</li>
                    <li><HiOutlineMail size={25}/>Contato</li>
                </ul>
            </nav>

            <div className="DarkMode">
                button
            </div>
        </HeaderContainer>
    )
}