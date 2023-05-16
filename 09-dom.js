function caculateTotal(event) {
    const inputElement = (document.querySelector('.enter-val'));
    let cost = Number(inputElement.value);
    // console.log(cost)

    if (cost < 100) {
        cost += 10;
    }
    document.querySelector('.js-total-cost').innerHTML = `${cost}shs`
}
function handleEnter(event) {
    if (event.key === 'Enter') {
        caculateTotal();
    }
}

