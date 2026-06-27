import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className={props.buttonStyle}>{props.buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
}

export default Button