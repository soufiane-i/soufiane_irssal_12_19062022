import './PageLink.css';
import PropTypes from 'prop-types';

export default function PageLink({link, text}) {
    return(
        <a href={`/${link}`}>{text}</a>
    )
}

PageLink.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string
}