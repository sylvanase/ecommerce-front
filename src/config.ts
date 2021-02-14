/*
 * @Author: sylvanas
 * @Date: 2021-02-13 20:18:11
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-13 20:18:19
 * @Description: 
 */
export let API: string

if (process.env.NODE_ENV === "development") {
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else {
  API = process.env.REACT_APP_PRODUCTION_API_URL!
}