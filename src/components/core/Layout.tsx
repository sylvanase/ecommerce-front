/*
 * @Author: sylvanas
 * @Date: 2021-02-13 20:25:53
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-13 20:28:44
 * @Description: 
 */
import React from 'react'
import { FC } from 'react-dom/node_modules/@types/react'

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
