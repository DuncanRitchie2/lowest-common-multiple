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

function mergeArrays(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		let n = arr1[i];
		if (arr2.includes(n)) {
			arr2.splice(arr2.indexOf(n),1);
		}
	}
	return arr1.concat(arr2);
}

function lcm(n1, n2) {
	return mergeArrays(primeFactors(n1), primeFactors(n2)).reduce((acc,curr)=>{return acc*curr;});
}