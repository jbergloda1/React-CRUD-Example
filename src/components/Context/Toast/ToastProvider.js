import React, { useState } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ToastContext } from '../Toast/Toast';

export const ToastProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState({ isOpen: false });

  const show = (message) => {
    setState({ isOpen: true, message });
  };

  const hide = () => setState({ isOpen: false });

  const error = (message) => {
    show({ type: 'error', text: message });
  };

  const warn = (message) => {
    show({ type: 'warning', text: message });
  };

  const info = (message) => {
    show({ type: 'info', text: message });
  };

  const success = (message) => {
    show({ type: 'success', text: message });
  };
  const { isOpen, message } = state;
  return (
    <ToastContext.Provider
      value={{
        error: error,
        warn: warn,
        info: info,
        success: success,
        hide: hide
      }}>
      {children}
      {message && (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={hide}>
          <Alert elevation={6} variant="filled" onClose={hide} severity={message.type}>
            {message.text}
          </Alert>
        </Snackbar>
      )}
    </ToastContext.Provider>
  );
};