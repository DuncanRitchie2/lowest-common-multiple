// isPrime(n) returns a boolean after trying to divide n by every integer between 2 and half of n.

function isPrime(n) {
	let bool = n>1;
	let factorCeiling = Math.floor(Math.sqrt(n)+1);
	for (let i = 2; i < factorCeiling && bool; i++) {
		if (n%i===0) {
			bool = false;
		}
	}
	return bool;
}

// primeFactors(n) returns an array of prime factors of n in ascending order.
// If n is not an integer greater than 1, the empty array is returned.

function primeFactors(n) {
	let array = [];
	let temp = n;
	let currentPrime = 2;
	while (temp>1) {
		if (temp%currentPrime===0) {
			array.push(currentPrime);
			temp/=currentPrime;
		}
		else {
			currentPrime++;
			while (!isPrime(currentPrime)){
				currentPrime++;
			}
		}
	}
	return array;
}

// mergeArrays(arr1, arr2) returns the first array concatenated to every item in the second array that isn't in the first.
// Values duplicated within an array will be duplicated in the output.
// E.g. mergeArrays([2,2,2,3],[2,3,3,5]) => [2,2,2,3,3,5].

function mergeArrays(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		let n = arr1[i];
		if (arr2.includes(n)) {
			arr2.splice(arr2.indexOf(n),1);
		}
	}
	return arr1.concat(arr2);
}

// To calculate the lowest common multiple of n1 and n2, I'm generating the prime factors of n1 and n2,
// merging the two arrays, then multiplying the values together using the reduce function.
// E.g. lcm(12, 15) gives prime factors of [2,2,3] and [3,5] which are merged to [2,2,3,5], which multiplies to 60.

function lcm(n1, n2) {
	return mergeArrays(primeFactors(n1), primeFactors(n2)).reduce((acc,curr)=>{return acc*curr;});
}
