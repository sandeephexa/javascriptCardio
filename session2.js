// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    // word array
    const wordFilter = sen.toLowerCase().match(/[a-z0-9]+/g);
    // sorted array
    const sorted = wordFilter.sort(function(a,b){
        return b.length - a.length;
    });
    // if multiple words occur, put into array
    const longestArray = sorted.filter(function(word)
    {
        return word.length === sorted[0].length;
    });
    if(longestArray.length == 1)
    {
        return longestArray[0];
    }
    else{
        return longestArray;
    }
  }
  
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
  function chunkArray(arr, len) {
  
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  //method 1
  const chunkedArray =[];
  let i =0;
  while(i< arr.length)
  {
      chunkedArray.push(arr.slice(i, i + len));
      i += len;
  }
  return chunkedArray;


}

  
  function flattenArray(arrays) {
  
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  // method 1
//   return arrays.reduce((a,b)=> {
//       return a.concat(b);
//   });
  // method 2
  return [].concat.apply([], arrays);
}
   
  function isAnagram(str1, str2) {

    return formatStr(str1) === formatStr(str2);
  }

  // helper function

  function formatStr(str)
  {
      return str.replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
  
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  
  function letterChanges(str) {
      
      let newStr = str.replace(/[a-z]/gi, (char) => {
          if(char === 'z' || char === 'Z')
          {
              return 'a';
          }else {
          return String.fromCharCode(char.charCodeAt() + 1)
          }
      });
      newStr = newStr.replace(/[a|e|i|o|u]/gi , (vowel) =>{
          return vowel.toUpperCase();
      })
      return newStr;

  }
  
  // Call Function
  // const output = longestWord('Hello there, my name is sandy');
  const output = letterChanges('zello world');
  
  console.log(output);