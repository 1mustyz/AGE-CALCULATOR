console.log('it works');

const mainButton = document.querySelector('.firstB');
const modalOuter = document.querySelector('.modal-outer');
const formSubmit = document.querySelector('.form-submit');
const modalInner = document.querySelector('.modal-inner');
const subModalInner = document.querySelector('.submodal-inner');
const backBtn = document.querySelector('.backBtn');
const formReset = document.querySelector('.form-reset');

const hubby = document.querySelector('.hubby');
const dob = document.querySelector('.dob');
const pName = document.querySelector('.pname');

const nameOutput = document.querySelector('.name-output');
const ageOutput = document.querySelector('.age-output');
const hobbyOutput = document.querySelector('.hobby-output');
const msg = document.querySelector('.msg');

const birthday = document.querySelector('.birthday');
const frame1 = document.querySelector('.sub-inner');



const currentYear = 2020;
let isBlue = false;
setInterval(function(){
    if (isBlue){
        mainButton.style.background = 'pink';
    }else {
        mainButton.style.background = '#4349D3';
    }
    isBlue = !isBlue;
},1000);

function mainButtonCallback(){
    modalOuter.classList.add('open');
   

}

function formSubmitCallBack(e){
    e.preventDefault();

    const hbb = hubby.value;
    const name = pName.value;
    const db = parseInt(dob.value);

    // const ff = hbb;
    // ff.split('').map((l)=>{
    //     l.toUpperCase();
    // })
    
    if (hbb == '' || name == '' || db == ''){
        alert('oh oh you left a filled empty');
        return;
    }else if(typeof hbb != 'string' || typeof name != 'string' || typeof db != 'number'){
        alert('please type a valid input');
        return;
    }else{

        setTimeout(() => {
            nameOutput.innerHTML = `<span id="b-bold">Mr. ${name} <span>`;
            setTimeout(() => {
                ageOutput.innerHTML = `<span id="b-bold">You are ${currentYear - db} old today, and its your birthday <span>`;
                setTimeout(() => {
                    msg.innerHTML = `<span id="b-bold">You have lived for ${(currentYear - db) * 365} days on earth <span>`;
                    setTimeout(() => {
                        hobbyOutput.innerHTML = `<span id="b-bold">You love ${hbb} as your hobby <span>`; ;

                    }, 4000);
                },3000);
            }, 2000);
        }, 1000);
    }
    //let i = 0;
    //while(i < 10){
        setInterval(() => {
            setTimeout(()=>{
                birthday.classList.add('font1');
        
                setTimeout(()=>{
                   // birthday.classList.remove('font1');
                    birthday.classList.add('font2');
        
                    setTimeout(()=>{
                        //birthday.classList.remove('font2');
                        birthday.classList.add('font3');
            
                        
                    },5000);
                },1000);
            },2000);
           
        }, 3000);
        
        setInterval(() => {
            frame1.classList.add('red')
            setTimeout(() => {
                frame1.classList.remove('red');
            }, 500);
        }, 1000);
        
    
    

    modalInner.classList.add('hidden');
    subModalInner.classList.remove('hidden');

}

function backBtnCallBack(){
    modalOuter.classList.remove('open');
    modalInner.classList.remove('hidden');
    subModalInner.classList.add('hidden');

}

function formResetCallBack(e){
    e.preventDefault();
    hubby.value = '';
    pName.value = '';
    dob.value = '';
    
}



mainButton.addEventListener('click', mainButtonCallback);
formSubmit.addEventListener('click',formSubmitCallBack);
backBtn.addEventListener('click',backBtnCallBack);
formReset.addEventListener('click',formResetCallBack);