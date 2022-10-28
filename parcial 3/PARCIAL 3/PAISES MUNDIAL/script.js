let containerFlag = document.getElementById("setFlag");
let containerCountry = document.getElementById("NombrePais"); 
let containerNative = document.getElementById("NombreNativoDePais");
let containerCapital = document.getElementById("NombreCapitalDePais");
let containerRegion = document.getElementById("RegionDePais");
let containerIdioma = document.getElementById("IdiomaDePais");
let containerCoordenadas = document.getElementById("CoordenadasDePais");

function getCountry() {
  getPost()
    .then((data) => data.json())
    .then((country) => {
      getflag(country);
    });
}

function getPost() {
  return fetch("https://restcountries.com/v3.1/all");
}

function getflag(countries) {
containerFlag.innerHTML = "";
  containerCountry.innerHTML = "";
  containerNative.innerHTML="";
  containerCapital.innerHTML="";
  containerRegion.innerHTML="";
  containerIdioma.innerHTML="";
  containerCoordenadas.innerHTML="";

  countries.map((PAISES, i) =>  {

   let flagShow = document.createElement("img");

   flagShow.src = PAISES.flags.png ;
   flagShow.height = "75";
   flagShow.width = "100";
   flagShow.top ="1";
   
   containerFlag.appendChild(flagShow);


    let nameShow = document.createElement("p");
    let nombreNativoShow = document.createElement("p");
    let nombreCapitalShow = document.createElement("p");
    let RegionPaisShow = document.createElement("p");
    let IdiomaPaisShow = document.createElement("p");
    let CoordenadasShow = document.createElement("p")

    nameShow.innerHTML = PAISES.name.common;
    containerCountry.appendChild(nameShow);

    nombreNativoShow.innerHTML = PAISES.name.official;
    containerNative.appendChild(nombreNativoShow);

    nombreCapitalShow.innerHTML= PAISES.capital;
    containerCapital.appendChild(nombreCapitalShow);

    RegionPaisShow.innerHTML = PAISES.region;
    containerRegion.appendChild(RegionPaisShow);
    
    IdiomaPaisShow.innerHTML.name = PAISES.languages;
    containerIdioma.appendChild(IdiomaPaisShow);


    CoordenadasShow.innerHTML = PAISES.maps.googleMaps;
    containerCoordenadas.appendChild(CoordenadasShow);
    
  });
}