class Counter {
    count = 0;
    constructor(){
        if(typeof Counter.instance === 'object'){
            return Counter.instance;
        }
        Counter.instance = this;
        return Counter.instance
    }

    getCounter(){
        return this.count;
    }
    incCounter(){
        this.count++;
    }
}

let newCounter1 = new Counter()
let newCounter2 = new Counter()

newCounter1.incCounter();
newCounter2.incCounter();

console.log(newCounter1 === newCounter2);