console.log("This is a teamwork assignment.")
    alert("Open the console and check stuff")


function removeDuplicates(arrayWithDuplicates){
    return [...new Set(arrayWithDuplicates)];
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray);

