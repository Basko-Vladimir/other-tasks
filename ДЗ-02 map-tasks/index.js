// 1. Преобразовать массив чисел в массив строк
let arr = [1, 2, 3, 4, 5];
arr = arr.map( elem => elem.toString() );
console.log(arr);

// 2. Преобразовать массив строк [‘age’, ‘name’, ‘gfgfgf’] в массив строк с верхним регистром
let arr1 = ['age', 'name', 'gfgfgf'];
arr1 = arr1.map( elem => elem.toUpperCase());
console.log(arr1);

// 3. Преобразовать массив строк [‘andrey’, ‘vasja’, ‘kirill’] в массив у которого каждый
// элемент будет с первой заглавной буквой/
let arr2 = ['andrey', 'vasja', 'kirill'];
arr2 = arr2.map( elem => `${elem[0].toUpperCase()}${elem.slice(1)}`);
console.log(arr2);

// 4. Преобразовать массив строк [‘Andrey’, ‘Vasja’, ‘Kirill’] в массив объектов:
// [{ name: ‘Andrey’ }, { name: ‘Vasja’ },{ name: ‘Kirill’ } ]
let arr3 = ['Andrey', 'Vasja', 'Kirill'];
arr3 = arr3.map( elem => ({name: elem}) );
console.log(arr3);

// 5. Есть массив имен ['Andrey', 'Vasja', 'Kirill'] и есть массив возрастов  [23, 30, 50]
// каждый индекс имени в массиве совпадает с индексом возраста массива возрастов.
// Используя метод map и данные два массива создать новый массив, каждый элемент которого будет объектом:
// [{age: 23, name: 'Andrey'}, {age: 30, name: 'Vasya'}, {age: 50, name: 'Kirill'}]
let names = ['Andrey', 'Vasja', 'Kirill'];
let ages = [23, 30, 50];
let users = names.map( (elem, i) => ( {age: ages[i], name: elem } ) );
console.log(users);

// 6. Преобразовать массив объектов [{age: 23}, {age: 30}, {age: 50}] в массив чисел элементами
// которого будут числа (значения возрастов из объектов)
let arr4 = [{age: 23}, {age: 30}, {age: 50}];
arr4 = arr4.map( elem => elem.age);
console.log(arr4);

// 7. Имеется массив [23 , 5, null, true, 'Vasja', {}, []] Требуется преобразовать данный массив в массив,
// элементы которого будут:
// - если элемент число, то новый элемент будет объектом, у которого свойство будет являться элементом массива в виде {age: 23}
// - если строка, то в новом массиве элемент будет той же строкой в верхнем регистре
// - в остальных случаях элементы преобразуются в строку ‘not a number or a string’
let arr5 = [23 , 5, null, true, 'Vasja', {}, []];
arr5 = arr5.map( elem => {
        if (typeof(elem) == "number") {
            return {age: elem};
        } else if (typeof(elem) == "string") {
            return elem.toUpperCase();
        } else {
            return 'not a number or a string'
        }
    }
);
console.log(arr5);

// 8. Есть массив [1, 2, 3, 4, 5, 6]. Нужно преобразовать данный массив в новый у которого все элементы будут больше 2.
let arr6 = [1, 2, 3, 4, 5, 6];
let newArr =[];
arr6 = arr6.filter( elem => elem > 2);
console.log(arr6);

// 9. Есть массив объектов users [{age: 11, name: Vasja}, {age: 13, name: Ivan}, {age: 18, name: Katya}, {age: 23, name: Andrey}].
// Отфильтровать данный массив чтобы в нем находились пользователи которым 18 лет и выше.
let arr7 = [{age: 11, name: 'Vasja'}, {age: 13, name: 'Ivan'}, {age: 18, name: 'Katya'}, {age: 23, name: 'Andrey'}];
arr7 = arr7.filter( elem => elem.age >= 18);
console.log(arr7);

// 10. Есть массив слов [‘машина’, ‘улов’, ‘ёж’, ‘эскалатор’]. Нужно отфильтровать данный массив, чтобы в новом были слова,
// количество символов у которых больше 4;
let arr8 = ['машина', 'улов', 'ёж', 'эскалатор'];
arr8 = arr8.filter( elem => elem.length > 4);
console.log(arr8);

// 11.  Есть массив [‘машина’, 23, null, ‘улов’, 55 ‘ёж’, ‘эскалатор’, undefined]. Отфильтровать данный массив таким образом
// чтобы в нем были только строки и числа
let arr9 = ['машина', 23, null, 'улов', 55, 'ёж', 'эскалатор', undefined];
arr9 = arr9.filter( elem => typeof(elem) ==='string' || typeof(elem) ==='number');
console.log(arr9);

// 12. Есть массив [1, 2, 3, 4 , 5, 6, 7]. Отфильтруйте данный массив таким образом чтобы в нем находились только
// чётные числа.
let arr10 = [1, 2, 3, 4, 5, 6, 7];
arr10 = arr10.filter( elem => elem % 2 === 0);
console.log(arr10);