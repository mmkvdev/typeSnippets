// arrays
let arr = ['typescript', 'javascript', 'python'];

arr.push('php'); // valid
// arr.push(3); // invalid => typescript fails the compilation because the type of the latest entries should match the type inside the types of elements declared inside the array.
// arr[0] = 3; //invalid => can't assign a mistype
// arr = 'ruby'; // can't change the type of the array variable as well

let numbers = [1,2,3,4];

numbers.push(5); //valid
// numbers.push('developer'); //invalid
// numbers[1] = 'software'; // invalid



let multumArray = [1,2, 'cloud', 'aws'];

multumArray.push('developer');
multumArray.push(3);
multumArray[1] = 'devops';