const enjoysCoding = true;
const drinksCoffee = true;

if (enjoysCoding && drinksCoffee) {
  console.log('Jad has a Shinny Future!');
} else {
  console.log('Jad should figure out his Purpose');
}

if (enjoysCoding || drinksCoffee) {
  console.log('Jad has a Shinny Future!');
} else {
  console.log('Jad should figure out his Purpose');
}

const isSick = true;

if (enjoysCoding && drinksCoffee && !isSick) {
  console.log('Jad Can Code!');
} else {
  console.log('Jad can not Code');
}
