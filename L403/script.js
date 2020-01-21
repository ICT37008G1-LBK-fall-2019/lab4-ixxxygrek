let students = [
    {
        id: 1,
        name: 'gia'
    },
    {
        id: 2,
        name: 'irakli'
    },
    {
        id: 3,
        name: 'dato'
    },
    {
        id: 4,
        name: 'salo'
    },
    {
        id: 5,
        name: 'saxlshi damrhca'
    }
];

function myList(variable) {
    let array = [];
    for (let x of variable) {
        if (array.indexOf(x.name) == -1) {
            array.push(x.name);
        }
    }
    return array;
}

console.log(myList(students));
