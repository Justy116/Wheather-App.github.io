

let btn = document.getElementById("search");
btn.addEventListener("click", function(){
    citta = document.getElementById("input").value;
    if(citta === ""){
        alert("Inserisci la citta")
    }else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=072ef1368665e9e6eb12fba5836ed77d`)
        .then(function(resolve){
            return resolve.json();
        })
        .then(function(json){
            let output = document.getElementById("output");
            let result = document.getElementById("div");
            let information = document.getElementById("information");
            let temp = json.main.temp - 273 | 0;
            let nome = json.name;
            let tempMin = json.main.temp_min - 273 | 0;
            let tempMax = json.main.temp_max - 273 | 0;
            description = json.weather[0].main;
            output.innerHTML = "In " + nome + " there are " + temp + "° degrees";
            information.innerHTML ="temp min: " + tempMin + "°  temp max:" + tempMax + "°";
            result.classList.add("card");
            information.classList.add("information");
        })
        .then(function(){
           document.getElementById("img").innerHTML = "<img class='img' src='assets/"+ description +".svg'> ";
           document.getElementById("img2").innerHTML = "<img class='img2' src='assets/"+ description +".jpg'> ";
        })
        .catch(function(e){
            if(e.message === "Cannot read properties of undefined (reading 'temp')"){
                alert("Citta non trovata")
            }
        })
    }
})
