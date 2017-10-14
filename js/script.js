// event pada saat link
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    console.log(href);
    // tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
   // pindahkan scroll
    $('body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    });
    
});