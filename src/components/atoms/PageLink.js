import './PageLink.css';
import PropTypes from 'prop-types';

/**
 *  PageLinks
 * @param {string} link link to the image
 * @param {string} text hypertext link
 */
function PageLink({link, text}) {
    return(
        <a href={`/${link}`}>{text}</a>
    )
}

export default PageLink

PageLink.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string
}