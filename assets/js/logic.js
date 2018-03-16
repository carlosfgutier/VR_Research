


// RESULTS SECTION
//---------------------------------------------//
$('#results').on('mouseover', function(event) {
	$('#bar11').css('max-height', '45%');
	$('#bar21').css('max-height', '35%');
	$('#bar31').css('max-height', '68%');
	$('#bar41').css('max-height', '85%');
	$('#bar11, #bar21, #bar31, #bar41').css('transition', 'all 1s ease-in-out');

	$('#bar12').css('max-height', '80%');
	$('#bar22').css('max-height', '79%');
	$('#bar32').css('max-height', '90%');
	$('#bar42').css('max-height', '70%');
	$('#bar12, #bar22, #bar32, #bar42').css('transition', 'all 0.7s ease-in-out');

});

$('#results').on('mouseout', function(event) {
	$('#bar11').css('max-height', '0%');
	$('#bar21').css('max-height', '0%');
	$('#bar31').css('max-height', '0%');
	$('#bar41').css('max-height', '0%');

	$('#bar12').css('max-height', '0%');
	$('#bar22').css('max-height', '0%');
	$('#bar32').css('max-height', '0%');
	$('#bar42').css('max-height', '0%');
});

$('#graph1').hover(hoverInGraph1, hoverOutGraph1);

$('#graph2').hover(hoverInGraph2, hoverOutGraph2);

function hoverInGraph1() {
	$('#graphInfoSection').html('<p>I added this with javascript</p>');
};

function hoverOutGraph1() {
		$('#graphInfoSection').html('<p style="color: white"> hi </p>');
};

function hoverInGraph2() {
	$('#graphInfoSection').html('<p>I added this with javascript for the second graph, the one on depression</p>');
};

function hoverOutGraph2() {
		$('#graphInfoSection').html('<p style="color: white"> hi </p>');
};