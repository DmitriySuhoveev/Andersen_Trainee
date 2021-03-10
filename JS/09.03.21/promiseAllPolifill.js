Promise.all = function(promises) {
    let results = [];
    return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
        p.then((result) => {
        results.push(result);
        if (index === promises.length - 1) {
            resolve(results);
        }
        }).catch((err) => reject(err));
    });
    });
};