import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import {ToastContext} from '../ToastProvider/ToastProvider';

function ToastShelf() {

  const {toasts, setToasts} = React.useContext(ToastContext);


  const handleToastRemoval = (id) => {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    })

    setToasts(newToasts);
  }

  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
    >
      {toasts.map(({message, variant, id}) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant} onDelete={handleToastRemoval}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
