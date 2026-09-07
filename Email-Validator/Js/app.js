console.log("This is my script");
let btn = document.querySelector(".btn");
let results = {
  tag: "",
  free: true,
  role: false,
  user: "princekamriya321",
  email: "princekamriya321@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};
btn.addEventListener("click", async(e) => {
    e.preventDefault();
  console.log("clicked");
  resultCont.innerHTML = `<img width="233" src="/Email-Validator/img/loading.svg" alt="loading img"/>`
let email = document.getElementById("username").value;
key = "ema_live_PSs5OE2pPRCF2ia0RkAqSkriIkiGqCRAO5hjDxsx";
let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
let res = await fetch(url);
let result = await res.json()
let str = ``;
for (let key of Object.keys(result)) {
    if(result[key] !== "" && result[key] !== " "){
        str = str + `<div> ${key}: ${result[key]}</div>`;
    }
}

console.log(str);

resultCont.innerHTML = str;

});
