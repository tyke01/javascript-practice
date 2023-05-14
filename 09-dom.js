function caculateTotal(){
    const inputElement=(document.querySelector('.enter-val'));
    let cost= Number(inputElement.value);
    // console.log(cost)

    if(cost<100){
        cost+=10;
        
    }
    document.querySelector('.js-total-cost').innerHTML= `${cost}shs`
    
}