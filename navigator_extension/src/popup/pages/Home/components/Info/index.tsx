import React, { useState } from 'react'
import { CustomizableComponent } from '../../../../models'
import { Box, Icons } from '../../../../components'
import styles from "./info.module.css"

interface iProps extends CustomizableComponent {
   children: React.ReactNode
   title?: React.ReactNode
   icon?: string
}

const Info = ({ children, title, icon }: iProps) => {
   const [{ active }, setState] = useState({ active: false })

   const handleClick = () => {
      setState({ active: !active })
   }

   return (
      <Box containerMode autoSize className={styles.infoContainer}>
         <Box className={styles.header} onClick={handleClick}>
            {icon && <Icons iconType={icon} className={styles.icon} />}
            {title}
            <Icons iconType='arrowDown' className={`${styles.arrow} ${active ? styles.arrowActive : ""}`} />
         </Box>
         <div className={styles.content}>{children}</div>
      </Box>
   )
}

export default Info