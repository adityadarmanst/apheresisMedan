$(document).ready(function(){
  //inisialisasi variabel dan DOM
  console.log("Halaman berhasil di load");
  $('.modal').modal({dismissible: false});  
  var btnLogin = $('#btnLogin');
  var btnDaftar = $('#btnDaftar');
  $('#txtEmail').focus();
  //event tombol submit
  btnLogin.click(function(){
    var inputEmail = $('#txtEmail').val();
    var inputPassword = $('#txtPassword').val();
    //periksa form email dan password
    if(inputEmail==""){
      $('#txtEmail').focus();
    }else if(inputPassword==""){
      $('#txtPassword').focus();
    }else{    
    console.log("Data email & password telah dikirim ke server");
    $('#modalLogin').modal('open');
    $.ajax({
      type:'GET',
      dataType : "json",
      url:'http://apheresis.nadha.net/jsonData/loginRoute.php?email='+inputEmail+'&password='+inputPassword, 
      success: function(dataLogin,status) {
        //var dataLogin = $.parseJSON(data);
        console.log("Data email : " + dataLogin.email);
        console.log("Data password : " + dataLogin.password);
        console.log("Status login : " + dataLogin.statusLogin);
        var stLogin = dataLogin.statusLogin;

        if(stLogin=="1"){
            console.log("Berhasil login !!");
            window.location.assign('dasborPendonor.html');
            $('#modalLogin').modal('close');
        }else{
            $('#modalLogin').modal('open');
            $('#isiModal').html("Login gagal. Username/password salah!!<br/><a class='modal-close'>Tutup</a>");
          console.log("Login gagal");
        }

        return true;
      }
    });
         
    }

  });
  
  btnDaftar.click(function(){
    window.location.assign('registrasi.php');
  });
  
  $('#btnTentang').click(function(){
    
  });
  
});