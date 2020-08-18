const binarySearch = require('../../src/chapter-1/binarySearch')

it('should return the correct index', () => {
  const array = [1, 2, 3, 5, 8, 13]

  const index = binarySearch(array, 8)

  expect(index).toBe(4)
})

it('should return null', () => {
  const array = [1, 2, 3, 5, 8, 13]

  const index = binarySearch(array, 21)

  expect(index).toBeNull()
})
