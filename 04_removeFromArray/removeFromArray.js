const removeFromArray = function (arr, ...args) {
	// const newArr = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if (args.indexOf(arr[i]) === -1) newArr.push(arr[i]);
	// }
	// return newArr;
	return arr.filter((item) => args.indexOf(item) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
