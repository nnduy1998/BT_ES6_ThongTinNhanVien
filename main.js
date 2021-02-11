document.getElementById("tinhTienLuong").addEventListener("click", function () {
  let nhanVien = {};
  let mangInput = document.querySelectorAll("form input");
  let mangSpan = document.querySelectorAll(".col-6.bg-dark p span");
  let chucVu = document.getElementById("chucVu").value;
  if (checkInput(mangInput) != false) {
    mangInput = [...mangInput, chucVu];
    let tienluong = 0;
    let luongCoBan = "";
    let heSoLuong = "";

    for (let i = 0; i < mangInput.length; i++) {
      if (i <= 3) {
        let theInput = mangInput[i];
        let ten = mangInput[i].name;
        if (i == 2) {
          heSoLuong = theInput.value;
        }
        if (i == 3) {
          luongCoBan = theInput.value;
        }
        tienluong = heSoLuong * luongCoBan;
        nhanVien = { ...nhanVien, [ten]: theInput.value };
        if (tienluong != 0) {
          nhanVien = { ...nhanVien, Lương: tienluong.toLocaleString() };
        }
      } else {
        nhanVien = { ...nhanVien, "Chức vụ": chucVu };
      }
    }
    hienThiTienLuong(mangSpan, nhanVien);
  }
});

function checkInput(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === "") {
      alert("Thông tin không thể bỏ trống !!!");
      return false;
    }
  }
}

function hienThiTienLuong(arr, nhanVien) {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr[0].innerHTML = nhanVien["Mã nhân viên"];
    } else if (i == 1) {
      arr[1].innerHTML = nhanVien["Tên nhân viên"];
    } else if (i == 2) {
      arr[2].innerHTML = nhanVien["Chức vụ"];
    } else {
      arr[3].innerHTML = nhanVien["Lương"];
    }
  }
}
