let name = "ahmed"

function changeName (userNewName) {
	console.log("your new name is " + userNewName);
	return userNewName;
}

name = changeName("ahmed11")

function getSum (arrayOfNums) {
	let sum = 0
	let i = 0
	while(i < arrayOfNums.length) {
		sum += arrayOfNums[i]
	}
	return sum
}