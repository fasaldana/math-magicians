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

  it('Should return all ""', () => {
    const result = {};
    expect(
      calculate(
        {
          total: null,
          next: '0',
          operation: null,
        },
        '0',
      ),
    ).toEqual(result);
  });

  it('Should return all 1', () => {
    const result = {
      total: '1',
      next: '10',
      operation: '+',
    };
    expect(
      calculate(
        {
          total: '1',
          next: '1',
          operation: '+',
        },
        '0',
      ),
    ).toEqual(result);
  });
});
