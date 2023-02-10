const { readFile } = require('fs').promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;
  
  words.forEach(word => {
    tally[word] = (tally[word] || 0) + 1 ;
    if(!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
}

const findPassword = async () => {
  try {
    startingPoem = await readFile('./poems/starting-poem.txt', "utf8");
  const firstFrequentWord = await mostFrequentWord(startingPoem);
  console.log(firstFrequentWord);

  secondPoem = await readFile(`./poems/${firsFrequentWord}.txt`, "utf8");
  const secondFrequentWord = await mostFrequentWord(secondPoem);
  console.log(secondFrequentWord);

  thirdPoem = await readFile(`./poems/${secondFrequentWord}.txt`, "utf8");
  const thirdFrequentWord = await mostFrequentWord(thirdPoem);
  console.log(thirdFrequentWord);
  } catch (err) {
    console.error(err);
  }
}

findPassword();
