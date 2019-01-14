function split(wholeArray) {
  const midpointIdx = Math.floor(wholeArray.length / 2);
  console.log(midpointIdx);
  const firstHalf = wholeArray.slice(0, midpointIdx);
  const secondHalf = wholeArray.slice(midpointIdx);
  console.log('first', firstHalf);
  console.log('second', secondHalf);
  //wholeArray = [firstHalf, secondHalf]
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  let firstPointer = 0;
  let secondPointer = 0;
  let mergedArr = [];
  let firstNum = firstHalf[firstPointer];
  let secondNum = secondHalf[secondPointer];
  const firstLength = firstHalf.length;
  const secondLength = secondHalf.length;

  while (mergedArr.length < firstLength + secondLength) {
    if (firstNum < secondNum) {
      if (firstPointer < firstLength) {
        mergedArr.push(firstNum);
        firstPointer++;
      } else {
        mergedArr.push(...secondHalf);
      }
    } else if (secondNum < firstNum) {
      if (secondPointer < secondLength) {
        mergedArr.push(secondNum);
        secondPointer++;
      } else {
        mergedArr.push(...firstHalf);
      }
    }
  }
  return mergedArr;
  // for (let i = 0; i < firstHalf.length; i++) {
  //   const firstElement = firstHalf[i];
  //   for (let j = 0; j < secondHalf.length; j++) {
  //     const secondElement = secondHalf[j];

  //   }
  // }
}
