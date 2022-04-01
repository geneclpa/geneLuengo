import './FormContacto.css';

export const FormContacto = () => {
    return(
        <form className='contact_form box_shadow'>
            <input
                type='text'
                name='name'
                placeholder='Ingresa tu nombre *'
                required
            />
            <input
                type='email'
                name='email'
                placeholder='Ingresa tu correo electrónico *'
                required
            />
            <textarea
                name='comments'
                cols='50'
                rows='10'
                placeholder='Déjame tus comentarios'
                required
            />
            <input
                className='btn'
                type='submit'
                value='ENVIAR MENSAJE'
            />
        </form>
    );
};