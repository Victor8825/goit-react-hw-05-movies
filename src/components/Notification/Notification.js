import React from 'react';
import Proptypes from 'prop-types';

const Notification = ({ message }) => <h2>{message}</h2>;

export default Notification;

Notification.propTypes = {
  message: Proptypes.string.isRequired,
};
