/*
 * @Author: sylvanas
 * @Date: 2021-02-13 20:25:53
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-14 13:49:49
 * @Description: 
 */
import { PageHeader } from 'antd'
import React from 'react'
import { FC } from 'react-dom/node_modules/@types/react'
import Navigation from "./Navigation"


interface Props {
  children: React.ReactNode,
  title: string,
  subTitle: string
}

const Layout: FC<Props> = ({children, title, subTitle}) => {
  return (
    <div>
      <Navigation />
      <PageHeader className="jumbotron" title={title} subTitle={subTitle}/>
      <div style={{ width: "85%", margin: "0 auto" }}>{children}</div>
    </div>
  )
}

export default Layout
