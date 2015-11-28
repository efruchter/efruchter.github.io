$(document).ready(function(){

  var navs = '<center>\
  <h1>Eric Fruchter</h1>\
  <canvas class="birdcanvas" width="500" height="100"></canvas>\
  <ul class="horizontal">\
  <li class="titles" id="aboutTitle"><a href="index.html"><h3>About Me</h3></a></li>\
  <li class="titles" id="professionalTitle"><a href="professional.html"><h3>Professional</h3></a></li>\
  <li class="titles" id="hobbyTitle"><a href="hobby.html"><h3>Hobby</h3></a></li>\
  <li class="titles" id="researchTitle"><a href="research.html"><h3>Research</h3></a></li>\
  </ul>\
  </center>';

  $('#navbar').html(navs);

  $("canvas.birdcanvas").click(function(){
    $(this).fadeTo('slow', 0, function() {
      drawBirds(this, true, "#3B3131");
      $(this).fadeTo('slow', 1);
    });
  });

  $("canvas").trigger('click');

  $(".titles").fadeTo('slow', .6);
  $("div.content").hide();
  $("div.content").fadeTo('slow', 1);
});
