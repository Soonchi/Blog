window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition >= 50) {
   document.getElementById('background').style.backgroundColor = 'RGBA( 248, 248, 255, 1 )';
   document.getElementById("header").style.backgroundColor = 'white'
  
  } else {
   document.getElementById('background').style.backgroundColor = '#FF977A';
   document.getElementById("header").style.backgroundColor = '#FF977A'
  }
  })
  
  
  
  
  