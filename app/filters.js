angular.module('filters', []).
    filter("sum", function(){
      return function(input, params){
        var totalSum = 0;
        for(var x = 0; x < input.length; x++){
          totalSum += parseInt(input[x][params], 10);
        }
        //console.log(input, params);
        return totalSum;
      };
});