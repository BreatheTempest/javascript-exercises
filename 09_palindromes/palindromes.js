const palindromes = function (str) {
	str = str.replace(/[\W\d]/g, '').toLowerCase();
	let firstHalf = str.slice(
		0,
		str.length % 2 === 0 ? str.length / 2 : str.length / 2 + 1
	);
	let secondHalf = str.slice(str.length / 2);
	return secondHalf.split('').reverse().join('') === firstHalf;
};
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// Do not edit below this line
module.exports = palindromes;
