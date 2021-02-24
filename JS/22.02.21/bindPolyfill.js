if (!Function.prototype.bind){
    Function.prototype.bind = function(context){
        let fn = this;
        let args = Array.prototype.slice.call(arguments, 1);

        if(typeof(fn) !== 'function'){
            throw new TypeError('Error typeof(fn) is not a function')
        }
        return function(){
            return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}