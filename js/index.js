$(document).ready(function () {
  let i = 2; // Khởi tạo số thứ tự
  $("#btnDK").click(function () {
    $("#myModal").modal();
  });
  //   kiem tra ma
  function kiemtrama() {
    let maukt = /^[0-9]{10}$/;
    let chuoi = $("#txtMASV").val();
    if (chuoi == "") {
      $("#tbMASV").html("Bắt buộc nhập");
      return false;
    } else if (!maukt.test(chuoi)) {
      $("#tbMASV").html("Nhập sai, chỉ dùng 10 chữ số");
      return false;
    } else {
      $("#tbMASV").html("*");
      return true;
    }
  }
  $("#txtMASV").blur(kiemtrama);
  //   kiem tra ho ten
  function kiemtrahoten() {
    let chuoi = $("#txtHOTEN").val();
    let maukt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if (chuoi == "") {
      $("#tbHOTEN").html("Bắt buộc nhập");
      return false;
    } else if (!maukt.test(chuoi)) {
      $("#tbHOTEN").html("Ký tự đầu tiên viết hoa, không sử dụng số");
      return false;
    } else {
      $("#tbHOTEN").html("*");
      return true;
    }
  }
  $("#txtHOTEN").blur(kiemtrahoten);
  //   kiem tra ngay
  function kiemtrangay() {
    if ($("#txtNGAY").val() == "") {
      $("#tbNGAY").html("Bat buoc nhap!!");
      return false;
    }
    let day = new Date($("#txtNGAY").val());
    let today = new Date();
    today.setDate(today.getDate() + 7);
    if (day < today) {
      $("#tbNGAY").html("*Nhap ngay sau ngay hien hanh 7 ngay");
      return false;
    }
    $("#tbNGAY").html("*");
    return true;
  }
  $("#txtNGAY").blur(kiemtrangay);
  // kiem tra so dien thoai
  function kiemtraSDT() {
    let maukt = /^[0-9]{4}\-\d{3}\-\d{3}$/;
    if ($("#txtSDT").val() == "") {
      $("#tbSDT").html("Bat buoc nhap!!");
      return false;
    }
    if (!maukt.test($("#txtSDT").val())) {
      $("#tbSDT").html("Nhap theo dang 000-0000-000");
      return false;
    }
    $("#tbSDT").html("*");
    return true;
  }
  $("#txtSDT").blur(kiemtraSDT);
  //   kiem tra email
  function kiemtraemail() {
    let chuoi = $("#txtEMAIL").val();
    let maukt = /^\w+([\.-]?w+)*@iuh.edu.vn$/;
    if (chuoi == "") {
      $("#tbEMAIL").html("Bắt buộc nhập");
      return false;
    } else if (!maukt.test(chuoi)) {
      $("#tbEMAIL").html("Nhập sai mẫu, nhập theo mẫu xxxxx@iuh.edu.vn");
      return false;
    } else {
      $("#tbEMAIL").html("*");
      return true;
    }
  }
  $("#txtEMAIL").blur(kiemtraemail);
  //
  $("#btnSubDK").click(function () {
    if (
      kiemtrama() == true &&
      kiemtrahoten() == true &&
      kiemtrangay() == true &&
      kiemtraemail() == true &&
      kiemtraSDT() == true
    ) {
      let masv = $("#txtMASV").val();
      let hoten = $("#txtHOTEN").val();
      let ngay = $("#txtNGAY").val();
      let sdt = $("#txtSDT").val();
      let email = $("#txtEMAIL").val();

      let them =
        "<tr><td>" +
        i++ +
        "</td><td>" +
        masv +
        "</td><td>" +
        hoten +
        "</td><td>" +
        ngay +
        "</td><td>" +
        email +
        "</td><td>" +
        sdt +
        "</td><td>" +
        $("table tbody").append(them);
      $("#myModal").modal("hide");
      return true;
    }
  });
});
