let layer1 = document.getElementById('layer1');
let layer11 = document.getElementById('layer1.1');
let layer6 = document.getElementById('layer6');
let layer7 = document.getElementById('layer7');
let layer8 = document.getElementById('layer8');
let layer2 = document.getElementById('layer2');
let layer3 = document.getElementById('layer3'); 
let layer4 = document.getElementById('layer4');
let layer5 = document.getElementById('layer5');

window.addEventListener('scroll', function (){
    let value = window.scrollY;

    
    layer1.style.top = value * 0.5 + 'px';
    layer11.style.top = value * 0.9 + 'px';
    layer6.style.top = value * 0.5 + 'px';
    layer7.style.top = value * 0.8 + 'px';
    layer8.style.top = value * 0.8 + 'px';
    layer2.style.top = value * 0.6 + 'px';
    layer3.style.top = value * 0.7 + 'px';
    layer4.style.top = value * 0.8 + 'px';
    layer5.style.top = value * 0.9 + 'px';
   
})