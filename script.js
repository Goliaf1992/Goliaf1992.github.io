// elements of the project

const form = document.querySelector('form'),
name = form.querySelectorAll('[type="text"]')[0].value,
lastName = form.querySelectorAll('[type="text"]')[1].value,
phone = form.querySelectorAll('[type="text"]')[2].value,
listOfData = document.querySelector('.list-of-data'),
lengthOfInput = form.querySelectorAll('[type="text"]').length,
allInputElements = form.querySelectorAll('[type="text"]');



const submitData = (div, arr) => {
    div.innerHTML ='Flight info:';
    arr.forEach(item =>{
        div.innerHTML+= `<li>${item.value}</li>`;
    });
    div.innerHTML+=`<p>If everything right press confirm</p>`;
    div.innerHTML += `<a href="index.html"><button>Confirm</button></a>`;
};




form.addEventListener('submit',(e)=>{
    e.preventDefault();
    submitData(listOfData,allInputElements);

});


















