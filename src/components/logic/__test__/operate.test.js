import operate from '../operate';

describe('Testing operate functionality', () => {
  it('Should return the correct value for a sum', () => {
    expect(operate('7', '5', '+')).toEqual('12');
  });

  it('Should return the correct value for subtraction', () => {
    expect(operate('7', '5', '-')).toEqual('2');
  });

  it('Should return the correct value for multiplication', () => {
    expect(operate('7', '5', 'x')).toEqual('35');
  });

  it('Should return the correct value for division', () => {
    expect(operate('10', '5', '÷')).toEqual('2');
  });

  it('Should return an error message', () => {
    expect(operate('10', '0', '÷')).toEqual("Can't divide by 0.");
  });
});
