burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-classresp');
    navList.classList.toggle('v-classresp');
    navbar.classList.toggle('h-navresp');
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbwyQDZNJx4rirna1Xv_oHnjAD2gFKnAHZOXGe7X9YqudzgLCMJYAomjne1pP6UjLkVyLA/exec'
//https://script.google.com/macros/s/AKfycbylTAlBH5-epM9sWk1cPv-ujH_JLJRQ0MyAWGZ85LU0/dev
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

const btnScrollToTop=document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click",function(){
    window.scrollTo(0,0);
})

const themeSwitch = document.querySelector('input');
themeSwitch.addEventListener('change', () => {
document.body.classList.toggle('dark-theme');
});

const f = document.getElementById('example');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = '';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
