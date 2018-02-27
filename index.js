// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
     // method 1
              //  return str.split('').reverse().join('');
     // methodd 2
              // let revString = '';
              // for(i = str.length -1; i>=0;i--)
              // {
              //   revString = revString+str[i];
              // }
              // return revString;
    // method 3
              // let revString = '';
              // for(i = 0; i<=str.length -1;i++)
              // {
              //   revString =str[i] +revString;
              //   console.log(revString);
              // }
              // return revString;

    // method 4
             //       let revstr = '';
             //       for(let char of str)
             //       {
              //         revstr = char+revstr;
             //       }
             //       return revstr;
     // method 5
            //  let revStr ='';
            //         str.split('').forEach(char => revStr = char+revStr);
            //         return revStr;
     // method 6
           // return str.split('').reduce((revStr,char) =>   revStr + char, '');


  }
  
  
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  function isPalindrome(str) {
  
  const rev = str.split('').reverse().join();
  if(rev === str)
  {
    return true;
  }
  else{
    return false;
  }

}
  

  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
    const rev = int.toString().split('').reverse().join('');

    return parseInt(rev) * Math.sign(int);
  }
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

  function capitalizeLetters(str) {

    // const cap = str.toLowerCase().split(' ');
    // for(var i=0;i<cap.length;i++)
    // {
    //   cap[i] = cap[i].substring(0,1).toUpperCase() + cap[i].substring(1);
    // }
    // return cap.join(' ');

    // method 2

    // return str
    // .toLowerCase()
    // .split(' ')
    // .map(function(word){
    //   return word[0].toUpperCase() + word.substr(1);
    // })
    // .join(' ');

    // method 3

    return str.replace(/\b[a-z]/gi, function(char)
  {
    return char.toUpperCase();
  })
  }
  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {
        const charMap = {};
        let maxNum =0;
        let maxChar;
        str.split('').forEach( function(char){
          if(charMap[char])
          {
               charMap[char]++;
          }
          else{
            charMap[char] = 1;
          }
        }
        )
        for(let char in charMap)
        {
            if(charMap[char]>maxNum)
            {
              maxNum = charMap[char];
              maxChar = char;
            }
        }
        return maxChar;
  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
    for(let i=0;i<=100;i++)
    {
      if(i % 3 == 0 && i % 5 == 0)
      {
        console.log("FizzBuzz");
      }
      else if(i % 3 == 0)
      {
        console.log("Fizz");
      }
      else if(i % 5 == 0)
      {
        console.log("Buzz");
      }
      else{
        console.log(i);
      }

    }
  }
  
  
  
  // Call Function
  //const output = reverseString('hello');
  //const output = isPalindrome('hello');
  //const output = reverseInt(-12345);
  //const output = capitalizeLetters('i love javaScript');
  //const output = maxCharacter('javaScripttttt');
  const output = fizzBuzz();
  
  console.log(output);
  