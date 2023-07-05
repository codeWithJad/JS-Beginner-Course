// "", 0 , undefined, null, NaN

console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('Jad'));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean(100));

let width = 100;
if (width) {
  console.log(`YaaaHooo width is ${width}`);
} else {
  console.log(`Ooops width is ${Boolean(width)}`);
}
