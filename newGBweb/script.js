const panel = document.querySelector('.panel');
const panel_none = document.querySelector('.panel_none');
// const del = document.querySelectorAll('.del');

const cardp = document.querySelector('.cardp');
const vector3 = document.querySelector('.vector3');
const vector4 = document.querySelector('.vector4');


panel.addEventListener('click', function(){
    panel_none.classList.toggle('panel_none');
});


const layer = document.querySelector('.layer');

layer.addEventListener('mouseover', function(){
    layer.classList.add('photocard1');
    cardp.classList.toggle('del')
    vector3.classList.toggle('del')
    vector4.classList.toggle('del')
})



layer.addEventListener('mouseout', function(){
    layer.classList.remove('photocard1');
    cardp.classList.toggle('del')
    vector3.classList.toggle('del')
    vector4.classList.toggle('del')
})
