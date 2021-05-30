var slid = 1;
showDivs(slid);
function plausDiv(n) {
  showDivs((slid += n));
}
function showDivs(n) {
  "use strict";
  var h;
  var o = document.getElementsByClassName("test");
  if (n > o.length) {
    slid = 1;
  }
  if (n < 1) {
    slid = o.length;
  }
  for (h = 0; h < o.length; h++) {
    o[h].style.display = "none";
  }
  o[slid - 1].style.display = "block";
}
/////////////////////////////////////////////////////
function myfun() {
  "use strict";
  //var
  var butt1,
    butt2,
    butt3,
    butt3,
    butt4,
    butt5,
    butt6,
    butt7,
    butt8,
    butt9,
    mydiv,
    myspan,
    sub;
  //send
  butt1 = document.getElementById("but1");
  butt2 = document.getElementById("but2");
  butt3 = document.getElementById("but3");
  butt4 = document.getElementById("but4");
  butt5 = document.getElementById("but5");
  butt6 = document.getElementById("but6");
  butt7 = document.getElementById("but7");
  butt8 = document.getElementById("but8");
  butt9 = document.getElementById("but9");
  ////////////////////////////////////////
  mydiv = document.getElementById("fater");
  myspan = document.getElementById("close");
  sub = document.getElementById("submit");
  //animation
  butt1.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt2.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt3.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt4.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt5.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt6.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt7.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt8.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  butt9.onclick = function () {
    "use strict";
    mydiv.style.display = "block";
  };
  myspan.onclick = function () {
    "use strict";
    mydiv.style.display = "none";
  };
  sub.onclick = function () {
    alert("you'r respond accipt");
  };
}
myfun();

///////////////////////////////////////////////////////
