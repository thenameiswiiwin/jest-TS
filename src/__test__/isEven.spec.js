function isEven(num) {
  return num % 2 === 0;
}

describe('isEven', () => {
  it.each([
    [0, true],
    [-0, true],
    [2, true],
    [1, false],
  ])('isEven(%i)', (input, output) => {
    const result = isEven(input);
    expect(result).toBe(output);
  });

  it('this is a test', () => {
    const result = isEven(0);
    expect(result).toBe(true);
  });

  it('this is a test', () => {
    const result = isEven(-0);
    expect(result).toBe(true);
  });

  it('this is a test', () => {
    const result = isEven(2);
    expect(result).toBe(true);
  });

  it('this is a test', () => {
    const result = isEven(1);
    expect(result).toBe(false);
  });
});
