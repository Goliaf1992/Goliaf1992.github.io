class Rectangle {
    constructor (height,width) {

        this.height = height;
        this.width = width;
    }

   
}

//extends наследует
class ImagesFrame extends Rectangle {

    constructor(height,width,bgImage,parentSelector,borderRadius) {

        super(height,width); //супер всегда идет первой строчкой дублирует ту часть кода которая была здесь у родителя
        
        
        this.bgImage = bgImage;
        this.bgSize = 'cover';
        this.parent = document.querySelector(parentSelector);
        this.borderRadius = borderRadius;


    }

    

    render() {
        const element = document.createElement('div');
        element.innerHTML = `<div class='img'></div>`;
        element.style.height = this.height + 'px';
        element.style.width = this.width + 'px';
        element.style.borderRadius =  this.borderRadius + 'px';
        element.style.backgroundImage = this.bgImage;
        element.style.backgroundSize = this.bgSize;
        this.parent.append(element);
        return element;

    }

}



//avatar img

let avatar =  new ImagesFrame(300,300,`url(images/23.jpg`,'.info-container',150).render();
avatar.style.backgroundSize = 'cover';
avatar.style.backgroundPosition = '';


//creates divs for image-container 

let imgURL = ['IMG_0274.JPG','IMG_0275.JPG','IMG_0279.JPG','IMG_0280.JPG','IMG_0281.JPG','IMG_0297.JPG','IMG_0111.JPG','IMG_0145.JPG'];
let portraitsArr = [];

let imgUrlPeople = ['IMG_0111.JPG','IMG_0113.JPG','IMG_0115.JPG','IMG_0118.JPG','IMG_0119.JPG'];
let peopleArr = [];


function createImgDiv(arr,arr2,parent) {

    for (let i = 0; i<arr.length;i++){

        
        arr2[i] = new ImagesFrame(400,400,`url(.images/${arr[i]}`,`${parent}`,20).render();
    }
    
    }

createImgDiv(imgURL,portraitsArr,'.portraits');

createImgDiv(imgUrlPeople,peopleArr,'.people');

// peopleArr.forEach(el=>{
//     el.classList.add('img');
// });




//  hide IMG



function hideImg(arr) { //hide img

arr.forEach(img=>{

    if(img.classList.contains('zoomed')){
        img.style.display = 'block';
    }

    else {
        img.style.display = 'none';
    }
    
});
}

function showImg(arr) { //show IMG

    arr.forEach(img=>{

        img.style.display = 'block';});

    arr.forEach(img=>{

        img.style.display = 'block';});
}


//zoom img that was clicked and hide others

let count = 0;

document.querySelector('.img-container').addEventListener('click', function(e) {
    const tgt = e.target; console.log(tgt);
    tgt.classList.toggle('zoomed');

    hideImg(portraitsArr);
    hideImg(peopleArr);
    count++;
    if (count>=2){
        showImg(portraitsArr);
        showImg(peopleArr);
        count = 0;
    }
    
});



// modal script

const trigger = document.querySelector('#contact'),
        modal = document.querySelector('#reach-me'),
        btnCloseModal = document.querySelector('#close-modal');

trigger.addEventListener('click',(event)=>{
    event.preventDefault();
    modal.showModal();
});

btnCloseModal.addEventListener('click',()=>{
    modal.close();
});











