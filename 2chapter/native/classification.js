console.log(Object.prototype.toString.call([1,2,3])); // "[object Array]"
console.log(Object.prototype.toString.call(/regex-literal/i)); // "[object RegExp]:

console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));

console.log(Object.prototype.toString.call("abc")); // "[object String]"
console.log(Object.prototype.toString.call(42)); // "[object Number]"
console.log(Object.prototype.toString.call(true)); // "[object Boolean]"
