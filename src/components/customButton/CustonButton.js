import './CustonButton.scss'

import React from 'react'

function CustonButton({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            { children }
        </button>
    )
}

export default CustonButton
