
const onButton = document.querySelector('.btn-on');
const listHolder = document.querySelector('.list__wrap');
const clickOff = document.querySelector('.click__off')
const inputData = document.querySelectorAll('input');
const submitButton = document.querySelector('.btn-off');
const resultAppear = document.querySelector('.final');

console.log(resultAppear);

const newElement = (name, surname, email) => {
  const newElement = document.createElement('li');
  newElement.innerHTML = 
  ` 
  <div class="inner">                    
  <div class="item"><p>${name}</p></div>
  <div class="item"><p>${surname}</p></div>
  <div class="item"><p>${email}</p></div>
  </div>
  `
  resultAppear.classList.add('visible');
  const toAppend = document.querySelector('.result ul');
  toAppend.append(newElement);

};


const onButtonUp = () => {
  onButton.classList.toggle('btn-up');
  listUppear();
  offButtonAppear();
}

const listUppear = () => {
  listHolder.classList.toggle('visible');
}

const offButtonAppear = () => {
  clickOff.classList.toggle('visible');
}

// ------------------- Submit ---------------- //

const userData = [];

const validateData = () => {

  const nameInp = inputData[0].value;
  const surnameInp =  inputData[1].value;
  const emailInp = inputData[2].value;
  
if(
  nameInp === '' ||
  surnameInp === '' ||
  emailInp === ''  
  ) {
    alert("please your input cann't be empty");
    return;
  } else {

    const dataLog = {
      name: nameInp,
      surname: surnameInp,
      email: emailInp
    }

  userData.push(dataLog);
  console.log(userData);
  clearLog();
  newElement(dataLog.name, dataLog.surname, dataLog.email);
  }


  
};

const clearLog = () =>{
  for (const userInput of inputData){
    userInput.value = '';
  }
}





onButton.addEventListener('click', onButtonUp)
submitButton.addEventListener('click', validateData);


  



