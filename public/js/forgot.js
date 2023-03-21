$(document).ready(function() {
   function changedCapcha() {
      //các số và từ
      var permitted_chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      var code = "";
      for (var i = 0; i < 5; i++) {
         //tạo random
         var randomCode = permitted_chars.charAt(Math.floor(Math.random() * permitted_chars.length));

         //nối chuỗi
         code = code + randomCode;
      }

      if (document.querySelector(".capcha")) {
         document.querySelector(".capcha").value = code;
      }
   }

   changedCapcha();

   $(".icon__changed").click(function(data) {
      changedCapcha();
   });

   $(".forget_submit").click(function(data) {
      let email = $(".recovery__Email").val();
      let capchaNew = $(".capcha").val();
      let confirmCapcha = $(".verification_inout").val();

      if (confirmCapcha === capchaNew) {
         $.post("./ForgotPassword/recovery", { email: email }, function(data) {
            $(".Register--Error").html(data);
         });
      } else {
         changedCapcha();
         $(".Register--Error").html("Mã xác nhận không chính xác.");
      }
   });

   $(".back__login--fromforget").click(function() {
      document.querySelector("#label_forget").checked = false;
      document.querySelector("#label_login").checked = true;
   });

   $(".forget_form").click(function() {
      document.querySelector("#label_login").checked = false;
      document.querySelector("#label_forget").checked = true;
   });
});
