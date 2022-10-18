//toggle menu

var navLinks = document.getElementById('navLinks');
        
        
function showMenu() {
    navLinks.style.width = "350px";
}

function hideMenu() {

    navLinks.style.width = "0px";
}






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

        const modalTrigger = document.querySelectorAll('[data-modal]'),
                modalWindow = document.querySelector('.modal'),
                modalClosure = modalWindow.querySelector('[data-close]'),
                section = document.querySelector('section'),
                contactSection = document.querySelector('.contact-us');
                


                
modalTrigger[0].addEventListener('click',(e)=>{
    e.preventDefault();
   
document.querySelector('body').style.overflowY = 'hidden';
    
    section.append(modalWindow);
    modalWindow.style.display = 'flex';
   
    
});

modalClosure.addEventListener('click',()=>{

    modalWindow.style.display = 'none';
});


modalTrigger[1].addEventListener('click',(e)=>{
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    contactSection.append(modalWindow);
    modalWindow.style.display = 'flex';
    
});




            

            



















