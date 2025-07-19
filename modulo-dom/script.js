var p = document.getElementsByTagName("p");

//p

alert(p.length);

alert(p[0].innerHTML);

p[0].innerHTML = "Mudando o texto do primeiro paragrafo";

for (var i = 1; i < p.length; i++) {
  p[i].innerHTML = "Mudando o texto do paragrafo " + i;
}

for (var i = 1; i < 10; i++) {
  p[i++].innerHTML = p[i].innerHTML + i;
}
