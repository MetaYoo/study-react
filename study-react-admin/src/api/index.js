/**
 * 要求：能根据接口文档定义接口函数
 * 包含应用中所有接口请求函数的模块
 * *
 */

import ajax from './ajax';


// export function reqLogin(username, password) {
//     return ajax('/login', {username, password}, 'POST');
// }

export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST');

export const reqAddUser = (user) => ajax('/user/add', user, 'POST');


