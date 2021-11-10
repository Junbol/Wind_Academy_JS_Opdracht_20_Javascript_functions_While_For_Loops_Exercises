// FOR LOOP > Even Odd Reporter
let i = 0;

for (let i = 0; i <= 20; i++) {
  let remainder = i % 2;
  console.log(`Is ${i} even or odd?`);
  // TODO: determine if i is odd or even
  if (remainder == 0) {
    console.log(`the number ${i} is even`);
  } else {
    console.log(`the number  ${i}  is odd`);
  }
}
