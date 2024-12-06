import { evaluate } from 'mathjs';

export function calculate(expression) {
  try {
    return evaluate(expression);
  } catch (err) {
    return 'Error !';
  }
}
