import { useState } from 'react';

import logo from '../../assets/images/svg/virgo.svg';
import menuBars from '../../assets/images/svg/menu-bars.svg';
import menuClose from '../../assets/images/svg/menu-close.svg';
import './Header.css';

import { Link } from '../Generals/Link';
import { Image } from '../Generals/Image';

export const Header = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    const handleActive = () => setActiveMenu(!activeMenu);

    return(
        <header className='header'>
            <section className='container'>
                <div className='logo'>
                    <Image src={logo} alt='Logo Gene Luengo' title='Logo Gene Luengo' />
                    <Link href='./'>Gene Luengo</Link>
                </div>
                
                <button className='menu_btn' onClick={handleActive}>
                    <Image
                        className={activeMenu ? 'none' : ''}
                        src={menuBars}
                        alt='Menú movil activar'
                        title='Menú móvil activar' />
                    <Image
                        className={!activeMenu ? 'none' : ''}
                        src={menuClose}
                        alt='Menú movil desactivar'
                        title='Menú móvil desactivar' />
                </button>

                <nav className={`menu${activeMenu ? ' is_active' : ''}`}>
                    <Link href="#inicio" click={handleActive}>Inicio</Link>
                    <Link href="#acerca" click={handleActive}>Acerca</Link>
                    <Link href="#servicios" click={handleActive}>Servicios</Link>
                    <Link href="#contacto" click={handleActive}>Contacto</Link>
                </nav>
            </section>
        </header>
    );
};