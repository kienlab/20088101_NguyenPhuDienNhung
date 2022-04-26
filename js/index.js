$(document).ready(function(){
    $("#btn").click(function() {
        $("#myModal").modal();
    });

    //============= HANDLE LOGIC HERE =============//

    // validation name
    function checkName () {
        var name = $("#txtName").val();
        var errorName = $("#error_name");
        var regexName = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/;
        if (name == "" || name == null) {
            errorName.html("Họ và tên không được để trống!");
            return false;
        } else if (!regexName.test(name)) {
            errorName.html("Họ và tên không hợp lệ!");
            return false;
        } else {
            errorName.html("");
            return true;    // return true if username is valid
        }
    }
    $("#txtName").blur(checkName);

    // validation identity card
    function checkIdentityCard () {
        var identityCard = $("#txtIdentityCard").val();
        var errorIdentityCard = $("#error_identityCard");
        var regexIdentityCard = /^[0-9]{9}$/;
        if (identityCard == "" || identityCard == null) {
            errorIdentityCard.html("Số CMND không được để trống!");
            return false;
        }
        else if (!regexIdentityCard.test(identityCard)) {
            errorIdentityCard.html("Số CMND không hợp lệ!");
            return false;
        }
        else {
            errorIdentityCard.html("");
            return true;
        }
    }
    $("#txtIdentityCard").blur(checkIdentityCard);

    // validation txtProvince
    function checkProvince () {
        var province = $("#txtProvince").val();
        var errorProvince = $("#error_province");
        var regexProvince = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/;
        if (province == "" || province == null) {
            errorProvince.html("Tỉnh/Thành phố không được để trống!");
            return false;
        }
        else if (!regexProvince.test(province)) {
            errorProvince.html("Tỉnh/Thành phố không hợp lệ!");
            return false;
        } else {
            errorProvince.html("");
            return true;    // return true if username is valid
        }
    }
    $("#txtProvince").blur(checkProvince);

    // validation email
    function checkEmail () {
        var email = $("#txtEmail").val();
        var errorEmail = $("#error_email");
        var regexEmail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
        if (email == "" || email == null) {
            errorEmail.html("Email không được để trống!");
            return false;
        }
        else if (!regexEmail.test(email)) {
            errorEmail.html("Email không hợp lệ!");
            return false;
        }
        else {
            errorEmail.html("");
            return true;
        }
    }
    $("#txtEmail").blur(checkEmail);

    // validation phone
    function checkPhone () {
        var phone = $("#txtPhone").val();
        var errorPhone = $("#error_phone");
        var regexPhone = /^[0][0-9]{2}\-[0-9]{3}\-[0-9]{4}$/;
        if (phone == "" || phone == null) {
            errorPhone.html("Số điện thoại không được để trống!");
            return false;
        }
        else if (!regexPhone.test(phone)) {
            errorPhone.html("Số điện thoại không hợp lệ!");
            return false;
        }
        else {
            errorPhone.html("");
            return true;
        }
    }
    $("#txtPhone").blur(checkPhone);

    // validation image
    function checkImage () {
        var image = $("#txtImage").val();
        var regexImage = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
        var errorImage = $("#error_image");
        if (image == "" || image == null) {
            errorImage.html("Hình ảnh không được để trống!");
            return false;
        } else if (regexImage.test(image) == false) {
            errorImage.html("Hình ảnh không hợp lệ!");
            return false;
        } else {
            errorImage.html("");
            return true;    // return true if username is valid
        }
    }
    $('#txtImage').blur(checkImage);

    // check submit
    var i = 1;
    $("#btnSave").click(function () {
        var name = $("#txtName").val();
        var identityCard = $("#txtIdentityCard").val();
        var province = $("#txtProvince").val();
        var email = $("#txtEmail").val();
        var phone = $("#txtPhone").val();
        var image = $("#txtImage").val();
        if (name == '' || identityCard == '' || province == '' || email == '' || phone == '' || image == '') {
            $('#message').html('Vui lòng nhập đúng và đầy đủ thông tin!');
            return false;
        }else {
            var add = "<tr><th scope=`row`>"+ (i++) +"</th><td>"+ name +"</td><td>"+ identityCard +"</td><td>"+ province +"</td><td>"+ email +"</td><td>"+ phone +"</td><td>"+ image +"</td></tr>";
            $("tbody").append(add);
            $("#myModal").modal("hide");
            console.log("Đã bắt sự kiện!");
            return true;
        }
    });
});