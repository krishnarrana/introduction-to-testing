import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
  it('should add tow negative numbers', () => {
    expect(add(-2, -2)).toBe(-4);
  });
  it('should parse two string number into numbers', () => {
    expect(add('4', '4')).toBe(8);
  });
  it("should throw an error if the string cann't be parse", () => {
    expect(() => {
      add('4', 'hellow');
    }).toThrow();
  });
});

describe('subtract', () => {
  it('should subtract two number', () => {
    expect(subtract(3, 1)).toBe(2);
  });
});

describe('multiply', () => {
  it('should multiply two number', () => {
    expect(multiply(3, 3)).toBe(9);
  });
});

describe('divide', () => {
  it('should divide two number', () => {
    expect(divide(8, 2)).toBe(4);
  });
});
