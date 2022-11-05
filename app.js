
const img = document.getElementById('photo')
let toggle = true;
img.addEventListener('click',function(){
 toggle = !toggle;
  if(toggle){
  img.src = 'images\\IMG_3610.jpg';}
    else{img.src = 'images\\IMG_3798.jpg'}
})


const divp = document.querySelector('div p');
const image = document.querySelector('img');

//

// NOTE that two CLASSES are defined in the CSS:
// .rotate-right
// .rotate-left
// these make the code below work

sister.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   // change text
   divp.textContent = text2;
};
sister.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   // change text back
   divp.textContent = text1;
};
