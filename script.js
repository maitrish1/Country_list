let countryName=document.getElementById('input-country')
let submitCountry=document.getElementById('submit-country')
let listCountry=document.querySelector('.show-data')
let list=[]
submitCountry.addEventListener('click', e=>{
    let countryNameValue=countryName.value
    e.preventDefault()
    console.log(countryNameValue)
    getData(countryNameValue)
})

async function getData(countryNameValue){
    console.log('inside getdata  '+countryNameValue)
    let value=await fetch(`http://universities.hipolabs.com/search?country=${countryNameValue}`)
    const data=await value.json()
    for(let item of data){
       listCountry.innerHTML+=
       `<div class='card'>
       <h5 id='card-country'>${item.name}</h5>
       <h5 id='card-site'>${item.web_pages}</h5> `
    }
}