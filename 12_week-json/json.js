// Object
let person = {
    "name": 'Kyle',
    'age': 13,
    'gender': 'male'
}

// console.log(person['name'])
// console.log(person['age'])
// console.log(person['gender'])

let persons_list = [
    {
        "name": 'Kyle',
        'age': 13,
        'gender': 'male'
    },
    {
        "name": 'Marty',
        'age': 21,
        'gender': 'male'
    },
    {
        "name": 'Bob',
        'age': 34,
        'gender': 'female'
    }
    // ...
]

// console.log(persons_list[1]['name'])

let lst_num = [1,2,3,4,5,6,7,8]

lst_num.map((num) => {
    console.log(num * 2)    
})
