function findLatestWeight(weights, tail = []) {
	if (weights.length + tail.length === 1) return weights[0] || tail[0];

	function addNode(arr, node) {
		if (arr.length === 0) {
			arr.push(node); 
			return;
		}
	
		let i = 0;
	
		while (node >= arr[i]) {
			i += 1;
		}
	
		arr.splice(i, 0, node);
	
		return;
	}
	
	function getMaxNode(sorted, tail) {
		let sLast = sorted[sorted.length - 1];
		let tLast = tail[tail.length - 1];
	
		if (typeof sLast !== 'number') {
			if (typeof tLast !== 'number') {
				return false;
			} else {
				return tail.pop();
			}	
		} else {
			if (typeof tLast !== 'number') {
				return sorted.pop();
			} else {
				return sLast > tLast ? sorted.pop() : tail.pop();
			}
		}
	}

	const sorted = weights.slice(0).sort((a, b) => a - b);

	do {
		const max1 = getMaxNode(sorted, tail);
		const max2 = getMaxNode(sorted, tail);

		if (max2 === false || max1 === false) {
			return max1 || max2 || 0;
		} else {
			if (max1 !== max2) addNode(tail, max1 - max2)

			if (weights.length === 0) {
				weights = tail;
				tail = [];
			}
		}

	} while (weights.length + tail.length !== 1);

	return;
}


const arr1 = [2,7,4,1,8,1];
const arr2 = [0, 1, 2, 3];

console.log('findLatestWeight', findLatestWeight(arr1));
console.log('findLatestWeight', findLatestWeight(arr2));

// console.log('addNode', addNode(arr2, 2));
// console.log('arr2', arr2);
