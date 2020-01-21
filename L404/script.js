let students = [
    {
        id: 1,
        name: 'gio'
    },
    {
        id: 2,
        name: 'tamila'
    },
    {
        id: 3,
        name: 'vako'
    },
    {
        id: 4,
        name: 'nod'
    },
    {
        id: 5,
        name: 'saxlshi damrhca'
    }
];

function lister(list){
    let myObj = {};
    for (x of list) {
        if (myObj[x.name] == null){
            myObj[x.name] = 0
        } myObj[x.name] += 1
    }
    return myObj;
}

// function lister(myStudents) {

//     let namesObj = {}; 
//     for (let x of myStudents){
//         if (namesObj[x.name] == null){
//             namesObj[x.name] = 0;
//             console.log(x.name)
//         }
//         namesObj[x.name] += 1;
//     }
  
//     return namesObj;
// }
console.log(lister(students))
// function myList(array) {
//     let map = {};
//     for (let x of array) {


//         if (map[x.name] == null) {
//             map[x.name] = 0;
//         }
//         map[x.name] += 1;
//     }


//     return map;
// }

// console.log(myList(students));
