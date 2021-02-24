if(!Object.create){
    Object.create = function(obj, props){
        function F(){}
        F.prototype = obj;
        
        if(typeof(props) === 'object'){
            for(prop in props){
                if(props.hasOwnProperty((prop))){
                    F[prop] = props[prop];
                }
            }
        }
        return new F();
    }
}