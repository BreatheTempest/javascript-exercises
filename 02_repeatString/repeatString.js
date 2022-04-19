const repeatString = function (str, num) {
	if (num < 0) return 'ERROR';
	let arr = [];
	for (i = 0; i < num; i++) {
		arr.push(str);
	}
	return arr.join('');
};
repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
