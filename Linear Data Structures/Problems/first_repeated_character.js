//Get the first repeated character in a string

function FindFirstRepeatedCharacter(string) {
  let alphabets = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") continue;

    if (alphabets.hasOwnProperty([`${string[i]}`])) return string[i];

    alphabets[`${string[i]}`] = "1";
  }
}

let results = FindFirstRepeatedCharacter("a week ago");
console.log(results);

module.exports = FindFirstRepeatedCharacter;
