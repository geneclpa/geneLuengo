import { useState } from 'react';

import './Header.css';

import { Link } from '../Generals/Link';

export const Header = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    const handleActive = () => setActiveMenu(!activeMenu);

    return(
        <header className='header'>
            <section className='container'>
                <div className='logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8268 11692">
                        <g
                            id="Layer 1"
                            transform="matrix(4.538455,0,0,4.531784,-13030.44,-20143.78)"><path
                            className="fil0"
                            d="M3086 5231l0 1258 -201 0 0 -1457c0,-202 -55,-386 -165,-550l212 0c75,103 126,236 154,397 68,-167 147,-299 236,-397l197 -37c90,116 147,270 171,462 46,-145 128,-287 245,-425l194 -37c109,151 163,318 163,501l0 382c54,-153 112,-274 172,-360l166 -61c143,221 214,454 214,698 0,194 -43,375 -128,545 -85,170 -214,328 -384,475 16,118 85,251 207,400l-236 0c-57,-72 -108,-168 -152,-287 -125,71 -279,121 -461,150l0 -172c172,-35 312,-86 422,-151 -14,-87 -21,-174 -21,-262l0 -1220c0,-199 -28,-349 -86,-451 -142,153 -247,369 -315,646l0 1211 -202 0 0 -1338c0,-249 -30,-422 -88,-519 -139,162 -243,361 -314,599zm1206 1206c118,-120 205,-248 264,-385 58,-137 87,-283 87,-436 0,-161 -35,-317 -105,-468 -100,123 -181,287 -246,492l0 797z"
                            id="path642" />
                        </g>
                    </svg>
                    <Link href='./'>Gene Luengo</Link>
                </div>
                
                <button className='menu_btn' onClick={handleActive}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
                        <svg className="none" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
                </button>

                <nav className={`menu ${activeMenu ? 'is_active' : ''}`}>
                    <Link href="#inicio" click={handleActive}>Inicio</Link>
                    <Link href="#acerca" click={handleActive}>Acerca</Link>
                    <Link href="#servicios" click={handleActive}>Servicios</Link>
                    <Link href="#contacto" click={handleActive}>Contacto</Link>
                </nav>
            </section>
        </header>
    );
};