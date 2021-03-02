// 1 Переменные
// variable

// var name = 'Vladilen'
// стараться не пользоваться
// camelCase
// const firstName = 'Vladilen'
// если не будет изменяться значение переменной, то лучше использовать const
// const age = 19 // number
// const isProgrammer = true // boolean

// const _ = 'private'
// const $ = 'some value'

// cont if = 'mkef' // err

// const withNum5 = '5'
//const 5withNum = 5 // err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// console.log(age.toString())
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 2001
//
// const age = currentYear + birthYear
//
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
//
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// let x
// console.log(typeof isProgrammer) // boolean
// console.log(typeof name) // string
// console.log(typeof age) // number
// console.log(typeof x) // undefined
// console.log(null) // null

// 5 Приоритет операторов
// const fullAge = 19
// const birthYear = 2001
// const currentYear = 2021
//
// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 20 >= 19 => true
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//     console.log('Всё готово!')
// } else {
//     console.log('Всё не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

// function calculateAge(year) {
//     return 2021 - year
// }
//
//
// // console.log(const myAge = calculateAge(2001)
// // console.log(const myAge = calculateAge(2019)
// // console.log(const myAge = calculateAge(1993)
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
//
// }
//
// logInfoAbout('Никита', 2001)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Елена', 2022)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars)
// console.log(cars.length)
//
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const  cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993,
    languages: ['Ru', 'Eu', 'De'],
    hasWife: false,
    greet: function () {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()