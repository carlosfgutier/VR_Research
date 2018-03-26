$(document).ready(function() {
	// If on desktop
    if($(window).width() > 980) {

    	//remove individual card info section when on desktop
    	$('#infoSectionH').css('display', 'none');
		$('#infoSectionS').css('display', 'none');
		$('#infoSectionM').css('display', 'none');

		$('#arrowH').css('display', 'none');
		$('#arrowS').css('display', 'none');
		$('#arrowM').css('display', 'none');

        // Show card Info when cards are clicked
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

		// Animate graphs when hovering over results section
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

		// Show corresponding graph info when hover over graph
		$('#graph1').hover(hoverInGraph1, hoverOutGraph1);
		$('#graph2').hover(hoverInGraph2, hoverOutGraph2);

		function hoverInGraph1() {
			$('#graphInfoSection').html('<div id="graphInfo"><p>While participants in the experimental group (KA) had higher scores of happiness to begin with, they do not differ significantly from those of the control group (MA) (p=.57). However, post-test scores of happiness are significantly different between the two groups (p=.03).</p></div>');
		};
		function hoverOutGraph1() {
				$('#graphInfoSection').html('<div id="graphInfo"><p style="color: white"> hi<br>hi </p></div>');
		};
		function hoverInGraph2() {
			$('#graphInfoSection').html('<div id="graphInfo"><p>Differences in mean scores of depression between pre-test and post-tests for the experimental (KA) and the control (MA) group.<br> Post-test mean scores of depression are significantly different between the two groups (p=.009).</p></div>');
		};
		function hoverOutGraph2() {
				$('#graphInfoSection').html('<div id="graphInfo"><p style="color: white"> hi<br>hi </p></div>');
		};

		// Hide individual graph info section when on desktop
		$('#graph1Info').css('display', 'none');
		$('#graph2Info').css('display', 'none');

		// Hide arrows when on desktop
		$('.arrow').css('display', 'none');

	//If on smaller device
    } else {

    	//show bars full lenght when when on smaller screen
    	$('#bar11').css('max-height', '45%');
		$('#bar21').css('max-height', '35%');
		$('#bar31').css('max-height', '68%');
		$('#bar41').css('max-height', '85%');

		$('#bar12').css('max-height', '80%');
		$('#bar22').css('max-height', '79%');
		$('#bar32').css('max-height', '90%');
		$('#bar42').css('max-height', '70%');

		//show card info within respective card on tap and hide if a different card is tapped
		var h = false;
		var s = false;
		var m = false;

		$('#infoSectionH').hide();
		$('#infoSectionS').hide();
		$('#infoSectionM').hide();

		$('#hypothesis').on('click', function() {

			if (h === false) {
				$('#infoSectionH').show();
				$('#infoSectionS').hide();
				$('#infoSectionM').hide();

				$('#arrowH').html('<img src="assets/images/aUp.png">');
				$('#arrowS').html('<img src="assets/images/aDown.png">');
				$('#arrowM').html('<img src="assets/images/aDown.png">');

				h = true;
				s = false;
				m = false;
			} else if (h === true) {
				$('#infoSectionH').hide();
				$('#arrowH').html('<img src="assets/images/aDown.png">');

				h = false;
			};
		});

		$('#sample').on('click', function() {

			if (s === false) {
				$('#infoSectionH').hide();
				$('#infoSectionS').show();
				$('#infoSectionM').hide();

				$('#arrowH').html('<img src="assets/images/aDown.png">');
				$('#arrowS').html('<img src="assets/images/aUp.png">');
				$('#arrowM').html('<img src="assets/images/aDown.png">');

				h = false;
				s = true;
				m = false;
			} else if (s === true) {
				$('#infoSectionS').hide();
				$('#arrowS').html('<img src="assets/images/aDown.png">');

				s = false;
			};
		});

		$('#methods').on('click', function() {

			if (m === false) {
				$('#infoSectionH').hide()
				$('#infoSectionS').hide();
				$('#infoSectionM').show();

				$('#arrowH').html('<img src="assets/images/aDown.png">');
				$('#arrowS').html('<img src="assets/images/aDown.png">');
				$('#arrowM').html('<img src="assets/images/aUp.png">');

				h = false;
				s = false;
				m = true;
			} else if (m === true) {
				$('#infoSectionM').hide();
				$('#arrowM').html('<img src="assets/images/aDown.png">');

				m = false;
			};
		});

		// Show graph infor under corresponding graph when on smaller screen 
		$('#graph1Info').html('<div id="graphInfo"><p>While participants in the experimental group (KA) had higher scores of happiness to begin with, they do not differ significantly from those of the control group (MA) (p=0.57). However, post-test scores of happiness between each group differ significantly (p=.03), supporting our hypothesis. </p></div>');
		$('#graph2Info').html('<div id="graphInfo"><p>Differences in mean scores of depression between pre-test and post-tests for the experimental (KA) and the control (MA) group.<br>Mean scores of depression in the experimental group are significantly lower from the pre-test to the post-test (p=.009).</p></div>');
    }
});
