$(document).ready(function() {
   $(".play_audio").click(function() {
      document.querySelector(".my_audio").play();
      document.querySelector(".play_audio").style.display = "none";
      document.querySelector(".pause_audio").style.display = "block";
      console.log("zxc");
   });

   $(".pause_audio").click(function() {
      document.querySelector(".my_audio").pause();
      document.querySelector(".pause_audio").style.display = "none";
      document.querySelector(".play_audio").style.display = "block";
   });
});
