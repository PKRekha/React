/**function based inheritance using ES5 and lower versions */

function addVar(){
    this.a=10;
   this.b=20;
}

function addVarAll(){
    this.c=30;
    this.d=40;
}

addVarAll.prototype=new addVar();// here is where we will use protype for extending properties from one funnctiion to another function.
var add=new addVar();
console.log(add.d);
var add=new addVarAll();
console.log(add.a);



/**class based inheritance concept in ES6 */

class one{
    constructor(){
        this.a=10;
        this.b=20;
    }
}

class two extends one{
    constructor(a, b,c,d){
        super(a,b);
        this.c=c;
        this.d=d;
    }
}

var obj=new two(30,40);
console.log(obj.a);

