//  class Deffered{
//    x
//    y 
//     then(func){
//          this.then.res=func.value
//         func.call(this.res)
//         if()


//     }
//     resolve(string){
//         this.string=string;
//         return this.string

//     }
     
   

// }
class Deferred {
    constructor() {
      this.value = null;
      this.callbacks = [];
    }
  
    then(callback) {
      this.callbacks.push(callback);
      return this;
    }
  
    resolve(value) {
      this.value = value;
  
    for (let i = 0; i < this.callbacks.length; i++) {
        this.value = this.callbacks[i](this.value)        
    }
    }
  }
  
const d= new Deferred()

d.then(function(res){ console.log("1 ", res); return "a"; });
d.then(function(res){ console.log("2 ", res); return "b"; });
d.then(function(res){ console.log("3 ", res); return "c"; });
d.resolve('hello');
