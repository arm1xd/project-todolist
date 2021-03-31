// let inputText = document.querySelector('#input__text')
// let inputBut = document.querySelector('#input__button')

// function jojo(text){
//     let toDo=document.createElement('div')
//     toDo.classList.add('item');

//     toDo.innerHTML = `<p>${text}</p>`

//     return toDo;
// }


// inputBut.addEventListener('click', (Event)=>{
//     if (inputText.value == '') {
//         alert('error')
//     } else {
//         let res = jojo(inputText.value);

//         let blockRes = document.querySelector('.bobo');
//         blockRes.append(res)
//     }


// })


let money = document.querySelector('#money');
let gas = document.querySelector('#gas');
let water = document.querySelector('water');
let electro = document.querySelector('#electro');
let res = document.querySelector('#res');


const cubGas = 0.6;
const cubWater = 25;
const cubElectro =1.68;


res.addEventListener('click' , (Event)=>{

    let cubResGas = cubGas*Number(gas.value);
    let cubResWater = cubWater*Number(gas.value);
    let cubResElectro = cubElectro*Number(gas.value);

    let allRes = cubResGas+cubResWater+cubResElectro

    let jopa = Number(money.value)-allRes
    if (money.value == '') {
                alert('error')
            } else {
                let block =document.createElement('div')
                block.classList.add('item');
           
                block.innerHTML = `<p>${jopa}</p>`
           
                return block;
            }

})

