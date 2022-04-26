$(document).ready(function(){
    $("#btn").click(function() {
        $("#myModal").modal();
    });

    //============= HANDLE LOGIC HERE =============//
	
    $("#txtName").blur(checkName);
    $("#txtNum").blur(checkNum);
    $("#txtClb").blur(checkClb);
    $("#txtDate").blur(checkDate);
    $("#txtPhone").blur(checkPhone);
    $('#txtImage').blur(checkImage);


	function validActions(id, iderr, regex, null_str, fail_str)
	{
        var val = $(id).val();
        var errorName = $(iderr);
        if (val == "" || val == null) {
            errorName.html(null_str);
            return false;
        } else if (!regex.test(val)) {
            errorName.html(fail_str);
            return false;
        } else {
            errorName.html("");
            return true;    // return true if username is valid
        }
	}

    function checkName () {
        return validActions(
			"#txtName",
			"#errName",
			/^([A-Z][a-z]+.)+$/,
			"Họ và tên không được để trống!",
			"Họ và tên không hợp lệ!"
		);
    }

    function checkNum () {
        return validActions(
			"#txtNum",
			"#errNum",
			/^\b(0*(?:[1-9][0-9]?|100))\b$/,
			"Số áo không được để trống!",
			"Số áo không hợp lệ!"
		);
    }

    function checkClb () {
        return validActions(
			"#txtClb",
			"#errClb",
			/^([A-Z][a-z]+.)+ [0-9]+$/,
			"Câu lạc bộkhông được để trống!",
			"Câu lạc bộ không hợp lệ!"
		);
    }

    function checkDate () {
		
        var today = new Date();
		today.setHours(0,0,0,0);
		today.setDate(today.getDate() + 7);
        var val = $("#txtDate").val();
		var date = new Date(val);
        var errorName = $("#errDate");
        if (val == "" || val == null) {
            errorName.html("Ngày tập trung không được trống");
            return false;
        } else if (date < today) {
            errorName.html("Ngày tập trung phải cách ngày hiện tại 7 ngày");
            return false;
        } else {
            errorName.html("");
            return true;    // return true if username is valid
        }
    }


    // validation phone
    function checkPhone () {		
        return validActions(
			"#txtPhone",
			"#errPhone",
			/^[0][0-9]{2}\-[0-9]{3}\-[0-9]{4}$/,
			"Số điện thoại không được để trống!",
			"Số điện thoại không hợp lệ!"
		);
    }

    // validation image
    function checkImage () {
		
        return validActions(
			"#txtImage",
			"#errImage",
			/(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/,
			"Hình ảnh không được để trống!",
			"Hình ảnh không hợp lệ!"
		);
    }

    // check submit
    var i = 1;
    $("#btnSave").click(function () {
        var name = $("#txtName").val();
		var num = $("#txtNum").val();
		var clb = $("#txtClb").val();
		var date = $("#txtDate").val();
		var phone = $("#txtPhone").val();
		var image = $('#txtImage').val();

		if (checkName() &&
			checkNum() &&
			checkClb() &&
			checkDate() &&
			checkPhone() &&
			checkImage()
		) {
            var add = "<tr><th scope=`row`>"+ (i++)
				+"</th><td>"+ name
				+"</td><td>"+ num
				+"</td><td>"+ clb
				+"</td><td>"+ date
				+"</td><td>"+ phone
				+"</td><td>"+ image
				+"</td></tr>";
            $("tbody").append(add);
            $("#myModal").modal("hide");
            console.log("Đã bắt sự kiện!");
            return true;
        }else {
			
            $('#message').html('Vui lòng nhập đúng và đầy đủ thông tin!');
            return false;
        }
    });
});