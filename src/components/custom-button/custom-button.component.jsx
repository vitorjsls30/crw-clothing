import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children , isGoogleSign, ...otherProps }) => (
  <button className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;