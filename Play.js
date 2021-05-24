 import { rbdCheck } from './SelectionLevel.js';


  if (document.readyState != 'loading') {
    rbdCheck.call();
  } else {
    document.addEventListener('DOMContentLoaded', rbdCheck.call());
  } 

  // const chkUno = document.querySelector('#rbUno') 

  //const chkUno = new rbdCheck();

  //console.log('Vaue!', chkUno.ourCheckBox.value, chkUno.ourCheckBox.checked); 

  
  