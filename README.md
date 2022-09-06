# Jest with Typescript

## File Name

[name]`.spec.js` || [name]`.spec.ts`

## Start test with

`it('', () => {})`

or

`test('', () => {})`

## Assertion

Tell you if the test is passing or not.

`expect()`

```JavaScript
function isEven(num) {
    return true
}

it('returns true', () => {
    const result = isEven(2)
    expect(result).toBe(false)
})
```

## Describe

Grouping tests together

`describe('', () => {})`

## Feedback Loop with Watch Mode

`yarn jest --watchAll`

## Concise Tests

`it.each([])`

```JavaScript
it.each([
    [0, true],
    [-0, true],
    [2, true],
    [1, false],
])('isEven', (input, output) => {
    const result = isEven(input)
expect(result).toBe(output)
})
```
