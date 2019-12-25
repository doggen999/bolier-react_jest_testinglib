import React from 'react';
import PropTypes from 'prop-types'

const Button = ({variant, children, onClick}) => <button onClick={onClick} className={`button button-${variant}`}>{children}</button>

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']), 
    onClick: PropTypes.func,
}

Button.defaultValues = {
    variant: 'primary'
}

export default Button