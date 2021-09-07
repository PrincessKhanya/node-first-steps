function greet(neighbour){
    if (!neighbour){
        return 'Hello'
    }
    return "Hello, "+neighbour

    
  }

  var msg = greet("");
  console.log(msg);