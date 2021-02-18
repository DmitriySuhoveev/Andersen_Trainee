const a = document.querySelectorAll('a'),
    inputs = document.querySelectorAll('.inputsValueDiv-inputs'),
    inputValue = document.getElementById('p'),
    square = document.querySelectorAll('.square'),
    inputsLengthDiv = document.querySelectorAll('.inputsLengthDiv-inputs'),
    colorChangeDiv = document.querySelectorAll('.colorChangeDiv-Div'),
    ul = document.querySelector('.ul'),
    addBtn = document.getElementsByTagName('button')[0];

//Task1-2-3
a.forEach((elem) =>{
    elem.addEventListener('mouseover', show);
    elem.addEventListener('mouseout', hide);

})

function show(){
    this.innerHTML = this.innerHTML + ` (${this.href})`;
    this.removeEventListener('mouseover', show);
}

function hide(){
    this.innerHTML = this.innerHTML.split('(')[0];
}

//Task4
let arrInputs = [...inputs];
arrInputs.forEach((elem) =>{
    elem.addEventListener('blur', showValueFunc);
});

function showValueFunc(){
    inputValue.innerHTML = this.value;
}

//Task5
arrInputs.forEach((elem) =>{
    elem.addEventListener('click', alertFunc);
})

function alertFunc(){
    alert(this.value);
    this.removeEventListener('click', alertFunc);
}

//Task6
square.forEach((elem) =>{
    elem.addEventListener('click', squareFunc)
})

function squareFunc(){
    this.innerHTML = this.innerHTML* this.innerHTML;
}


//Task7
inputsLengthDiv.forEach((elem) =>{
    elem.addEventListener('blur', changeColorFunc)
})

function changeColorFunc(){
    let correctValue = this.dataset.length,
        currentValue = this.value.length;

        if(correctValue == currentValue){
            this.style.borderColor = 'green';
        } else{
            this.style.borderColor = 'red';
        }
}


//Task8
colorChangeDiv.forEach((elem) =>{
    elem.addEventListener('click', changeToRedFunc);
})

function changeToRedFunc(){
    this.style.background = 'red';
    this.removeEventListener('click', changeToRedFunc);
    this.addEventListener('click', changeToGreenFunc);
}

function changeToGreenFunc(){
    this.style.background = 'green';
    this.removeEventListener('click', changeToGreenFunc);
    this.addEventListener('click', changeToRedFunc);
}

//Task9

ul.addEventListener('click', (e) => {
    let li = e.target.closest('li');
    if(li){
        li.innerHTML = li.innerHTML + "!";
    }
});

addBtn.addEventListener('click', () =>{
    let ulLength = document.querySelector('.ul').children.length+1
    let newLiElem = document.createElement('li');
    newLiElem.innerHTML = 'пункт' + ulLength;
    ul.appendChild(newLiElem);
})