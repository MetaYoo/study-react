// function f1(f2) {
//
//     f2(10, 1)
// }
//
// function f3(v1, v2) {
//     console.log(v1 + v2)
//     return v1 + v2
// }
//
// f1(f3)

// function f1(data) {
//
//     return (dispatch) => {
//         console.log('hello ' + data)
//         dispatch(data)
//     }
// }

// f1(123)((data) => {console.log(data)})


// function compose(...funcs) {
//     if (funcs.length === 0) {
//         return arg => arg
//     }
//     if (funcs.length === 1) {
//         return funcs[0]
//     }
//     return funcs.reduce((a, b) => (...args) => a(b(...args)))
// }

// function myReduce(a, b) {
//     return a + b;
// }
//
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.reduce(myReduce))
//
// console.log(arr.reduce((x,y) => (x + y)))
//


// function compose(...funcs) {
//     if (funcs.length === 0) {
//         return arg => arg
//     }
//     if (funcs.length === 1) {
//         return funcs[0]
//     }
//     return funcs.reduce((a, b) => (...args) => a(b(...args)))
// }
//
// function add(a) {
//     return function (b) {
//         return a + b
//     }
// }
//
// // 得到合成后的方法let 
// let add6 = compose(add(1), add(2), add(3))
//
// console.log(add6(10))
//

// let add = function(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// let add = a => b => a + b
//
// console.log(add(2)(1))

// const add = x => y => y + x;
// // outer function: x => [inner function, uses x]
// // inner function: y => y + x;
// console.log(add(1)(2))
// const v = x => x
// console.log(v(2))
//
//
// const has = p => o => o.hasOwnProperty(p);
// const sortBy = p => (a, b) => a[p] > b[p];
//
// let result;
// let users = [
//     {name: 'Qian', age: 27, pets: ['Bao'], title: 'Consultant'},
//     {name: 'Zeynep', age: 19, pets: ['Civelek', 'Muazzam']},
//     {name: 'Yael', age: 52, title: 'VP of Engineering'}
// ];
//
// result = users
//     .filter(has('pets'))
//     .sort(sortBy('age'));
//
// console.log(result)


var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'

// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'

// The `_.property` iteratee shorthand.
_.find(users, 'active');
