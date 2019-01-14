describe('Split Array function', function() {
  it('is able to split an odd array into two halves', function() {
    const testArr = [1,2,3,4,5]
    const splitArray = split(testArr);
    expect(splitArray).toEqual( [[1,2],[3,4,5]] );
  });
  it('is able to split an even array into two halves', function() {
    const splitArray = split([1,2,3,4,5,6]);
    expect(splitArray).toEqual([[1,2,3],[4,5,6]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    const mergedArray = merge([[1,2,3],[4,5,6]]);
    expect(mergedArray).toEqual([1,2,3,4,5,6]);
  });
});
