// steps needed
function handleClick(){
    const onClick=document.querySelector('.js-subscribe');
    //console.log(onClick);
    
    if(onClick.innerText==='subscribe'){
        onClick.innerText='subscribed';
    }
    else {
        onClick.innerText= 'subscribe';
    }
}