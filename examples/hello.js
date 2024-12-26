
// import { hello } from 'qjs:hello';
import { get } from 'qjs:fetch';
// console.log(hello('testq11', "xxxx")); 
console.log(get);

const resp = get("https://www.google.com");

console.log(resp);

console.log("Hello World");
