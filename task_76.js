function sumEvenNumbers(input) {
    const sumOfEvenNumbers = input
                          .filter( isEven => isEven %2 === 0 )
                          .reduce( ( accumulator, value ) => accumulator + value );
    return sumOfEvenNumbers;
    }
    