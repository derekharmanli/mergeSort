function split(wholeArray){
  const midpointIdx = (Math.floor(wholeArray.length / 2))
  console.log(midpointIdx)
  const firstHalf = wholeArray.slice(0, midpointIdx)
  const secondHalf = wholeArray.slice(midpointIdx);
  console.log("first", firstHalf);
  console.log("second", secondHalf);
  //wholeArray = [firstHalf, secondHalf]
  return [firstHalf, secondHalf];
}

function merge(firstHalf,secondHalf){
  let firstNum = firstHalf[0];
  let secondNum = secondHalf[0];

}
