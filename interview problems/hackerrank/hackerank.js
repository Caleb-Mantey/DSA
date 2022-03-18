/*
 * Complete the 'countPalindromes' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function countPalindromes(s) {
  // Write your code here

  // get length of the string
  // gives initial palindromic substrings length. eg "tacocat".length
  let count = s.length;

  // loop and get all strings count
  let reversedString = "";
  let normalString = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      // console.log(j ,"-- j")
      // console.log(i ,"-- i")
      // normalString = s.substring(j, i+1);
      // console.log(normalString)
      if (i == 0) break;
      if (j >= i) break;
      normalString = s.substring(j, i + 1);
      // reversedString = s.substring(i+1, j);
      reversedString = reverseString(normalString);
      // console.log("String " + normalString + " --- " + "Reversed String " + reversedString)
      // console.log("Reversed String ", reversedString)
      // reverseString(normalString);
      if (normalString == reversedString) {
        count++;
      }
    }
  }

  return count;

  // reverse string and compare with original string if is equal then add one count

  // t a c o c a t
  // t a c o c a t
  // 0 1 2 3 4 5 6  - t== t, ta == at, tac == cat, ac == ca, taco == ocat, aco == oca, co == oc,
  // tacoc = cocat, acoc == coca, coc = coc, oc = co, tacoca = acocat, acoca == acoca, coca == acoc, oca == aco, ca == ac, tacocat == tacocat, acocat == tacoca, cocat == tacoc, ocat == taco, cat == tac, at == ta

  // a a a
  // a a a
  // 0 1 2
  // aa == aa, aaa == aaa, aa == aa

  // t a c o c a t
  // 0 1 2 3 4 5 6
  // t a c o c a t
  // 0 1 2 3 4 5 6

  //OUTPUT
  // 00 01 02 03 04 05 06 10 11 12 13 14 15 16
  // ta tac tc to tc ta tt at aa ac
}
function reverseString(s) {
  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i];
  }
  return str;
}
