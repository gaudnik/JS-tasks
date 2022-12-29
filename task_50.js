const sayHelloTo = name => {
    let message = "Hello " + name;
    return () => console.log(message);
  }
  const sayHelloToAmy = sayHelloTo("Amy");
  sayHelloToAmy(); 
  