var mostCommonWord = function (paragraph, banned) {
  // replace all ocurrence of "." and "," with ""
  // replace all ocurrence of banned words with ""
  // split the string into words and store in an array - " "
  // loop through array and store the words as key in a hash with their count as the value
  // go through the key value pairs and store the work with most occurence
  // if none was found use the first word
  let newParagraph = paragraph.replace(",", "");
  newParagraph = newParagraph.replace("!", "");
  newParagraph = newParagraph.replace("?", "");
  newParagraph = newParagraph.replace(";", "");
  newParagraph = newParagraph.replace(".", "");
  newParagraph = newParagraph.toLowerCase();

  // for(let j = 0; j < banned.length; j++){
  //     newParagraph = newParagraph.replace(`${banned[j]}`, "")
  // }
  // return newParagraph
  let paragraphArray = newParagraph.split(" ");

  // return paragraphArray
  console.log(paragraphArray);
  let myList = {};

  for (let i = 0; i < paragraphArray.length; i++) {
    if (banned.includes(paragraphArray[i])) continue;
    // console.log(paragraphArray[i]);
    if (myList.hasOwnProperty(`${paragraphArray[i]}`)) {
      console.log(myList[`${paragraphArray[i]}`]);
      myList[`${paragraphArray[i]}`] =
        parseInt(myList[`${paragraphArray[i]}`]) + 1;
    } else {
      myList[`${paragraphArray[i]}`] = 1;
    }
  }

  let uniqueString;
  let maximumCount = 0;
  // return paragraphArray

  for (let x = 0; x < paragraphArray.length; x++) {
    if (myList[`${paragraphArray[x]}`] > maximumCount) {
      uniqueString = paragraphArray[x];
      maximumCount = myList[`${paragraphArray[x]}`];
    }
  }

  return myList;
  return uniqueString;
};

// console.log(
//   mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
//     "hit",
//   ])
// );

var numUniqueEmails = function (emails) {
  // Split string into two at occurrence of @ in the string
  let domain_name;
  let local_name;
  let splittedEmails;
  let newEmails = {};

  for (let i = 0; i < emails.length; i++) {
    splittedEmails = emails[i].split("@");
    local_name = splittedEmails[0].split("+")[0];
    local_name = local_name.split(".").join("");
    domain_name = splittedEmails[1];
    if (local_name in newEmails) {
      if (domain_name == newEmails[`${local_name}`]) continue;
      newEmails[`${local_name}${new Date()}`] = domain_name;
      continue;
    }
    newEmails[`${local_name}`] = domain_name;
  }

  // store second part in a variable as domain name - non changing part

  // take the first part of the string and store in variable and seperate where there is
  // an occurence + and take the first part and replace all the occurence of . with ""

  // store result in new array with new emails
  // Loop through this array and remove duplicate and count the unique emails
  // return the unique emails count

  return Object.keys(newEmails).length;
};

numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
]);
