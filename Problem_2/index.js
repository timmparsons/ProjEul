function fib() {
  let fib = [0,1];
  let i = 0;
  let sum = 0;

  while(fib[0] + fib[1] < 4000000) {
    i = fib[0] + fib[1];
    fib[0] = fib[1];
    fib[1] = i;

    if(i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum)
}

fib();