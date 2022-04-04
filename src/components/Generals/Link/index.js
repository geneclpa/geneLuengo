export const Link = ({ className, target, href, rel, click, children }) => {
    return(
        <a
            className={className}
            target={target}
            href={href}
            rel={rel}
            onClick={click}
        >{children}</a>
    );
};