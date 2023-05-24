window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.getElementById("search_up_2").style.top = "0";
  } else {
    document.getElementById("search_up_2").style.top = "-90px";
  }
}