
elements.addEventListener('dragstart',dragStart);
function dragStart(e){
    setTimeout(() => { e.target.classList.add('hide');},0)
    let data=e.dataTransfer.setData('text/plain',e.target.id)
}
let box=document.querySelectorAll('.box');
box.forEach((box) =>{


    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragover',dragOver);
    box.addEventListener('drop',dragDrop);
    box.addEventListener('dragleave',dragLeave);
})
function dragEnter(e){
   e.target.classList.add('drag-over');
   e.preventDefault();
}

function dragDrop(e){
    e.target.classList.remove('drag-over');
    let id= e.dataTransfer.getData('text/plain');
    let dragger=document.getElementById(id);
    e.target.appendChild(dragger);
    dragger.classList.remove('hide');
}

function dragLeave(e){
    e.target.classList.remove('drag-over');
     
}

function dragOver(e){
   e.target.classList.add('drag-over');
   e.preventDefault();
}