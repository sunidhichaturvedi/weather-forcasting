 aync function weather(c) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=5def61d0bb6e971e8d1c3b912ce3cb05`;
let res= await fetch();
  console. log(res)
  let data=res.json()
  console. log(data)


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
