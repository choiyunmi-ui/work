$(document).ready(function () {
	tab();
	//축약형 if($('.tabSection').length) prmt_slider();
	if($('.tabSection').length) {
		prmt_slider();
	};

	function selectDate(date) {
		$('#calendar-wrapper').updateCalendarOptions({
		  date: date
		});
		console.log(calendar.getSelectedDate());
	  }
	  
	  var defaultConfig = {
		weekDayLength: 1,
		date: '08/05/2021',
		onClickDate: selectDate,
		showYearDropdown: true,
		startOnMonday: true,
	  };
	  
	  var calendar = $('#calendar-wrapper').calendar(defaultConfig);
	//   console.log(calendar.getSelectedDate());
	  
});


function tab() {
	var section = $('.tabSection');
	section.each(function () {
		var self = $(this);		
		self.find(".tab_cont").hide();		
		self.find(".tab_cont:first").show();
		self.find(".tab_menu>.menu_item").click(function (e) {
			e.preventDefault();			
			self.find(".tab_cont").hide();
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).show();		
		});
	});

}

function clickTest() {
	$('test').click(function(){
		console.log('test');
	});
	$('test').mouseover(function(){
		console.log('test');
	});
	$('test').hover(function(){
		console.log('test');
	});
};




function prmt_slider() {
	$('.prmt_slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
};

