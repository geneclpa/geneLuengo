import './FormContacto.css';

import loaderImg from '../../assets/images/svg/loader.svg';

import { Paragraph } from '../Generals/Paragraph';

import { useForm } from '../../hooks/useForm';

const initialForm = {
    name: '',
    email: '',
    comments: ''
};

const validationsForm = (form) => {
    let errors = {},
        regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
        regexEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
        regexComments = /^.{1,500}$/;

    /* Validación de los campos  */
    if(!form.name.trim()){
        errors.name = "El campo Nombre es requerido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo Nombre solo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()){
        errors.email = "El campo Correo electrónico es requerido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo Correo electrónico debe tener un formato válido";
    }

    if(!form.comments.trim()){
        errors.comments = "El campo Comentarios es requerido"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo Comentarios debe tener menos de 500 caracteres";
    }

    return errors;
};

export const FormContacto = () => {

    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm);

    return(
        <form className='contact_form box_shadow' onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                placeholder='Ingresa tu nombre *'
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
            />
            {errors.name && <Paragraph id='error-name' className='error'>{errors.name}</Paragraph>}

            <input
                type='email'
                name='email'
                placeholder='Ingresa tu correo electrónico *'
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
            />
            {errors.email && <Paragraph id='error-email' className='error'>{errors.email}</Paragraph>}

            <textarea
                name='comments'
                cols='50'
                rows='10'
                placeholder='Déjame tus comentarios *'
                value={form.comments}
                onChange={handleChange}
                onBlur={handleBlur}
                required
            />
            {errors.comments && <Paragraph id='error-comments' className='error'>{errors.comments}</Paragraph>}

            <Paragraph className='requiredField'>* Campos requeridos</Paragraph>

            <input
                className='btn'
                type='submit'
                value='ENVIAR MENSAJE'
            />
            
            {loading && 
                <div className='contact_form_loader text_center'>
                    <img src={loaderImg} alt='Loader activo' title='Loader activo' />
                </div>
            }
            
            {response && <Paragraph className='success'>El mensaje ha sido enviado correctamente</Paragraph> }
        </form>
    );
};