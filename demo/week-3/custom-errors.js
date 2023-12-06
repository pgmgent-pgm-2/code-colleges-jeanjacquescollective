class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomError);
      }
  
      this.name = 'CustomError';
      // Custom debugging information
      this.foo = foo;
      this.date = new Date();
    }
  }
  
  try {
    throw new CustomError('doe', 'This is an error message from John Doe!');
  } catch(e){
      showErrorInConsole(e);
  }
  
  function showErrorInConsole (e) {
      if (e instanceof CustomError) {
          console.error(`${e.date.toTimeString()} | ${e.name} | ${e.message} | ${e.foo}`);
      } else {
          console.error(`${e.name} | ${e.message}`);
      }
  }
  