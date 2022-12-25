const makeLazy = (func, ...args) => () => func(...args);
