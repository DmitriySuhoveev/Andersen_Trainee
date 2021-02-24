function Singleton(){
    let instance;

    return function Construct_singleton(){
        if(instance){
            return instance;
        }
        if(this && this.construtor === Construct_singleton){
            instance = this;
        } else{
            return new Construct_singleton();
        }
    }
}

