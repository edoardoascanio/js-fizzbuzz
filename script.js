
for (var i = 1; i <= 100; i++) {
    var numero = i
    var multiplo3 = i % 3 === 0
    var multiplo5 = i % 5 === 0

    if (numero = multiplo3) {
        console.log("Fizz")
    }

    else if (numero = multiplo5) {
        console.log("Buzz")
    }

    else if (numero = multiplo3 && multiplo5) {
        console.log("Fizz-Buzz")
    }

    else {
        console.log(i)
    }

}