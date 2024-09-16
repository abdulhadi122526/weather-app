
const card = document.querySelector('.wcard')
const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener("click", (event)=>{
    btn.innerHTML = "searching..."
    fetch(`https:api.weatherapi.com/v1/current.json?key=aa07b1525f9f4fa6926171943241509&q=${input.value}&aqi=no`)
    .then(res => res.json())
    .then((res)=>{
        console.log(res);
        card.innerHTML = `
        <div class="subcard bg-white rounded-4 border border-1">
        <h3 class="ps-3 pt-2">${res.location.name}</h3>
                <p class="ps-3">${res.location.localtime},${res.location.country}</p>
                <p style="font-size:75px;" class="ps-3">${res.current.temp_c}°C </p>
                <p class="ps-3">${res.current.condition.text}</p>
                <img id="wimg" class="w-25 " src="${res.current.condition.icon}" alt="weatherImg">
                </div>            
                
            `  
        btn.innerHTML = "search"
    })
        .catch((err)=>{
        alert("No such city")
        btn.innerHTML = "search"
        
    })
})























