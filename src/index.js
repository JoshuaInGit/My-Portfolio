const container = document.querySelector('#box3_v2');
console.log(container);
const buttons = document.querySelectorAll('.hover_button');
console.log(buttons);

buttons.forEach(button =>{
    button.addEventListener('mouseover',()=>{
        const bg = button.getAttribute('data-bg');
        container.style.backgroundImage = `url(${bg})`;
    })
    button.addEventListener('mouseout',()=>{
        container.style.backgroundImage = '';
    })
});

document.getElementById('box2_0').addEventListener('click', function() {
  document.getElementById('main_container2').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

document.getElementById('box3').addEventListener('click', function() {
  document.getElementById('main_container2').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

document.getElementById('box2_v2').addEventListener('click', function() {
  document.getElementById('main_container1').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

document.getElementById('box3_container3').addEventListener('click', function() {
  document.getElementById('main_container1').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

document.getElementById('box4_container3').addEventListener('click', function() {
  document.getElementById('main_container2').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

document.getElementById('box4_v2').addEventListener('click', function() {
  document.getElementById('main_container3').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

document.getElementById('box4').addEventListener('click', function() {
  document.getElementById('main_container3').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
