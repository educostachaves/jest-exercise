import main from './index';

describe('index', () => {
  describe('when method sum called', () => {
    it('the two parameters should be integers', () => {
      const resultOpt1 = main.sum('12345', '12345');
      const resultOpt2 = main.sum(12345, '12345');
      const resultOpt3 = main.sum('12345', 12345);
      const resultOpt4 = main.sum(12345, 12345);

      expect(resultOpt1).toBe(false);
      expect(resultOpt2).toBe(false);
      expect(resultOpt3).toBe(false);
      expect(resultOpt4).toBe(24690);
    });

    it('should return an integer', () => {
      // implement this
    });

    it('the two parameters should be greater than zero', () => {
      // implement this
    });
  });
});
