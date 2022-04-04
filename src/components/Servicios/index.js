import { Paragraph } from '../Generals/Paragraph';
import { Title } from '../Generals/Title';
import { Image } from '../Generals/Image';

import iconCode from '../../assets/images/svg/service-code.svg';
import iconDesign from '../../assets/images/svg/service-design.svg';
import iconHosting from '../../assets/images/svg/service-hosting.svg';

import './Servicios.css';

export const Servicios = () => {
    return(
        <section id="servicios" className='services section section_xxl bg_gray_light full_lg_screen'>
            <div className='container'>
                <Title type='h2' className='section_title'>¿Qué te ofrezco?</Title>
                <article className="service_card">
                    <Image src={iconCode} alt='Servicio - Páginas web' title='Servicio - Página web' />
                    <Title type='h3'>Páginas <i>Web</i></Title>
                    <Paragraph>Desarrollo de sitios <i>web</i> estáticos e informativos para tu marca personal o negocio para plataformas <i>Web</i>. Te ayudo a construir y diseñar tu proyecto de principio a fin.</Paragraph>
                </article>

                <article className="service_card">
                    <Image src={iconDesign} alt='Servicio - Aplicaciones web' title='Servicio - Aplicaciones web' />
                    <Title type='h3'>Aplicaciones <i>Web</i></Title>
                    <Paragraph>Desarrollo de aplicaciones <i>web</i> dinámicas e interactivas para plataformas <i>web</i>. Si tu negocio necesita manejo de usuarios, clientes, panel de administración, bases de datos te ayudo a construir y diseñar una solución ajustada a la medida.</Paragraph>
                </article>
                
                <article className="service_card">
                    <Image src={iconHosting} alt='Servicio - Hosting' title='Servicio - Hosting' />
                    <Title type='h3'>Hosting</Title>
                    <Paragraph>¿No cuentas con dominio y hospedaje para tu proyecto? No te preocupes, de esas cosas técnicas me encargo yo.</Paragraph>
                </article>
            </div>
        </section>
    );
};