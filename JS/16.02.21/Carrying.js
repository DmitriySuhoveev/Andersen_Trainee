function sum(a,b,c){
    return a+b+c;
}

const result = fn => {
    const resulted = (...args) =>{
        if(args.length >= fn.length){
            return fn(...args)
        } else {
            return (...args2) => resulted(...args, ...args2)
        }
    }
    return resulted
}

const carryF = result(sum);

console.log(carryF(1)(2)(3));