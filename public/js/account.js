$(document).ready(function() {
	$(".register_form").click(function() {
		document.querySelector("#label_login").checked = false;
		document.querySelector("#label_register").checked = true;
	});

	$(".back__login").click(function() {
		document.querySelector("#label_register").checked = false;
		document.querySelector("#label_login").checked = true;
	});

	$(".form_register").submit(function(e) {
		e.preventDefault();

		let name = $(".form_name").val();
		let user_name = $(".form_user").val();
		let password = $(".form_password").val();
		let coin = 0;

		if (verifyRegister(name, user_name, password) === true) {
			//kiểm tra tên trùng
			$.post("./Register/checkName", { name: name }, function(response) {
				if (response > 0) {
					$(".error_name").html("Tên của bạn đã tồn tại");
				} else {
					//kiểm tra tài khoản
					$.post("./Register/checkAccount", { user_name: user_name }, function(response) {
						if (response > 0) {
							$(".error_user").html("Tài khoản của bạn đã tồn tại");
						} else {
							$(".error_name").html("");
							$(".error_user").html("");
							$(".error_password").html("");

							//thực hiện đăng ký
							$.post("./Register/postRegister", { name: name, user_name: user_name, password: password, coin: coin }, function(response) {});

							document.querySelector("#label_register").checked = false;
							document.querySelector("#label_login").checked = true;
						}
					});
				}
			});
		}
	});

	//verify register
	function verifyRegister(name, user, password) {
		let check = true;

		if (name.length <= 0) {
			$(".error_name").html("Tên không được để trống");
			check = false;
		} else if (name.length >= 50) {
			$(".error_name").html("Tên của bạn quá dài");
			check = false;
		} else if (name.length <= 3) {
			$(".error_name").html("Tên của bạn quá ngắn");
			check = false;
		}

		if (user.length <= 0) {
			$(".error_user").html("Tài khoản không được để trống");
			check = false;
		} else if (user.length >= 40) {
			$(".error_user").html("Tài khoản của bạn quá dài");
			check = false;
		} else if (user.length < 5) {
			$(".error_user").html("Tài khoản không được dưới 5 ký tự");
			check = false;
		} else if (user.split(" ").length > 1) {
			$(".error_user").html("Tài khoản không được có khoảng trắng");
			check = false;
		}

		if (password.length <= 0) {
			$(".error_password").html("Mật khẩu không được để trống");
			check = false;
		} else if (password.length >= 20) {
			$(".error_password").html("Mật khẩu của bạn quá dài");
			check = false;
		} else if (password.length < 6) {
			$(".error_password").html("Mật khẩu phải trên 5 ký tự");
			check = false;
		}

		return check;
	}

	//đăng nhập
	$(".form_login").submit(function(e) {
		e.preventDefault();

		let user_name = $(".login_user").val();
		let password = $(".login_password").val();

		//thực hiện đăng nhập
		$.post("./DangNhap/login", { user_name: user_name, password: password }, function(response) {
			console.log(response);
			if (response == 1) {
				location.reload();
			} else {
				$(".error_account").html("Tài khoản hoặc mật khẩu không đúng!!!");
			}
		});
	});

	//đăng xuất
	$(".logout").click(function(e) {
		//thực hiện đăng nhập
		$.post("./DangNhap/logout", function(response) {
			location.reload();
		});
	});
});
