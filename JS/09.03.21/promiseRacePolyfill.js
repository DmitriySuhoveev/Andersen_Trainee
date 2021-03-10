Promise.race = function(promises){
    return new Promise((resolve, reject) =>{
        promises.forEach(element => {
            Promise.resolve(element)
            .then(resolve)
            .catch(reject);
        });
    })
}