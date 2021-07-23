function NhanVien(taiKhoan, hoTen, email, matKhau, gioLam, ngayLam, luongCB, chucVu, tongLuong, xepLoai) {
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

document.getElementById('btnThemNV').addEventListener("click", themNgDung)

var dsnv = []

function themNgDung (){
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var chucVu = document.getElementById("chucvu").value;
    var luongCB = document.getElementById("luongCB").value;
    var gioLam = document.getElementById("gioLam").value;

    var nhanVien = new NhanVien(taiKhoan, hoTen, email, matKhau, gioLam, ngayLam, luongCB, chucVu)
    
    console.log(nhanVien);
    dsnv.push(nhanVien)

    hienThi()
}

function hienThi () {
    var tbody = document.getElementById('tableDanhSach')
    var html = ""
    for (var i = 0; i < dsnv.length; i += 1){
        var nv = dsnv[i];
        html += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
             <td>${nv.email}</td>
             <td>${nv.ngayLam}</td>
             <td>${nv.chucVu}</td>

            
             <td>
             <buton class="btn btn-primary">Update</buton>
             <buton onclick="xoaNhanVien()" class="btn btn-danger">Delete</buton>

             </td>
         </tr>
         `
    }
    tbody.innerHTML = html
}

function xoaNhanVien () {
    alert("xoaNhanVien")
}