import './HeroImage.css';

import { Link } from '../Generals/Link';
import { Title } from '../Generals/Title';

export const HeroImage = () => {
    return(
        <section id='inicio' className='home'>
            <article className='hero_image'>
                <aside className='hero_image_opacity'>
                    <div className='hero_image_content'>
                        <Title type='h2' className='hero_image_title'>Bienvenidos a mi<br />sitio web</Title>
                        <Link className='btn' href='#contacto'>Contáctame</Link>
                    </div>
                </aside>
            </article>
        </section>
    );
};