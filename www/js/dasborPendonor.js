$(document).ready(function(){
          $('.materialboxed').materialbox();
          $('.button-collapse').sideNav();
          $('select').material_select();
          $('.modal').modal();
          
          console.log("Halaman berhasil di load");
          $('#divUtama').html("<div class='progress'><div class='indeterminate'></div></div>");;
          $('#divUtama').load('berandaPendonor.php');
          $('#judulApps').html("Beranda - Apheresis Apps");
          //inisialisasi tombol ke variabel 
          var tblHomeSn = $('#homeSideNav');
          var tblProfile = $('#profileSideNav');
          var tblDonor = $('#donorSideNav');
          var tblRekapDonor = $('#rekapDonorSideNav');
          var tblObrolan = $('#obrolanSideNav');
          var tblLogOut = $('#LogOutSideNav');
          var btnInfoFloat = $('#btnInfoFloat');
          var btnDasborFloat = $('#btnDasborFloat');
  
          function eventTombol(namaTombol){
             console.log("Tombol "+ namaTombol +" di klik!!");
          }
          //event tombol home side di klik
          tblHomeSn.click(function(){
            eventTombol("Dasbor");
            var loading = "<div class='progress'><div class='indeterminate'></div></div>";
            $('#loading').html(loading);
            $('#judulApps').html("Beranda - Apheresis Apps");
            $('#divUtama').load('berandaPendonor.php');
            $('#loading').html("");
          });
          //event tombol profile side di klik
          tblProfile.click(function(){
            eventTombol("Profile");
            var loading = "<div class='progress'><div class='indeterminate'></div></div>";
            $('#judulApps').html("Profil - Apheresis Apps");
            $('#divUtama').html(loading);
            //$('#divUtama').load('profile.php');
            $('.button-collapse').sideNav('hide');

          });
           
          btnDasborFloat.click(function(){
            eventTombol("Dasbor Float");
            var loading = "<div class='progress'><div class='indeterminate'></div></div>";
            $('#loading').html(loading);
            $('#judulApps').html("Beranda - Apheresis Apps");
            $('#divUtama').load('berandaPendonor.php');
            $('#loading').html("");
          });
  
          btnInfoFloat.click(function(){
            eventTombol("Info Float");
            var loading = "<div class='progress'><div class='indeterminate'></div></div>";
            $('#loading').html(loading);
            $('#judulApps').html("Tentang Aplikasi - Apheresis Apps");
            $('#divUtama').load('tentangApps.php');
            $('#loading').html("");
            
          });

          tblLogOut.click(function(){
            eventTombol("LogOut");
            window.location.assign('index.php');
          });
});