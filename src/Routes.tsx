/*
 * @Author: sylvanas
 * @Date: 2021-02-13 20:22:16
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-13 20:30:58
 * @Description: router
 */

import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom" 
import Home from "./components/core/Home"
import Shop from "./components/core/Shop"


const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />

      </Switch>
    </HashRouter>
  )
}
export default Routes