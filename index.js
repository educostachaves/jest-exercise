const main = {
  sum: (a, b) => {
    if( typeof a === 'number' && typeof b === 'number' ) {
      return a + b;
    }
    return false;
  }
};

export default main;
