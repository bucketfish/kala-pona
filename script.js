


// --- functions called from the site itself
function toggleanims(){
  document.body.classList.toggle('notransition');

  setCookie("anims", document.body.classList.contains("notransition"), 365);
}

function toggleeng(){
  document.body.classList.toggle('english');
  setCookie("english", document.body.classList.contains("english"), 365);
}


// --- init

window.onload = function(){

  if (getCookie("anims") == "true"){
    document.body.classList.add("notransition")
  }

  if (getCookie("english") == "true"){
    document.body.classList.add("english")
  }
}



// --- script funcs
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
