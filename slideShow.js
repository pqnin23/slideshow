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

const loadImages =(images, container) =>{
    images.forEach(image => {
        container.innerHTML += `<div class='item'>
        <img src='${image.url}'>
            </div>
        `
      })  
    }
    loadImages(images, containersItens);

    let itens = document.querySelectorAll('.item');

    const previous = () => {
        containerItens.appendChild(itens[0]);
        itens = document.querySelectorAll('.item');
    }

    const next = () => {
        const lastItem = itens[itens.length - 1];
        containerItens.insertBefore( lastItem, itens[0] );
        itens = document.querySelectorAll('.item');
    }

    document.querySelectorAll('#previous').addEventListener('click', previous);
    document.querySelectorAll('#next').addEventListener('click', next);
