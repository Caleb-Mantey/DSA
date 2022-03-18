//Get the first non-repeated character in a string

function FindFirstNonRepeatedCharacter(string) {
  let alphabets = {};
  SetAlphabetsCount(alphabets, string, FindAlphabetsCount);

  return ReturnNonRepeatingCharacter(alphabets, string);
}

function FindAlphabetsCount(i, hash, string) {
  if (hash.hasOwnProperty(`${string[i]}`)) {
    hash[`${string[i]}`] = hash[`${string[i]}`] + 1;
    return;
  }

  hash[`${string[i]}`] = 1;
}

function SetAlphabetsCount(hash, string, callback) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") continue;

    callback(i, hash, string);
  }
}

function ReturnNonRepeatingCharacter(hash, string) {
  for (let i = 0; i < string.length; i++) {
    if (hash[`${string[i]}`] == 1) {
      return string[i];
    }
  }

  return null;
}

value = FindFirstNonRepeatedCharacter("a week ago");
console.log(value);

module.exports = FindFirstNonRepeatedCharacter;
