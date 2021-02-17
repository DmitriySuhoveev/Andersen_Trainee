function stringToObj (string){
    let array = string.split('.');
    let obj = {};
    let result = obj;
    for (let i=0; i<array.length; i++){
        result = result[array[i]] = {};
    }
    console.log(obj);
}

stringToObj('a.b.c.d');
