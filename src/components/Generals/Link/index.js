export const Link = ({ styleClass, target, href, rel, click, children }) => {
    return(
        <a
            className={styleClass}
            target={target}
            href={href}
            rel={rel}
            onClick={click}
        >{children}</a>
    );
};