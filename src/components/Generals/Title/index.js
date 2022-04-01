export const Title = ({ type, classStyle, children }) => {

    if(type === 'h1'){
        return(
            <h1 className={classStyle}>{ children }</h1>
        );
    }

    if(type === 'h2'){
        return(
            <h2 className={classStyle}>{ children }</h2>
        );
    }

    if(type === 'h3'){
        return(
            <h3 className={classStyle}>{ children }</h3>
        );
    }

    if(type === 'h4'){
        return(
            <h4 className={classStyle}>{ children }</h4>
        );
    }

    if(type === 'h5'){
        return(
            <h5 className={classStyle}>{ children }</h5>
        );
    }

    if(type === 'h6'){
        return(
            <h6 className={classStyle}>{ children }</h6>
        );
    }

};