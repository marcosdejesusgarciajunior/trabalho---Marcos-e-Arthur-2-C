//Mensagem de boas-vindas ao clicar no botâo
document.addEventListener('DOMContentLoaded',()=>{
  const button = document.querySelector('button');
button.addEventListener('click',()=>{
    alert('Estamos animados para começar o ano com vocês!');
});
});
 // contador de dias para o ínicio das aulas
 const startDate=newDate ('2024-08-01'); // defina a data de ínicio das aulas
 const today=newDate ();
 const timeDiff=startDate-today;
 const daysleft=Math.ceil(timeDiff/(1000*60*60*24));

 const countdownElement=document.createElement('p');
 countdownElement.textContent = `Faltam$(daysleft) dias para o ínicio das aulas`;
 document.querySelector('.card').appendChild(countdownElement);

 // Alterar a imagem ao clicar
 const image=document.querySelector('img');
 image.addEventListener('click',()=>{
    image.src=voltaaulas.jpg;

 });

 // mostrar uma mensagem de boas-vindas com animação
 const card=document.querySelector('card');
 card.style.opacity=0;
 card.style.transition='opacity 2s';

 setTimeout(()=>{
card.style.opacity=1;
 }, 100);
