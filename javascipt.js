 aync function weather(c) {
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${c}&appid=5def61d0bb6e971e8d1c3b912ce3cb05`;
let res= await fetch();
  console. log(res)
  let data= await res.json()
  console. log(data)
  if(data.cod=='404')
  {
window. alert("enter again");
   document. querySelector("search>input").value="";
main.style.display="none";
  }
  else{
   
temp. innerHTML=math.round(data.main.temp);
city.innerHTML=data.name;
  wind.innerHTML=data.wind. speed+"km/hr";
  humidity. innerHTML=data. main.humidity+"%";
   main.style. display="block";
  }
}

var search = () => {
  let n = document.querySelector("#search>input");
  if (n.value.trim() == "") {
    window.alert("please enter the city name");
  } else {
    cn = n.value;
    //window.alert(cn);
    weather(cn);
  }
};
