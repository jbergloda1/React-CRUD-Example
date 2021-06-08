import React from 'react';
import { useToast } from './Toast';

function Button() {
  const { error, warn, info, success } = useToast();
  return (
    <>
      <button onClick={() => error('error message!')}>error</button>
      <button onClick={() => warn('warn message!')}>warn</button>
      <button onClick={() => info('info message!')}>info</button>
      <button onClick={() => success('success message!')}>success</button>
    </>
  );
}
export default Button;