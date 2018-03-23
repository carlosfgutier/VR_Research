// $(document).ready(function() {
//     if($(window).width() > 980) {
//     	console.log($(window).width());
        
//     	$('#hypothesis').on('click', function() {
// 			$('#cardInfoSectionAll').html('<div id="cardInfo"><h3>Hypothesis</h3><p>Three Acts of Kindness is a positive psychology intervention with extensive <a href="literature.html" target="_blank">literature</a> in support of its ability to increase happiness.<br>The intervention consists of engaging in three kind acts, all in one day, and recording them.<br> So we asked ourselves, will performing three kind acts in a virtual environment achieve similar results?<br>The answer is yes.</p></div>');
// 		});

// 		$('#sample').on('click', function() {
// 			$('#cardInfoSectionAll').html('<div id="cardInfo"><h3>Sample</h3><p>31 participants where randomly selected and randomly assigned to one of two groups, Kind Acts (experimental group) or Mundane Acts (control).<br>Participants in the Kind Act group saw a virtual version of themselves reading a story to a baby, feeding a baby, and playing with a baby.<br>Participants in the Mundane Acts group saw a virtual version of themselves brushing their teeth, watching TV, and drinking coffee.</p></div>');
// 		});

// 		$('#methods').on('click', function() {
// 			$('#cardInfoSectionAll').html('<div id="cardInfo"><h3>Methods</h3><p>Pre-test and post-test scores of depression and happiness were collected through the <a href="http://cesd-r.com/about-cesdr/" target="_blank">Center for Epidemiology Studies Depression Scale (CESD-R)</a> and the <a href="http://www.tracysteen.com/index.html" target="_blank">Steen Happiness Index (SHI)</a>, respectively.<br>Virtual environments where created and recorded using The Sims 4.<br>A Google Pixel phone and a Google Cardboard served as the Virtual Reality hardware.<br>A Mixed Models ANOVA allowed us to compare the pre-test and post-test results for each group as well as the differences between the two groups.</p></div>');
// 		});

// 		// RESULTS SECTION
// 		//---------------------------------------------//
// 		$('#results').on('mouseover', function(event) {
// 			$('#bar11').css('max-height', '45%');
// 			$('#bar21').css('max-height', '35%');
// 			$('#bar31').css('max-height', '68%');
// 			$('#bar41').css('max-height', '85%');
// 			$('#bar11, #bar21, #bar31, #bar41').css('transition', 'all 1s ease-in-out');

// 			$('#bar12').css('max-height', '80%');
// 			$('#bar22').css('max-height', '79%');
// 			$('#bar32').css('max-height', '90%');
// 			$('#bar42').css('max-height', '70%');
// 			$('#bar12, #bar22, #bar32, #bar42').css('transition', 'all 0.7s ease-in-out');

// 		});

// 		$('#results').on('mouseout', function(event) {
// 			$('#bar11').css('max-height', '0%');
// 			$('#bar21').css('max-height', '0%');
// 			$('#bar31').css('max-height', '0%');
// 			$('#bar41').css('max-height', '0%');

// 			$('#bar12').css('max-height', '0%');
// 			$('#bar22').css('max-height', '0%');
// 			$('#bar32').css('max-height', '0%');
// 			$('#bar42').css('max-height', '0%');
// 		});

// 		$('#graph1').hover(hoverInGraph1, hoverOutGraph1);

// 		$('#graph2').hover(hoverInGraph2, hoverOutGraph2);

// 		function hoverInGraph1() {
// 			$('#graphInfoSection').html('<div id="graphInfo"><p>While participants in the experimental group (KA) had higher scores of happiness to begin with, they do not differ significantly from those of the control group (MA) (p=0.57). However, post-test scores of happiness between each group differ significantly (p=.03), supporting our hypothesis. </p></div>');
// 		};

// 		function hoverOutGraph1() {
// 				$('#graphInfoSection').html('<div id="graphInfo"><p style="color: white"> hi<br>hi </p></div>');
// 		};

// 		function hoverInGraph2() {
// 			$('#graphInfoSection').html('<div id="graphInfo"><p>Differences in mean scores of depression between pre-test and post-tests for the experimental (KA) and the control (MA) group.<br>Mean scores of depression in the experimental group are significantly lower from the pre-test to the post-test (p=.009).</p></div>');
// 		};

// 		function hoverOutGraph2() {
// 				$('#graphInfoSection').html('<div id="graphInfo"><p style="color: white"> hi<br>hi </p></div>');
// 		};

//     } else {
//     	$('#bar11').css('max-height', '45%');
// 		$('#bar21').css('max-height', '35%');
// 		$('#bar31').css('max-height', '68%');
// 		$('#bar41').css('max-height', '85%');

// 		$('#bar12').css('max-height', '80%');
// 		$('#bar22').css('max-height', '79%');
// 		$('#bar32').css('max-height', '90%');
// 		$('#bar42').css('max-height', '70%');
//     }
// });

$('#hypothesis').on('click', function() {
	$('#cardInfoSectionAll').html('<div id="cardInfo"><h3>Hypothesis</h3><p>Three Acts of Kindness is a positive psychology intervention with extensive <a href="literature.html" target="_blank">literature</a> in support of its ability to increase happiness.<br>The intervention consists of engaging in three kind acts, all in one day, and recording them.<br> So we asked ourselves, will performing three kind acts in a virtual environment achieve similar results?<br>The answer is yes.</p></div>');
});

$('#sample').on('click', function() {
	$('#cardInfoSectionAll').html('<div id="cardInfo"><h3>Sample</h3><p>31 participants where randomly selected and randomly assigned to one of two groups, Kind Acts (experimental group) or Mundane Acts (control).<br>Participants in the Kind Act group saw a virtual version of themselves reading a story to a baby, feeding a baby, and playing with a baby.<br>Participants in the Mundane Acts group saw a virtual version of themselves brushing their teeth, watching TV, and drinking coffee.</p></div>');
});

$('#methods').on('click', function() {
	$('#cardInfoSectionAll').html('<div id="cardInfo"><h3>Methods</h3><p>Pre-test and post-test scores of depression and happiness were collected through the <a href="http://cesd-r.com/about-cesdr/" target="_blank">Center for Epidemiology Studies Depression Scale (CESD-R)</a> and the <a href="http://www.tracysteen.com/index.html" target="_blank">Steen Happiness Index (SHI)</a>, respectively.<br>Virtual environments where created and recorded using The Sims 4.<br>A Google Pixel phone and a Google Cardboard served as the Virtual Reality hardware.<br>A Mixed Models ANOVA allowed us to compare the pre-test and post-test results for each group as well as the differences between the two groups.</p></div>');
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
	$('#graphInfoSection').html('<div id="graphInfo"><p>While participants in the experimental group (KA) had higher scores of happiness to begin with, they do not differ significantly from those of the control group (MA) (p=0.57). However, post-test scores of happiness between each group differ significantly (p=.03), supporting our hypothesis. </p></div>');
};

function hoverOutGraph1() {
		$('#graphInfoSection').html('<div id="graphInfo"><p style="color: white"> hi<br>hi </p></div>');
};

function hoverInGraph2() {
	$('#graphInfoSection').html('<div id="graphInfo"><p>Differences in mean scores of depression between pre-test and post-tests for the experimental (KA) and the control (MA) group.<br>Mean scores of depression in the experimental group are significantly lower from the pre-test to the post-test (p=.009).</p></div>');
};

function hoverOutGraph2() {
		$('#graphInfoSection').html('<div id="graphInfo"><p style="color: white"> hi<br>hi </p></div>');
};