import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import styles from './modal.module.css'

const Modal = ({ isOpen = false, onToggle = () => {}, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const renderChildren = () => {
    return createPortal(
      <div className={styles.modal}>
        <div onClick={onToggle} className={styles.modal_overlay} />
        <div className={styles.modal_content}>{children}</div>
      </div>,
      document.body
    )
  }

  return isOpen ? renderChildren() : null
}

export default Modal
