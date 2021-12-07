const input = '101*011*1';
let permutationSet:Array<any> = [];

const evaluate = (str:string, permutationSet :Array<any>) => {
  if (str.length === 0) { return permutationSet ; }
  
  if (str[0] === '0' || str[0] === '1') {
    for (let i = 0; i < permutationSet.length; i++) {
      permutationSet[i].push(str[0]);  
    }
  }

  if (str[0] === '*') {
    let len = permutationSet.length;
    for (let i = 0; i < len; i++) {
      let temp = permutationSet [i].slice(0);
      permutationSet .push(temp);
    }
    for (let i = 0; i < permutationSet .length; i++) {
      (i < permutationSet .length/2) ? permutationSet [i].push('0') : permutationSet [i].push('1');  
    }
  }
  console.log(permutationSet)
}

evaluate(input,permutationSet)
console.log(`Result for permutation of ${input} is ${permutationSet}`);