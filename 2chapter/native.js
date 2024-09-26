var s = new String("Hello World!");
console.log(s, s.toString());

typeof s; // "object"
s instanceof String; // true
Object.prototype.toString.call(s); // "[object String]"
