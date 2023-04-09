function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     var res = this.responseText;
     document.getElementById("conteudo").innerHTML = res; 
  }};
  xhttp.open("GET", url , true);
  xhttp.send();
}
