import { describe, afterEach, afterAll, beforeAll, beforeEach, test, it, expect } from './core.js'

beforeAll(() => {
  console.log("beforeAll");
})

beforeEach(() => {
  console.log("beforeEach");
})

test('first test case', () => {
  console.log("first test case");
  expect(2).toBe(2)
})

// test.only('second test case', () => {
//   console.log("only test case");
// })

it('second test case', () => {
  console.log("second test case");
  expect(2).toBe(3)
})

afterEach(() => {
  console.log("afterEach");
})

describe('sub', () => {
  test('sub: first test case', () => {
    console.log("sub: first test case");
    expect(2).toBe(2)
  })
})

afterAll(() => {
  console.log("afterAll");
})
