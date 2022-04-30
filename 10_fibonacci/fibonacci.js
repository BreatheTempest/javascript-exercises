const fibonacci = function (num) {
	let arr = [1, 1];
	if (num < 0) return 'OOPS';
	if (num > 2) {
		for (let i = 2; i < num; i++) {
			let temp = arr[arr.length - 1] + arr[arr.length - 2];
			arr.push(temp);
		}
	}
	return arr[num - 1];
};
// Do not edit below this line
module.exports = fibonacci;
