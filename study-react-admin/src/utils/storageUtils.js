import store from 'store';
/*
* 进行local数据存储管理的工具模块
 */
const USER_KEY = 'user_key';
// export default {
//     /**
//      * 保存user
//      */
//     saveUser(user) {
//         localStorage.setItem(USER_KEY, JSON.stringify(user));
//     }
//
//     /**
//      * 读取user
//      */
//     getUser() {
//         return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
//     }
//     /**
//      * 删除user
//      */
//     removeUser() {
//         localStorage.removeItem(USER_KEY)
//     }
// }
//

export default {

    saveUser(user) {
        store.set(USER_KEY, user);
    },

    getUser() {
        return store.get(USER_KEY) || {};
    },

    removeUser() {
        store.remove(USER_KEY)
    }

}