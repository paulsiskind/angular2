app.filter('kebab', function () {
  return function (input) {
      return input.replace(/_/g , "-");
  };
});

app.filter('camel', function(){
  return function(input){
     return input.toLowerCase().replace(/-(.)/g || /_(.)/g,  function(match, group1) {
        return group1.toUpperCase();
    });
  }
})

app.filter('reverse', function(){
  return function(input){
    return input.split('').reverse().join('');
  }
})

app.filter('redact', function(){
  return function(input, x){
    return input.replace(x | 'redact')
  }
})