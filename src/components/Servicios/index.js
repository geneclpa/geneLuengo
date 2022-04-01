import { Paragraph } from '../Generals/Paragraph';
import { Title } from '../Generals/Title';
import './Servicios.css';

export const Servicios = () => {
    return(
        <section id="servicios" className='services section section_xxl bg_gray_light full_lg_screen'>
            <div className='container'>
                <Title type='h2' classStyle='section_title'>¿Qué te ofrezco?</Title>
                <article className="service_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z"/><path d="M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z"/></svg>
                    <Title type='h3'>Páginas <i>Web</i></Title>
                    <Paragraph>Desarrollo de sitios <i>web</i> estáticos e informativos para tu marca personal o negocio para plataformas <i>Web</i>. Te ayudo a construir y diseñar tu proyecto de principio a fin.</Paragraph>
                </article>

                <article className="service_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z"/></svg>
                    <Title type='h3'>Aplicaciones <i>Web</i></Title>
                    <Paragraph>Desarrollo de aplicaciones <i>web</i> dinámicas e interactivas para plataformas <i>web</i>. Si tu negocio necesita manejo de usuarios, clientes, panel de administración, bases de datos te ayudo a construir y diseñar una solución ajustada a la medida.</Paragraph>
                </article>
                
                <article className="service_card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M4 15v4h16.002L20 15H4zM16 18h-2v-2h2V18zM19 18h-2v-2h2V18zM4 5v4h16.002L20 5H4zM16 8h-2V6h2V8zM19 8h-2V6h2V8z"/><path d="M20 3H4C2.897 3 2 3.897 2 5v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5C22 3.897 21.103 3 20 3zM4 9V5h16l.002 4H4zM20 13H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4C22 13.897 21.103 13 20 13zM4 19v-4h16l.002 4H4z"/><path d="M17 6H19V8H17zM14 6H16V8H14zM17 16H19V18H17zM14 16H16V18H14z"/></svg>
                    <Title type='h3'>Hosting</Title>
                    <Paragraph>¿No cuentas con dominio y hospedaje para tu proyecto? No te preocupes, de esas cosas técnicas me encargo yo.</Paragraph>
                </article>
            </div>
        </section>
    );
};