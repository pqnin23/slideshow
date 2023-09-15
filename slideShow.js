'use strict';

const imagens =[
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/tenchi.jpg'},
    {'id': '4', 'url': './img/ippo.jpg'},
    {'id': '5', 'url': './img/tenjihotenge.jpg'},
    {'id': '6', 'url': './img/yuyuhakusho.jpg'},
]
const containerItens = document.querySelector('#container-itens');
const loadImages =(images,container) =>{
    images.forEach(image =>{
        container.innerHTML += `<div class='item'>
        <img src='${image.url}'>
            </div>
        `
    })
    
    }
