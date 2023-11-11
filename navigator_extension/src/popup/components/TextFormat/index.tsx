import React from 'react'
import { CustomizableComponent } from '../../models'
import styles from './textformat.module.css'

interface iProps extends CustomizableComponent {
   children?: React.ReactNode
}

export const H1 = ({ children, className }: iProps) => {
   return (
      <h1 className={`${styles.h1} ${className}`}>{children}</h1>
   )
}

export const H2 = ({ children, className }: iProps) => {
   return (
      <h2 className={`${styles.h2} ${className}`}>{children}</h2>
   )
}