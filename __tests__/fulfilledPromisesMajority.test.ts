import { fulfilledPromisesMajority } from '../src/fulfilledPromisesMajority';

describe('fulfilledPromisesMajority', () => {
  test('should resolve when fulfilled promises are more than rejected promises', async () => {
    const promisePool = [
      Promise.resolve(),
      Promise.resolve(),
      Promise.resolve(),
      Promise.reject(),
    ];
    await expect(fulfilledPromisesMajority(promisePool)).resolves.toBeUndefined();
  });

  test('should reject when fulfilled promises are less than rejected promises', async () => {
    const promisePool = [
      Promise.reject(),
      Promise.resolve(),
      Promise.reject(),
      Promise.reject(),
    ];
    await expect(fulfilledPromisesMajority(promisePool)).rejects.toBeUndefined();
  });

  test('should resolve when no promises are rejected', async () => {
    const promisePool = [
      Promise.resolve(),
      Promise.resolve(),
      Promise.resolve(),
      Promise.resolve(),
      
    ];
    await expect(fulfilledPromisesMajority(promisePool)).resolves.toBeUndefined();
  });

  test('should reject when equal number of fulfilled and rejected promises', async () => {
    const promisePool = [
      Promise.resolve(),
      Promise.resolve(),
      Promise.reject(),
      Promise.reject(),
      
    ];
    await expect(fulfilledPromisesMajority(promisePool)).rejects.toBeUndefined();
  });

  test('should reject when promise pool is empty', async () => {
    const promisePool : Promise<any>[]= [];
    
    await expect(fulfilledPromisesMajority(promisePool)).rejects.toBeUndefined();
  });
});
