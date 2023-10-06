const sentence = "“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)";

const vowels = ['a', 'e', 'i', 'u', 'o'];
const countVowels = (word) => {
  return word.split('').reduce((total, letter) => vowels.includes(letter) ? total + 1 : total, 0);
}

function findLongest(s) {
  // regex to find everty
  return s.replace(/[^a-z ]/gi, '').split(' ').reduce((longest, word) => {
    if (word.length === longest.length) {
      return countVowels(word) > countVowels(longest) ? word : longest;
    } else {
      return word.length > longest.length ? word : longest;
    }
  }, "");
}

console.log(findLongest(sentence));