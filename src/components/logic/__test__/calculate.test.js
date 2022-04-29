import calculate from '../calculate';

const obj = {
  next: '1',
  total: '20',
  operation: '+',
};

describe('If calculate is returning the right values', () => {
  it('Should return all values null', () => {
    const result = {
      total: null,
      next: '',
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual(result);
  });
});
