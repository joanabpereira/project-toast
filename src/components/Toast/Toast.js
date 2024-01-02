import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Icon({icon: Icon}){
  return(
      <Icon size={24} />
  );
}

function Toast({variant, onClose, children}) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon icon={ICONS_BY_VARIANT[variant]}/>
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton} onClick={()=>onClose(false)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
