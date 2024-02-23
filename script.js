let inputBox = document.getElementById('inputBox');
let list = document.getElementById('list');
let addItem;
let box = document.querySelector('.box');

inputBox.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        addItem(this.value);
        this.value = '';
    }
});

addItem = (inputBox) => {
    let ListItem = document.createElement('li');
    ListItem.innerHTML = `${inputBox}<i>x</i>`;

    ListItem.addEventListener('click', function(e){
        this.classList.toggle('done');
    });

    ListItem.querySelector('i').addEventListener('click', function(e){
        ListItem.remove();
    })

    list.appendChild(ListItem);
}

box.addEventListener('click', function(e){
    this.classList.toggle('change_img');
});