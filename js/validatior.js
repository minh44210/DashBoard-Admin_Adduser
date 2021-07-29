function Validator (){
  this.errors = {
    taiKhoan: "",
    hoTen: "",
    email: "",
    matKhau: ""
  };
}

Validator.prototype.isRequired = function (name, value){
  if (!value){
    this.errors[name] = "Vui lòng nhập thông tin";
    return false;
  }
  return true;
};

Validator.prototype.email = function (name, value){
  if (value.indexOf("@") === -1){
    this.errors[name] = "Email không hợp lệ";
    return false;
  }
  return true;
}

Validator.prototype.password = function (name, value){
  if (!/^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{6,10}$/.test(value)){
    this.errors[name] = "Mật khẩu phải có ký tự đặc biệt 6 - 10 ký tự";
    return false;
  }
  return true;
}

Validator.prototype.hoTen = function (name, value){
  if (!/^[a-zA-Z]/.test(value)){
    this.errors[name] = "Họ Tên phải là chữ";
    return false;
  }
  return true;
}

Validator.prototype.gioLam = function (name, value){
  if (isNaN(value) || value < 80 || value > 200){
    this.errors[name] = "Số giờ làm trong tháng phải từ 80 - 200 giờ";
    return false;
  }
  return true;
}


Validator.prototype.luongCB = function (name, value){
  if (isNaN(value) || value < 1000000 || value > 20000000){
    this.errors[name] = " Lương cơ bản 1,000,000 - 20,000,000";
    return false;
  }
  return true;
}

