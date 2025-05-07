let navbar = document.querySelector('.header .flex .navbar');
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    menuBtn.classList.remove('fa-times')
    if(window.scrollY > 0){
        header.classList.add('active');
    
    }else{
        header.classList.remove('active');
    }
}

const faqBoxes = document.querySelectorAll('.faq .box');

faqBoxes.forEach(box => {
  const title = box.querySelector('.title');
  const content = box.querySelector('.content');
  const icon = box.querySelector('i');

  title.addEventListener('click', () => {
    faqBoxes.forEach(b => {
      if (b !== box) {
        b.classList.remove('active');
        b.querySelector('.content').style.maxHeight = null;
        b.querySelector('i').classList.replace('fa-minus', 'fa-plus');
      }
    });

    if (box.classList.contains('active')) {
      box.classList.remove('active');
      content.style.maxHeight = null;
      icon.classList.replace('fa-minus', 'fa-plus');
    } else {
      box.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.classList.replace('fa-plus', 'fa-minus');
    }
  });
});
