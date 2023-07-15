/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((value) => {
        if (value.profession === "developer") {
            console.log(value);
        }
    });

}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((value) => {
        if (value.profession === "developer") {
            console.log(value);
        }
    });
}

function addData() {
    //Write your code here, just console.log
    const obj = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(obj);
    console.log(arr);
}

function removeAdmin() {
    //Write your code here, just console.log
    const newArr = arr.filter(object => {
        return object.profession !== "admin";
    });
    console.log(newArr);

}

function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 5, name: "Ashish", age: "21", profession: "developer" },
        { id: 6, name: "Ronit", age: "25", profession: "Nurse" },
        { id: 7, name: "Ravi", age: "28", profession: "Teacher" },
        { id: 8, name: "Neethu", age: "29", profession: "Teacher" },
    ];
    let concatArr = arr.concat(arr2);
    console.log(concatArr);
}