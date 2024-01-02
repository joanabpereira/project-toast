import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, onRemove}) {

  const handleToastRemoval = (id) => {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    })

    onRemove(newToasts);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({message, variant, id}) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant} onDelete={handleToastRemoval}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
