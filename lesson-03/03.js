// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    let largest
    if (a>b && a>c) {
        largest = a
    } else if (b>a && b>c) {
        largest = b
    } else {
        largest = c
    }
    return largest
}
