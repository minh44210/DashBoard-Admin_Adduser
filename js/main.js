function NhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  gioLam,
  ngayLam,
  luongCB,
  chucVu,
  tongLuong,
  xepLoai
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.chucVu = chucVu;
  this.tongLuong = tongLuong;
  this.xepLoai = xepLoai;
  this.luongCB = luongCB;
  this.gioLam = gioLam;
}
// TÍNH TỔNG LƯƠNG
NhanVien.prototype.tinhTL = function () {
  var sep = document.getElementById("sep");
  var truongPhong = document.getElementById("truongPhong");
  // return(this.luongCB * 3)
  return this.luongCB * 3;
};

// XEP LOẠI
NhanVien.prototype.xepL = function () {
  if (this.gioLam >= 192) {
    return "Nhân viên xuất sắc";
  }
  if (this.gioLam >= 176) {
    return "Nhân viên giỏi";
  }
  if (this.gioLam >= 160) {
    return "Nhân viên khá";
  }
  if (this.gioLam <= 159) {
    return "Nhân viên trung bình";
  }
};

// DOM TỚI ID
document.getElementById("btnThemNV").addEventListener("click", themNgDung);
document.getElementById("tableDanhSach").addEventListener("click", deleTable);
document.getElementById("btnCapNhat").addEventListener("click", capNhat);
document.getElementById("btnTimNV").addEventListener("click", timKiem);
var dsnv = [];

// Nhấn nút thêm

function themNgDung() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var chucVu = document.getElementById("chucvu").value;
  var luongCB = document.getElementById("luongCB").value;
  var gioLam = document.getElementById("gioLam").value;

  var validator = new Validator ();
  var isValid = validator.isRequired("tbTKNV", taiKhoan) && validator.taiKhoan("tbTKNV", taiKhoan); 
  isValid &= validator.isRequired("tbTen", hoTen) && validator.hoTen("tbTen", hoTen);
  isValid &= validator.isRequired("tbEmail", email) && validator.email("tbEmail", email);
  isValid &= validator.isRequired("tbMatKhau", matKhau) && validator.password("tbMatKhau", matKhau);
  isValid &= validator.isRequired("tbNgay", ngayLam);
  isValid &= validator.isRequired("tbChucVu", chucVu);
  isValid &= validator.isRequired("tbLuongCB", luongCB) && validator.luongCB("tbLuongCB", luongCB);
  isValid &= validator.isRequired("tbGiolam", gioLam) && validator.gioLam("tbGiolam", gioLam);
  // Duyệt onject   
  if (!isValid){
    for(var key in validator.errors){
      if(validator.errors[key]){
        document.getElementById(key).innerHTML = validator.errors[key];
      }
    }
    return;
  }

  // Tạo object mới để hiển thị
  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    gioLam,
    ngayLam,
    luongCB,
    chucVu
  );

  console.log(nhanVien);
  dsnv.push(nhanVien);

  hienThi();
}
// Cập nhật nhân viên

function capNhat() {
  var taiKhoan = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var chucVu = document.getElementById("chucvu").value;
  var luongCB = document.getElementById("luongCB").value;
  var gioLam = document.getElementById("gioLam").value;

  var nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    gioLam,
    ngayLam,
    luongCB,
    chucVu
  );
  dsnv = dsnv.map(function (nv) {
    if (nv.taiKhoan === taiKhoan) {
      return nhanVien;
    }
    return nv;
  });
  hienThi();
}
// Hiển thị UI
function hienThi() {
  var tbody = document.getElementById("tableDanhSach");
  var html = "";
  for (var i = 0; i < dsnv.length; i += 1) {
    var nv = dsnv[i];
    html += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
             <td>${nv.email}</td>
             <td>${nv.ngayLam}</td>
             <td>${nv.chucVu}</td>
             <td>${nv.tinhTL()}</td>
             <td>${nv.xepL()}</td>

            
             <td>   
             <buton data-manv="${
               nv.taiKhoan
             }" class="btn btn-danger">Delete</buton>

             </td>
         </tr>
         `;
  }
  tbody.innerHTML = html;
}
// XÓA NHÂN VIÊN
function deleTable(event) {
  console.log(event.target);

  var taiKhoan = event.target.getAttribute("data-manv");
  console.log(taiKhoan);

  dsnv = dsnv.filter(function (nv) {
    return nv.taiKhoan !== taiKhoan;
  });

  hienThi();
}

// Tìm Nhân Viên
function timKiem() {
 var search = document.getElementById("searchName").value;

 
 dsnv = dsnv.filter(function (nv) {
   return nv.xepL().indexOf(search) !== -1
 })
 hienThi()
}
