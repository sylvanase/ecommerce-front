/*
 * @Author: sylvanas
 * @Date: 2021-02-13 20:22:16
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-14 13:50:59
 * @Description: router
 */

import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom" 
import Home from "./components/core/Home"
import Shop from "./components/core/Shop"
import Signin from "./components/core/Signin"
import Signup from "./components/core/Signup"


const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </HashRouter>
  )
}
export default Routes