<form action="" method="post" class="form form_forget">
    <div class="container_login container_forget">
        <h1 class="title">QUÊN MẬT KHẨU</h1>
       <div>
            <p>Nhập email:</p>
            <input type="text" value="" id="email" class="form_input form_user recovery__Email"
                placeholder=" Nhập email mà bạn đã đăng ký." name="user_name">
        </div>
        <div>
            <p>Mã Capcha:</p>
            <div class="form_capcha">
                <input type="text" value="" class="form_input verification_inout"
                    placeholder="Nhập mã xác thực." name="user_name">
                <input type="text" class="capcha"></input>
                <i class="icon__changed fa-sharp fa-solid fa-arrow-rotate-right"></i>
            </div>

        </div>
        <div>
            <p class="Register--Error"></p>
        </div>
        <div>
            <input type="button" value="Khôi phục" class="forget_submit button_form">

            <p class="back__login--fromforget">
                <i class="fa-solid fa-rotate-left"></i>
                Trở về đăng nhập
            </p>
        </div>
    </div>
</form>
