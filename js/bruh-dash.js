var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
first: function first(arr) {
  var result = arr.shift()
    return result
  },

  // returns the last element of an array
  last: function last(arr) {
    var result = arr.pop()
    return result
  },

  // returns the index of the first matching element from left to right
    indexOf: function(arr, num) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === num){
     return arr.indexOf(num);
      }else {
        return -1;
      }
    }
  },

/*
  indexOf: function(arr, val){
    var result = 0;
    for(var i = 0; i<arr.length; i++){
      if(arr[i] === val){
        result = i-1;
      }else{
        result = -1;
      }
      
    }
    return result;
  },
*/
  // returns the index of the first matching element from left to right
  lastIndexof: function(arr, val){
    var result = 0;
    for(var i = arr.length  -1; i>=0; i--){
      if(arr[i] === val){
        result = i-1;
      }else{
        result = -1;
      }
      
    }
    return result;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop()
    return arr
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
     for(var i = 0; i < arr.length; i++){
          return arr.filter(Boolean)
       }
     
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice:  function(arr, start) {
   for(var i = 0; i<arr.length; i++){
     var last = arr.pop()
     return arr.slice(start, last)
   }
  },

  // returns a slice of array with n elements dropped from the beignning
  drop:     function(arr, n){
    for(var i = 0; i<arr.length; i++){
      if(n === 0){
        return arr
      }else if(n >= 0){
        arr.splice(0, n);
        return arr
      }else{
        arr.shift()
        return arr
      }
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    for(var i = 0; i<arr.length; i++){
          if(n === 0){
        return arr
      }else if(n >= 0){
        arr.splice(-n , n);
        return arr
      }else{
        arr.pop()
        return arr
      }
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take:   function(arr, n) {
    for(var i =0; i<arr.length; i++){
      if(n === 0){
        return []
      }else if(n > arr.length){
        return arr
      }else if(n > 0){
        var nElem = arr.splice(0, n)
        return nElem
      }else{
        var firstElem = arr.slice(0,1)
        return firstElem
      }
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight:  function(arr, n) {
    for(var i =0; i<arr.length; i++){
      if(n === 0){
        return []
      }else if(n > arr.length){
        return arr
      }else if(n > 0){
        var nElem = arr.splice(-n, n)
        return nElem
      }else{
        var firstElem = arr.splice(-1,1)
        return firstElem
      }
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill:      function(arr, value, start, end) {
    if(start >= 0 && end >= 0){
      return arr.fill(value, start, end)
    }else{
      return arr.fill(value)
    }
  },
  

  // removes all given values from an array
  pull:    function(arr, values) {
     for(var i = arr.length-1; i>=0; i--){
       console.log(arr[i])
       for(var j = 0; j<values.length; j++){
       console.log(values[j])
     if(arr[i] === values[j]){
       arr.splice(i, 1);
       
         }
       }
     }
   return arr; 
  },
  

  // removes elements of an array corresponding to the given indices
  pullAt:   function(arr, index) {
    //var emptyarr = []
    for(var i = arr.length-1; i>=0; i--){
      //console.log(arr[i])
     for(var j = 0; j<index.length; j++){
       //console.log(index[j])
      if(i === index[j]){
        arr.splice(index[j], 1);
        
        } 
       
       }
        
      }
        return arr;
    },
     

  // creates an array excluding all the specified values
  without: function(arr, values) {
     for(var i = arr.length-1; i>=0; i--){
       console.log(arr[i])
       for(var j = 0; j<values.length; j++){
       console.log(values[j])
     if(arr[i] === values[j]){
       arr.splice(i, 1);
       
         }
       }
     }
   return arr; 
  },

  // returns an array with specified values excluded
  difference: function(arr, values) {
     for(var i = arr.length-1; i>=0; i--){
       //console.log(arr[i])
       for(var j = 0; j<values.length; j++){
       //console.log(values[j])
     if(arr[i] === values[j]){
       arr.splice(i, 1);
       
         }
       }
     }
   return arr; 
  },


  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};