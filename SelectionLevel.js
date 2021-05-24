/*Choose to Level*/ 

var check = 0;
var cPress = null;
var ULTIMO_SELECCIONADO = 0;
var valHidden =document.getElementById('hiddenVal');

function checkboxes(press_uno, press_dos, press_tres, press_cuatro){
  this.press_uno = press_uno
  this.press_dos = press_dos
  this.press_tres = press_tres
  this.press_cuatro = press_cuatro
}

class rbdCheck {
    constructor() {
      let ourCheckBox = null;
      this.ourCheckBox = document.querySelector('#rbUno')

      let ourCheckBox2 = null;
      this.ourCheckBox2 = document.querySelector('#rbDos')

      let ourCheckBox3 = null;
      this.ourCheckBox3 = document.querySelector('#rbTres')

      let ourCheckBox4 = null;
      this.ourCheckBox4 = document.querySelector('#rbCuatro')

      //this.valHidden = document.getElementById('hiddenVal')

      // let checkEvent = new Event('change');

      this.eventHandler = function(e) {
        console.log("Event occurred on checkbox! Type:", e.type, this.ourCheckBox.checked, this.ourCheckBox.value)

        if (this.ourCheckBox.checked === true){
          this.ourCheckBox2.checked = false;
          this.ourCheckBox3.checked = false;
          this.ourCheckBox4.checked = false;
        } else if (this.ourCheckBox2.checked === true){
          this.ourCheckBox.checked = false;
          this.ourCheckBox3.checked = false;
          this.ourCheckBox4.checked = false;
        } else if (this.ourCheckBox3.checked === true){
          this.ourCheckBox2.checked = false;
          this.ourCheckBox.checked = false;
          this.ourCheckBox4.checked = false;
        } else if (this.ourCheckBox4.checked === true) {
          this.ourCheckBox2.checked = false;
          this.ourCheckBox.checked = false;
          this.ourCheckBox3.checked = false;
        }


        /*console.log("Event occurred on checkbox! Type:", e.type, this.ourCheckBox2.checked, this.ourCheckBox2.value)
          console.log("Event occurred on checkbox! Type:", e.type, this.ourCheckBox3.checked, this.ourCheckBox3.value)
          console.log("Event occurred on checkbox! Type:", e.type, this.ourCheckBox4.checked, this.ourCheckBox4.value) */ 
        //check
        
         cPress = new checkboxes(this.ourCheckBox.value, this.ourCheckBox2.value, this.ourCheckBox3.value, this.ourCheckBox4.value)
         
        //console.log('push Array', cPress);
        this.foreachCircular()

      }      
     
     
      this.ourCheckBox.addEventListener('change', function(e) {         
        this.eventHandler(e);            
      }.bind(this), true);

      this.ourCheckBox2.addEventListener('change', function(e) {         
        this.eventHandler(e);            
      }.bind(this), true);

      this.ourCheckBox3.addEventListener('change', function(e) {         
        this.eventHandler(e);            
      }.bind(this), true);

      this.ourCheckBox4.addEventListener('change', function(e) {         
        this.eventHandler(e);            
      }.bind(this), true);


      /* this.ourCheckBox.addEventListener('click', function(e) {         
        this.eventHandler(e);            
      }.bind(this), true); */

      //this.foreachCircular = this.foreachCircular.bind(this)
      //this.foreachCircular()

    }


   foreachCircular(){
    //const cPress = [this.ourCheckBox.value, this.ourCheckBox2.value, this.ourCheckBox3.value, this.ourCheckBox4.value]        
        for (let ch = 0; ch < checkboxes.length; ch++) {
          //console.log('count', ch, checkboxes);          
          const element = this.verificarNivelDeJuego(ch);
          if (element > 0) {            
              //ULTIMO_SELECCIONADO = element;
              valHidden.value = element;
              console.log('ULTIMO', valHidden);          
                     
          }
        }      
    }
    
    verificarNivelDeJuego(value) {
      //console.log('val', value);
      switch (value) {
        case 0:
          if (this.ourCheckBox.checked === true) {
            return  check = this.ourCheckBox.value
          }
          
        case 1:
          if (this.ourCheckBox2.checked === true) {
            return  check = this.ourCheckBox2.value
            }           
          
        case 2:
          if (this.ourCheckBox3.checked === true) {
            return  check = this.ourCheckBox3.value
          }           
        case 3:
          if (this.ourCheckBox4.checked === true) {
            return  check = this.ourCheckBox4.value
          }          
        default:
          return 0;  
       
      }
    }


  }

  var init = function() {
      const checkIt = new rbdCheck();      
    }

  if (document.readyState != 'loading') {
    init;
    
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  


  /*Hasta aqui lo dejo*/

  const celeste = document.getElementById('celeste')
  const violeta = document.getElementById('violeta')
  const naranja = document.getElementById('naranja')
  const verde = document.getElementById('verde')
  const btnEmpezar = document.getElementById('btnEmpezar')
  


  

  var ULTIMO_NIVEL = 0;//+valHidden.value;
  /*console.log('ULTIMO_NIVEL', ULTIMO_NIVEL);*/


  class Juego {
    constructor() {
      this.inicializar = this.inicializar.bind(this)
      this.inicializar()
      
      if (ULTIMO_NIVEL == 0) {
        swal('English', 'Debe seleccionar un Nivel!', 'warning')
        .then(this.inicializar)
      }

      this.generarSecuencia()
      setTimeout(this.siquienteNivel, 500)
    }

    inicializar() {
      ULTIMO_NIVEL = +valHidden.value
      console.log('ULTIMO_NIVEL', ULTIMO_NIVEL);

      this.siquienteNivel = this.siquienteNivel.bind(this)
      this.elegirColor = this.elegirColor.bind(this)
      this.toggleBtnEmpezar()          
      this.nivel = 1
      this.colores = {
        celeste,
        violeta,
        naranja,
        verde
      }
    }

    toggleBtnEmpezar() {
      if (btnEmpezar.classList.contains('hide')) {
        btnEmpezar.classList.remove('hide')
      } else {
        btnEmpezar.classList.add('hide')
      }
    }
    
    generarSecuencia() {
      this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siquienteNivel() {
      this.subnivel = 0
      this.iluminarSecuencia()
      this.agregarEventosClick()
    }

    transformarNumeroAColor(numero) {
      switch (numero) {
        case 0:
          return 'celeste'
        case 1:
          return 'violeta'
        case 2:
          return 'naranja'
        case 3:
          return 'verde'        
        
      }
    }

    transformarColorANumero(color) {
      switch (color) {
        case 'celeste':
          return 0
        case 'violeta':
          return 1
        case 'naranja':
          return 2
        case 'verde':
          return 3        
        
      }

    }

    iluminarSecuencia() {
      for (let i = 0; i < this.nivel; i++) {
        const color = this.transformarNumeroAColor(this.secuencia[i]);
        setTimeout(() => this.iluminarColor(color), 1000 * i)
      }
    }

    iluminarColor(color) {
      try {
         this.colores[color].classList.add('light')
         setTimeout(() => this.apagarColor(color), 350)
      } catch (error) {
        console.log('Debe seleccionar un Nivel!', error);
      }
         
      
    }

    apagarColor(color) {
      this.colores[color].classList.remove('light')
    }

    agregarEventosClick() {
      this.colores.celeste.addEventListener('click', this.elegirColor)
      this.colores.verde.addEventListener('click', this.elegirColor)
      this.colores.violeta.addEventListener('click', this.elegirColor)
      this.colores.naranja.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick () {
      this.colores.celeste.removeEventListener('click', this.elegirColor)
      this.colores.verde.removeEventListener('click', this.elegirColor)
      this.colores.violeta.removeEventListener('click', this.elegirColor)
      this.colores.naranja.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev) {
      const nombreColor = ev.target.dataset.color
      const numeroColor = this.transformarColorANumero(nombreColor)
      this.iluminarColor(nombreColor)
      if (numeroColor === this.secuencia[this.subnivel]) {
        this.subnivel++
        if (this.subnivel === this.nivel) {
          this.nivel++
          this.eliminarEventosClick()
          if(this.nivel === (ULTIMO_NIVEL + 1)){
            this.ganoElJuego()
          } else {
            setTimeout(this.siquienteNivel, 1500)
          }
        }
      } else {
        this.perdioElJuego()
      }
    }

    

    ganoElJuego() {
      /*Read file Json with fetch */

      var sQuestion, sAnswer = "";
      
      var jsonData = [
        {IdQuestion: 8, IdNivel: 4, Qustion: "Adverbs of frequency, do you ____ has a dreamy ilusion infinity, ", Answer: "ever"},
        //{IdQuestion: 5, IdNivel: 3, Qustion: "Where´s the Boulder Beach", Answer: "Located on the False Bay Coastline, south africa"},
        {IdQuestion: 4, IdNivel: 2, Qustion: "The future with be going to, create a sentence using word Madagascar", Answer: "I´m going to go Madagascar"},
       // {IdQuestion: 7, IdNivel: 4, Qustion: "¿What is name of the place where create a dreamy ilusion of infinity?", Answer: "Salar de Uyuni"},
        {IdQuestion: 6, IdNivel: 3, Qustion: "Contable and Uncontable, write the correct noun, ¿there is ____ water in Boulder Beach?", Answer: "much"},
        {IdQuestion: 1, IdNivel: 1, Qustion: "Where´s the Antelope Canyon", Answer: "in the American Southwest"}
       // {IdQuestion: 2, IdNivel: 1, Qustion: "How does it traslate the Navejo name Antelope Canyon", Answer: "it´s Navajo name the place where runs through rocks"},
        //{IdQuestion: 3, IdNivel: 2, Qustion: "Which is the Continent separated for water of Madagascar", Answer: "the Continent Africa"}

      ]

      for (var i=0; i<jsonData.length; i++){
            
            //const rndInt = Math.floor(Math.random() * 2) + 1
            //console.log('RAnDOM', rndInt)
            if (ULTIMO_NIVEL === jsonData[i].IdNivel) {
              console.log('Question', jsonData[i].Qustion); 
              sQuestion = jsonData[i].Qustion;
              sAnswer = jsonData[i].Answer
            }
        
     }

      /*fetch('./Ejercicios.json')
        .then(response => response.json())
        .then(obj => console.log(obj)) 

      
         var mydata = [];
         
         fetch('./Ejercicios.json')
            .then(function(resp) {              
              return resp.json();
            })
            .then(function(data) {
              mydata.push(data);
              //data.forEach(obj => {
              //  Object.entries(obj).forEach(([key, value]) => {
              //      console.log(`${key} ${value}`);                    
              //  });
              //      console.log('-------------------');
              //});
              
            });  */  

      //let pregunta = 'how speack english fast'
      /*swal('English', 'Felicitaciones, ganastes el juego!', 'success')
      .then(this.inicializar)*/
      swal('Congratulations, you winner! what do you want to do?', {
        buttons: {
          cancel: "Run away!",
          catch: {
            text: "Answer question!",
            value: "catch",
          }
          // defeat: true,
        },
      })
      .then((value) => {
         switch (value) {

           /*case "defeat":
             swal('English', 'I going to study more!', 'warning')
             .then(this.inicializar)
             break;*/

           case "catch":
             swal(`${sQuestion}:`,{
               content: 'input',
             }) 
             .then((value) => {
               if(value == sAnswer){
                swal({
                  title: "Good job!",
                  text: `You type: ${value}, response ${sAnswer}`,
                  icon: "success",
                  button: true,
                });
               }else{
                swal({
                  title: "Bad Answer!",
                  text: `You type: ${value}, response ${sAnswer}`,
                  icon: "error",
                  buttons: true,
                  dangerMode: true,
                });
               }
               //swal(`You type: ${value}`);
             })
             .then(this.inicializar)
             break;
         
           default:
              swal('English', 'I going to study more!', 'warning')
             .then(this.inicializar)
         }
      });
    }

    
    perdioElJuego() {
      swal('English', 'Lo lamentamos, perdistes :(', 'error')
      .then(() => {             
         this.eliminarEventosClick()
         this.inicializar() 
      })
    }

  }

  function empezarJuego() {
    var juego = new Juego()       
  }

 
