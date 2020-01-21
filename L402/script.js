let students = [{
        id: 1,
        name: 'gia'
},

    {
        id: 2,
        name: 'sichi'
    }]

function countName(s, n) {
    let atvla = 0;
    for (let x of s) {
        if (x.name === n) {
            atvla++;
        }
    }
    return atvla;

}
let x = countName(students, 'gia');
console.log(x)
console.log(countName(students, 'sichi'));
console.log(countName(students, 'tamo'));
