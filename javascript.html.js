console.log('it works');

const mainButton = document.querySelector('.firstB');
const modalOuter = document.querySelector('.modal-outer');
const formSubmit = document.querySelector('.form-submit');
const modalInner = document.querySelector('.modal-inner');

const hubby = document.querySelector('.hubby');
const dob = document.querySelector('.dob');
const pName = document.querySelector('.pname');




const currentYear = 2020;


function mainButtonCallback(){
    modalOuter.classList.add('open');
   

}

function formSubmitCallBack(e){
    e.preventDefault();

    const hbb = hubby.value;
    const name = pName.value;
    const db = dob.value;
    modalInner.innerHTML = "";
    
    console.log(hbb, name,db);

    

   const html = `
    <div class="submodal-inner">
    <div class="sub-inner">
        <p class="name-output">Your name is: ${name}  </p>
        <p class="age-output">You have live up ${currentYear-db}</p>
        <p class="hobby-output">Your hobby is ${hbb}</p>
        <p class="msg">Hahaha you are too old, you have lived  ${(currentYear-db)*365} days on Earth</p>
    </div>
    <button class="backBtn white blue">BACK</button>

    

</div>
    `;

    modalInner.innerHTML = html;
}

mainButton.addEventListener('click', mainButtonCallback);
formSubmit.addEventListener('click',formSubmitCallBack);