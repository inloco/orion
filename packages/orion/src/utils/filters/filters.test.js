import { buildSelectedTextFromArray } from './'

const options = [
  { text: 'Blue', value: 'blue' },
  { text: 'Yellow', value: 'yellow' },
  { text: 'Red', value: 'red' }
]

describe('when a single option was selected', () => {
  it('should only return its text', () => {
    const fn = buildSelectedTextFromArray(options)
    expect(fn(['yellow'])).toEqual('Yellow')
  })
})

describe('when multiple options were selected', () => {
  it('should return the text of the first plus the number of remaining options', () => {
    const fn = buildSelectedTextFromArray(options)
    expect(fn(['blue', 'yellow'])).toEqual('Blue +1')
    expect(fn(['blue', 'yellow', 'red'])).toEqual('Blue +2')
    expect(fn(['yellow', 'red'])).toEqual('Yellow +1')
  })
})

describe('when different value/text keys are given', () => {
  const fruits = [
    { name: 'Watermelon', color: 'green' },
    { name: 'Banana', color: 'yellow' },
    { name: 'Strawberry', color: 'red' }
  ]

  describe('when a single option was selected', () => {
    it('should only return its text', () => {
      const fn = buildSelectedTextFromArray(fruits, 'color', 'name')
      expect(fn(['yellow'])).toEqual('Banana')
    })
  })

  describe('when multiple options were selected', () => {
    it('should return the text of the first plus the number of remaining options', () => {
      const fn = buildSelectedTextFromArray(fruits, 'color', 'name')
      expect(fn(['green', 'yellow'])).toEqual('Watermelon +1')
      expect(fn(['green', 'yellow', 'red'])).toEqual('Watermelon +2')
      expect(fn(['yellow', 'red'])).toEqual('Banana +1')
    })
  })
})
