$('#hypothesis').on('click', function() {
	$('#cardInfoSection').html('<div id="cardInfo"><p>Three Acts of Kindness is a positive psychology intervention with extensive scientific evidence in support of its ability to increase happiness.<br>The intervention consists of engaging in three kind acts, all in one day, and recording them.<br> So we asked ourselves, will performing three kind acts in a virtual environment achieve similar results?<br>The answer is yes.</p></div>');
});

$('#sample').on('click', function() {
	$('#cardInfoSection').html('<div id="cardInfo"><p>31 participants where randomly selected and randomly assigned to one of two groups, Kind Acts (experimental group) or Mundane Acts (control).<br>Participants in the Kind Act group saw a virtual version of themselves reading a story to a baby, feeding a baby, and playing with a baby.<br>Participants in the Mundane Acts group saw a virtual version of themselves brushing their teeth, watching TV, and drinking coffee.</p></div>');
});

$('#methods').on('click', function() {
	$('#cardInfoSection').html('<div id="cardInfo"><p>Pre-test and post-test scores of depression and happiness where collected through the Center for Epidemiology Studies Depression Scale (CESD-R) and the Steen Happiness Index (SHI), respectively.<br>Virtual environments where created and recorded using The Sims 4.<br>A Google Pixel phone and a Google Cardboard served as the Virtual Reality hardware.<br>A Mixed Models ANOVA allowed us to compare the pre-test and post-test results for each group as well as the differences between the two groups.</p></div>');
});


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