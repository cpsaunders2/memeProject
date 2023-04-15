const form = document.querySelector('#form');
const textTop = document.querySelector('#textTop');
const image = document.querySelector('#pic');
const div = document.querySelector('#picHolder');
const textBot = document.querySelector('#textBot');

form.addEventListener('submit', function(e){
   e.preventDefault();

   let newDiv = document.createElement('div');
   newDiv.classList.add('container');
   let removeDiv = document.createElement('button');
   removeDiv.classList.add('remove');
   removeDiv.innerText = "X"
   
   div.appendChild(newDiv);
   newDiv.prepend(removeDiv);
   
   let newPic = document.createElement('img');
   newPic.src = image.value;
   image.value = '';
   newDiv.appendChild(newPic);

   let txtDiv = document.createElement('div');
   txtDiv.classList.add('txtDiv');
   newDiv.appendChild(txtDiv);

   let txtTop = document.createElement('h3');
   txtTop.classList.add('txtTop')
   txtTop.innerText = textTop.value;
   textTop.value = '';

   let txtBot = document.createElement('h3');
   txtBot.classList.add('txtBot');
   txtBot.innerText = textBot.value;
   textBot.value = '';

   txtDiv.appendChild(txtTop);
   txtDiv.appendChild(txtBot);

   div.addEventListener('click', function(e){
      if(e.target.tagName === 'BUTTON'){
         e.target.parentElement.remove();
      }
   })


})


