$(document).ready(function() {
  $('.core').load("core.html", function() {
    $(".core #fadein").delay(900).animate({"opacity": "1"}, 700);
    $("footer").delay(900).animate({"opacity": "1"}, 700);
  });
  $('.core-static').load("core-static.html");
  $("#construction").delay(300).animate({"opacity": "1"}, 700);
  $("#brian").delay(200).animate({"opacity": "1"}, 700);
  $("#about").delay(200).animate({"opacity": "1"}, 700);
  $(".form-container").delay(200).animate({"opacity": "1"}, 700);
  $("#background").delay(200).animate({"opacity": "1"}, 700);

  // show menu on button click
  $(document).delegate('.menu', 'click', function(event) {
		$(this).addClass('open');
		event.stopPropagation();
	});

  // hide menu when clicking on body (outside of menu)
	$(document).delegate('body', 'click', function(event)  {
		$('.menu').removeClass('open');
	});

  // hide menu when click on `x`
	$(document).delegate('.cls', 'click', function(event) {
		$('.menu').removeClass('open');
		event.stopPropagation();
	});
  function openGallery(id) {
  closeAll();
  const gallery = document.getElementById('gallery-'+id);
  const card = document.getElementById('card-'+id);
  gallery.classList.add('Gallery--active');
  card.classList.add('Card--active');
}

function closeAll() {
  const galleryActv = document.querySelector('.Gallery--active');
  const cardActv = document.querySelector('.Card--active');
  if (galleryActv) {
    galleryActv.classList.remove('Gallery--active');
  }
  if (cardActv) {
    cardActv.classList.remove('Card--active');
  }
}
});
