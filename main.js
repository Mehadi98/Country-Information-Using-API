let input = document.querySelector('input');
let inputButton = document.querySelector('.inputButton');
let inputCountry = document.querySelector('.inputCountry');
let card = document.querySelector('.card');
let back =document.querySelector('.back')

let name = document.querySelector('.name');
let capital = document.querySelector('.capital');
let population = document.querySelector('.population');
let area = document.querySelector('.area');
let callCode = document.querySelector('.callCode');
let courency = document.querySelector('.courency');
let img = document.querySelector('img');


inputButton.addEventListener('click',getInfo)
back.addEventListener('click',backMain)


function getInfo(){

    fetch(`https://restcountries.eu/rest/v2/name/${input.value.trim()}`).
    then( (res)=>  res.json()).
    then((data)=>{
        name.textContent = `Name : ${data[0].name}`
        capital.textContent = `Capital : ${data[0].capital}`
        population.textContent = `Population : ${data[0].population}`
        area.textContent = `Area : ${data[0].area}`
        callCode.textContent = `Call Code : ${data[0].callingCodes}`
        courency.textContent = `Courency : ${data[0].currencies[0].name}`
        inputCountry.style.display ='none'
        card.style.display = 'block'
        img.setAttribute('src',data[0].flag)
    }).
    catch((err)=> alert('Something Wrong'))
}
function backMain(){
    card.style.display = 'none'
    inputCountry.style.display ='block'
    input.value = ''
    
}