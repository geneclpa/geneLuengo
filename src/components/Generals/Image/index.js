export const Image = ({ src, className, alt, title }) => {
    return(
        <img className={className} src={src} alt={alt} title={title} />
    );
};