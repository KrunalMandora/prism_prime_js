//To check wether the number is prime or not
let number = 98; // my number
let i = 1; // iterator

/* To check any number 'number' is prime,
choose number 'i' so as to i^2 > number,
This while loop give i = i-1,
so we have to increment it by one
for above condition to be true */

while (i * i < number) {
    i = i + 1;
}

i = i + 1;
counter = 0;

/* Take module of number by i,
if number is divided by any other number,
it will make i = 1, and counter = 1,
so that at the end of while loop i = 0,
which will exit while loop
on first instance is encountered */

while (i > 1) {
    remainder = number % i;
    if (remainder == 0) {
        counter = counter + 1;
        console.log(counter);
        i = 1; //to exit from while loop
    }
    i = i - 1;
}

/*If counter is any number,
which in any case not greater than 1,
which will indicate that the number is divided
by any other number than itself and 1,
the number is not prime, otherwise the prime */


if (counter == 0) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}