const fizzBuzzTs = (limit: number): void => {
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i != 0) console.log("FizzBuzz");
    else if (i % 3 == 0 && i != 0) console.log("Fizz");
    else if (i % 5 == 0 && i != 0) console.log("Buzz");
    else console.log(i);
  }
};

fizzBuzzTs(100);
