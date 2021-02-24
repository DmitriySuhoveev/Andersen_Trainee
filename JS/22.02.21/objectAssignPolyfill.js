if(typeof Object.assign != 'function'){
    Object.assign = function(target, args){
        'use strict';
        if(target == null){
            console.log('Error convert null or undefined to object');
        }
        
        let to = Object(target);

        for(let i = 1; i<arguments.length; i++){
            let nextValue = arguments[i];
            if(nextValue !=null){
                for(let nextKey in nextValue){
                    if (Object.prototype.hasOwnProperty.call(nextValue, nextKey)){
                        to[nextKey] = nextValue[nextKey];
                    }
                }
            }
        }
        return to;
    };
}