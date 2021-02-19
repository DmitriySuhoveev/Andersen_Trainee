//Functional Inheritance
var __extends = function(user, person) {
    function fn() {
        this.constructor = user;
    }
    fn.prototype = person.prototype;
    user.prototype = new fn();
};
var Person = (function() {
    function Person() {
        this.name = 'Ivan';
    }
    Person.prototype.getName = function() {
        console.log(this.name)
    };
    return Person;
})();
var Man = (function(Person) {
    __extends(Man, Person);
    function Man() {
        Person.call(this);
        this.facialHair = 10;
    }
    Man.prototype.getFacialHair = function() {
        console.log(this.facialHair);
    };
    return Man;
})(Person);

var user = new Man();
console.log(user);


//Prototypal Inheritance

function Person2(name){
    this.name = name;
}

Person2.prototype.getName = function(){
    console.log(this.name);
}

function Man2(name, facialHair){
    Person2.call(this, name, facialHair);
    this.facialHair = facialHair;
}

Man2.prototype.getFacialHair = function(){
    console.log(this.facialHair);
}

Man2.prototype = Object.create(Person2.prototype);
Man2.prototype.constructor = Man2;

var man1 = new Man2('Ivan', 100);
man1.getName();
console.log(man1);
