const findArmstrongNumbers = require("./armstrongNumbers");

function createArrayOfNum(maxValue) {
  return [...Array(maxValue).keys()];
}

describe("generic tests", () => {
  test("test small range", () => { 
    expect(findArmstrongNumbers(createArrayOfNum(8))).toEqual([0, 1, 2, 3, 4, 5, 6, 7]); //note use of toEqual to compare arrays, toBe will not work for anything other than primitive data types
  });

  test("test small larger range", () => { 
    expect(findArmstrongNumbers(createArrayOfNum(99))).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("test small test largest range", async () => { 
    expect(findArmstrongNumbers(createArrayOfNum(999))).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]);
  });
});
