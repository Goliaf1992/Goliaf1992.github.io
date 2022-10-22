//big-images script

const imagesRow = document.querySelector('big-img-row'),
        bigImages = document.querySelectorAll('.img-big'),
        arrowLeft = document.querySelector('#left'),
        arrowRight = document.querySelector('#right');




function hideImage(){

        bigImages.forEach(img=>{
            img.style.display = 'none';
        });
    }

    hideImage();

function showImage(i = 0){
        bigImages[i].style.display = 'block';
    }

    showImage();



let countRight = 0;

    arrowRight.addEventListener('click',(event)=>{
        
       hideImage();
       countRight++;
       if (countRight>=bigImages.length){
        countRight--;
       }
       showImage(countRight);
        
    }); 


    arrowLeft.addEventListener('click',()=>{
        countRight--;
        hideImage();
        if (countRight < 0) {
            countRight++;
        }
        showImage(countRight);
    });












// script for offers

const offersColumn = document.querySelectorAll('.offers-column'),
        offersList = document.querySelector('.offers-list'),
        offerItem = offersList.querySelectorAll('.offers-item');


function hideOffers(){

            offersColumn.forEach(column=>{
            column.style.display = 'none';
        });

        offerItem.forEach(item=>{
            item.classList.remove('active');
        });

    }

        hideOffers();

        function showOffer(i = 0) {

            offersColumn[i].style.display = 'block';
            offerItem[i].classList.add('active');

        }

        showOffer();

    offersList.addEventListener('click',(event)=>{

            const target = event.target; 
            if (target && target.classList.contains('offers-item')) {
                offerItem.forEach((column,index)=>{
                    
                    if (column == target) {
                        hideOffers();
                        showOffer(index);
                    }

                });
            }
        });



//   JavaScript for facilities
const facilitiesColumn = document.querySelectorAll('.facilities-column'),
        menuList = document.querySelectorAll('.menu-list-item'),
        menuParent = document.querySelector('.menu-list-items');


        function hideTabs(){
            facilitiesColumn.forEach(tab=>{
                tab.style.display = 'none';
            });

            menuList.forEach(list=>{
                list.classList.remove('menu-list-active');
            });
        }

        function showTabs(i = 0) {

            facilitiesColumn[i].style.display = 'block';
            menuList[i].classList.add('menu-list-active');
        }

        hideTabs();
        showTabs();

        menuParent.addEventListener('click',(event)=>{
            const target = event.target;
            if (target && target.classList.contains('menu-list-item')) {
                menuList.forEach((item,index)=>{
                    
                    if(item == target){
                        hideTabs();
                        showTabs(index);
                    }

                });
            }
        });
        




// promotion-timer

const deadline = '2022-12-25';

function calculateTime(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours =  Math.floor(t/(1000*60*60)%24),
        minutes =  Math.floor(t/(1000*60)%60),
        seconds = Math.floor((t/1000)%60);

        return {
            total: t,
            days:days,
            hours:hours,
            minutes:minutes,
            seconds:seconds
        };

}




function addZero(num) {
    if (num>=0 &&   num<10) {
        return `0${num}`;}
     else {return num;}
}

function setTimer(selector,endtime){
    const timer = document.querySelector('.timer');
        let days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds');

            updateClock();
            const interval = setInterval(updateClock,1000);

            function updateClock() {
                const t = calculateTime(endtime);
                days.innerHTML = addZero(t.days);
                hours.innerHTML = addZero(t.hours);
                minutes.innerHTML = addZero(t.minutes);
                seconds.innerHTML = addZero(t.seconds);
               
                
            }
        }

        setTimer('.timer',deadline);


        // modal window script

        const openModal = document.querySelectorAll('#open-modal'),
                modalWindow = document.querySelector('.modal'),
                closeModal = modalWindow.querySelector('#close-modal'),
                submitButton = document.querySelector('#submit');
                

function showsModalWindow(e){
    
    modalWindow.showModal();
    document.querySelector('body').style.overflowY = 'hidden';

}
                
openModal.forEach(element =>{

    element.addEventListener('click', ()=>{
    
        modalWindow.showModal();
        document.querySelector('body').style.overflowY = 'hidden';
        clearInterval(modalTimerId);
    
    });
});

closeModal.addEventListener('touchstart',()=>{
    document.querySelector('body').style.overflowY = '';
    
    modalWindow.close();
});

closeModal.addEventListener('click',()=>{
    document.querySelector('body').style.overflowY = '';
    
    modalWindow.close();
});

submitButton.addEventListener('click',()=>{
    document.querySelector('body').style.overflowY = '';
});


const modalTimerId = setTimeout(showsModalWindow,3000);

function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight>= document.documentElement.scrollHeight-1){
        showsModalWindow();
window.removeEventListener('scroll',showModalByScroll);

    }

}

window.addEventListener('scroll',showModalByScroll);




// constructor for columns

class OfferTab {
    constructor (parentSelector,link) {

       
       this.parent = document.querySelector(parentSelector);
       this.link = link;
       
    }

    render() {

        const bigImage = document.createElement('div');
        bigImage.innerHTML =`<div class="img-big">
        <h3 class="images-header">of Israel</h3>
    </div>`;

        bigImage.style.backgroundImage = this.link;

        this.parent.append(bigImage);

    }
}


// const img = new OfferTab('.promotion','url(images/9.jpg)');

// img.render();

document.querySelector('.promotion').style.backgroundImage = 'url(images/banner.jpg)';
document.querySelector('.promotion').style.backgroundSize = 'cover';














            

            



















