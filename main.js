let arr = [9,6,4,11,44,32,15,74,33,2,67];
let target = 15

function BubbleSort(arr){
    for (let i = 0; i < arr.length ; i++){
        for (let l = 0; l < (arr.length - i - 1); l++){
            if (arr[l] > arr[l + 1]){
                let n = arr[l]
                arr[l] = arr[l + 1]
                arr[l + 1] = n
            }
        }
    }
    console.table(arr)
}

function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		let currentElement = arr[mid]
		if (currentElement === target) {
			return mid
		} else if (target < currentElement) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}

BubbleSort(arr)
let searchResult = binarySearch(arr, target)

if (searchResult == -1){
    console.log(`Ваш масив посортовано, елемент ${target} не знайдено :(`)
}else {
    searchResult++
    console.log(`Ваш масив посортовано, елемент ${target} є ${searchResult} з ${arr.length} елементів`)
}
console.log(`Мінімальне число в масиві --> ${arr[0]}`)
console.log(`Максимальне число в масиві --> ${arr[arr.length - 1]}`)
