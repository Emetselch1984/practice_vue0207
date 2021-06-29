document.addEventListener('DOMContentLoaded', () => {
    let desc1 = document.getElementById('desc1')
    console.log(desc1.textContent)
    let desc2 = $('#desc2')
    console.log(desc2)
    console.log(desc2.text())
    let elems1 = document.getElementsByTagName('h1')
    console.log(elems1)
    for (let i =0; i < elems1.length; i++){
        console.log(elems1.item(i).textContent)
    }
    let elems2 = $('h1')
    console.log(elems2)
    $.each(elems2,function (index,val) {
        console.log(val.textContent)
    })
    let elems3 = document.getElementsByName('os')
    for (let i =0; i < elems3.length; i++){
        console.log(elems3.item(i).value)
    }
    let elems4 = $('[name="os"]')
    console.log(elems4)
    $.each(elems4,function (index,val) {
        console.log(val.value)
    })
    let elems5 = document.getElementsByClassName('keywd')
    for (let i =0; i < elems5.length; i++){
        console.log(elems5.item(i).textContent)
    }
    let elems6 = $('span.keywd')
    $.each(elems6,function (index,val) {
        console.log(val.textContent)
    })
    let elems7 = document.querySelectorAll('#menu a')
    for (let i =0; i < elems7.length; i++){
        console.log(elems7.item(i).href)
    }
    let elems8 = $('#menu a')
    $.each(elems8,function (index,val) {
        console.log(val.href)
    }) 
})