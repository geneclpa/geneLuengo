import { FormContacto } from '../FormContacto';
import { Link } from '../Generals/Link';
import { Title } from '../Generals/Title';
import { Image } from '../Generals/Image';

import iconLocation from '../../assets/images/svg/contact-location.svg';
import iconPhone from '../../assets/images/svg/contact-phone.svg';
import iconEmail from '../../assets/images/svg/contact-email.svg';

import './Contacto.css';

export const Contacto = () => {
    return(
        <section id='contacto' className='contact section section_xxl full_lg_screen'>
            <div className='container'>
                <Title type='h2' className='section_title'>¿Interesado?</Title>
                <article className='contact_cards'>
                    <aside className="contact_card box_shadow">
                        <Image src={iconLocation} alt='Contacto - ubicación' title='Contacto - ubicación' />
                        <Title type='h5'>UBICACIÓN</Title>
                        <small>Valencia - España</small>    
                    </aside>

                    <aside className="contact_card box_shadow">
                        <Image src={iconPhone} alt='Contacto - teléfono' title='Contacto - teléfono' />
                        <Title type='h5'>TELÉFONO</Title>
                        <small>
                            <Link
                                href="https://wa.me/34659184032"
                                target="_blank"
                                rel="noreferrer noopener">
                                + 34 659 18 40 32
                            </Link>
                        </small>  
                    </aside>
                    
                    <aside className="contact_card box_shadow">
                        <Image src={iconEmail} alt='Contacto - correo electrónico' title='Contacto - correo electrónico' />
                        <Title type='h5'>CORREO ELECTRÓNICO</Title>
                        <small>
                            <Link
                                href="mailto:geneluengo@gmail.com">
                                geneluengo@gmail.com
                            </Link>
                        </small>
                    </aside>
                </article>
                
                <FormContacto />
            </div>
        </section>
    );
};