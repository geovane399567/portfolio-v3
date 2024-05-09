const get = document.querySelectorAll('.acordeon .btn')

function openDiv() {

    get.forEach((btn) => {
        btn.addEventListener('click', () => {
           const clickBtn = btn.parentElement
          clickBtn.classList.toggle('open')
           }

        )})
}


//const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');
//
//acordeonTriggers.forEach((trigger) => {
//  trigger.addEventListener('click', (e) => {
//    const acordeon = trigger.parentElement;
//    acordeon.classList.toggle('open'); // Alterna entre 'open' e ''
//  });
//});

//function closeDiv() {
//  get.forEach((btn) => {
//btn.addEventListener('click', () => {
//const clickBtn = btn.parentElement
//const closeDiv = clickBtn.classList.remove('open')
//
//})
//
//  })
//
//}

openDiv()
//closeDiv()

