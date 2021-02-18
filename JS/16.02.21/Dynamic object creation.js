function stringToObj (string){
    let array = string.split('.').reduceRight((prev, cur) => ({ [cur]: prev }), null);
    console.log(array);
}

stringToObj('a.b.c.d');
/*.reduceRight((prev, cur) => ({ [cur]: prev }), null);
console.log(objectHell('a.b.c.d'));*/