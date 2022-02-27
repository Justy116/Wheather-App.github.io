

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
            let temp = json.main.temp - 273 | 0;
            let output = document.getElementById("output");
            let result = document.getElementById("div");
            let nome = json.name;
            description = json.weather[0].main;
            output.innerHTML = "In " + nome + " there are " + temp + "° degrees";
            result.classList.add("card");
            console.log(json)
        })
        .then(function(){
           document.getElementById("img").innerHTML = "<img src='/assets/"+ description +".svg'> ";
        })
        .catch(function(e){
            if(e.message === "Cannot read properties of undefined (reading 'temp')"){
                alert("Citta non trovata")
            }
        })
    }
})
