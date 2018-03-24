/** $(document).ready(function(){
$('ul.tabs li a:first').addClass('active');
$('.sesiones article').hide();
$('.sesiones article:first').show();


$('ul.tabs li a').click(function(){
	$('ul.tabs li a').removeClass('active');
	$(this).addClass('active');
	$('.sesiones article').hide();

	var activeTab = $(this).attr('href');
	$(activeTab).show();
	return false;

	});
});
**/ 
//funcion para skills
	


$( document ).ready(function() {
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({ target: '.navbar-fixed-top' })
});
 $(document).ready(function(e) {
 $('#menu-topo').hide();
   var menu = false;
  $('.btn-collapse').click(function(event) {
    event.preventDefault();
    $('#menu-topo').toggle('');
      if(menu == true){
        menu = false;
        $(".lista-collapse:nth-child(1)").removeClass('cont');
        $(".lista-collapse:nth-child(2)").removeClass('hidden');
        $(".lista-collapse:nth-child(3)").removeClass('conts');
      }else {
        menu = true;
        $(".lista-collapse:nth-child(1)").addClass('cont');
         $(".lista-collapse:nth-child(2)").addClass('hidden');
        $(".lista-collapse:nth-child(3)").addClass('conts');
      }
  });
 });


var  typed = new Typed ('.white-text', {
	strings:['Me encanta buscar cosas nuevas apasionada por la tecnologia estoy en constante aprendizaje que me lleve mas lejos.','Hola soy Kesly Martinez!','Frontend Developer!'],
	typeSpeed:100,
	backSpeed:100,
	fadeOut:true,
	loop:true,
})
//  boton para ver portafolio

 
     
