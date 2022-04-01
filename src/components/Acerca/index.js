import './Acerca.css';
import photo from '../../assets/images/img/gene_luengo.webp';

import { Paragraph } from '../Generals/Paragraph';
import { Link } from '../Generals/Link';
import { Title } from '../Generals/Title';

export const Acerca = () => {
    return(
        <section id='acerca' className='about section section_xl container full_xl_screen'>
            <article className="text_lg_right">
                <aside className="text_center text_lg_right">
                    <Title type='h1'>Gene Luengo</Title>
                    <Title type='h4'>Programador <i>Web</i></Title>
                </aside>

                <Paragraph>
                    En 2016 sentí la necesidad de poner de la lado mi profesión de Administrador y realizar una transformación profesional hacia el área de la tecnología, específicamente para el desarrollo y programación de software que desde hacía un tiempo me llamaba mucho la atención.
                </Paragraph>
                
                <Paragraph>
                    Analizadas las posibilidades y ubicando una tendencia clara en el aumento hacia el futuro de las necesidades de desarrolladores y programadores <i>web</i> decidí orientarme hacia ese camino.
                </Paragraph>

                <Paragraph>
                    Comenzó todo un mundo completo y facinante de aprendizaje, que al principio lo desarrollé de manera autodidacta, enfocándome en las tecnologías principales del <i>Frontend</i> como lo son:
                </Paragraph>
                
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
            </article>

            <article className='text_lg_right'>
                <Paragraph>
                    Luego con la intensión de desarrollar aplicaciones <i>Web</i> con enfoque cliente - servidor, mi ruta de aprendizaje me llevó a agregar las tecnologías principales del <i>Backend</i> como lo son:
                </Paragraph>

                <ul>
                    <li>PHP</li>
                    <li>MYSQL (Base de datos)</li>
                    <li>NodeJs</li>
                    <li>Java (a un nivel muy básico)</li>
                </ul>

                <Paragraph>
                    Hoy en día, lo que comenzó como un apredizaje autodidacta se ha convertido, luego de realizar un Master profesional para la creación de Páginas y Aplicaciones <i>Web</i> en España, en toda una carrera apasionante que deja muchas satisfaciones por las soluciones increíbles que se pueden crear.
                </Paragraph>
                
                <Paragraph>
                    Es por ello que si aun no tienes presencia en la <i>web</i> o por el contrario tienes el interés de expandir tu negocio con una aplicación <i>web</i>, te invito a entrar en <Link href="#contacto">contacto</Link> conmigo para que juntos desarrollemos el proyecto que le permitirá a tu negocio contar con esa presencia tan necesaria hoy en día en Internet y así pueda ser posible aumentar los servicios que le puedes ofrecer a tus clientes.
                </Paragraph>
            </article>

            <article className='text_center text_xl_center'>
                <Link
                    styleClass='btn'
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://www.linkedin.com/in/gene-kober-luengo-carmona-b7339534/'>
                    Mi linkedin
                </Link>
            </article>

            <article>
                <img className='gray_scale' src={photo} alt='Gene Luengo - Programador web' title='Gene Luengo - Programador Web' />
            </article>
        </section>
    );
};