 export 
 async function fulfilledPromisesMajority(promisePool: Promise<any>[]): Promise<void> {
    
  const totalPromises = promisePool.length;
  const rejectedPromises= await Promise.allSettled(promisePool)
      .then(results => results.filter(result => result.status === 'rejected').length);
  
    if (rejectedPromises< totalPromises / 2) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  }
  