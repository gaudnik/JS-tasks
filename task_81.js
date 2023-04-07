function consecutive(numbers) {
    return numbers.length
      ? (Math.max(...numbers) - Math.min(...numbers) + 1) - (numbers.length)
      : 0;
  }
  