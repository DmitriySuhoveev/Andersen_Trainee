const obj = {
    count: 0,
    add: function(){
        this.count++;
        return this;
    },
    dec: function(){
        this.count--;
        return this;
    },
    result(){
        console.log(this.count);
        return this;
    }
}

obj.add().add().dec().dec().add().result();