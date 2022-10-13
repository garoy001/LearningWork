let indItem;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ind = Math.floor(arr.length / 2) - 1;
indItem = arr[ind];
while (ind >= 0) {
	console.log(arr + '   <<<<<<<Arr 1');
	let sliceItem = arr.slice(ind, ind + 1);
	let newArr = arr.splice(ind - 1, 0, sliceItem[0]);
	const newArr2 = arr.splice(ind + 1, 1);
	ind = ind - 1;
}
