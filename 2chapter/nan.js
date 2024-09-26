// if (!Number.isNaN) {
// 	Number.isNaN = function(n) {
// 		return (typeof n === "number" && window.isNaN(n));
// 	}
// }

if (!Number.isNaN) {
	Number.isNaN = function(n) {
		return n !== n;
	};
}

var a = 2 / "foo";
var b= "ligma"

console.log(Number.isNaN(a));
console.log(Number.isNaN(b));
