	var currentDate = new Date();
	var hour12 = currentDate.getHours() - 12;
	var nowTime = +new Date(); 
	const date1 = new Date();
	
	function addTime(date, hours, mins) {
		//var d;
		var time = new Date;
		if (hour12 >= 0) {
			time1 = new Date(time.getTime()+1000*60*60*24);
			var Year1 = time1.getFullYear().toString();
			var Month1 = (time1.getMonth() + 1).toString();
			var Day1 = time1.getDate().toString();
			var d = new Date(`${Year1}-${Month1}-${Day1}`.replace(/-/g,'/'));
		 } else {
			var Year = time.getFullYear().toString();
			var Month = (time.getMonth() + 1).toString();
			var Day = time.getDate().toString();
			var d = new Date(`${Year}-${Month}-${Day}`.replace(/-/g,'/'));
		 } 
			d.setHours(d.getHours() + hours);
			d.setMinutes(d.getMinutes() + mins);
			return d;	
	}

	const time630 = addTime(date1, 6, 30);
	left630 = (time630 - nowTime) / 1000 / 60;

	const time640 = addTime(date1, 6, 40);
	left640 = (time640 - nowTime) / 1000 / 60;

	const time650 = addTime(date1, 6, 50);
	left650 = (time650 - nowTime) / 1000 / 60;

	const time700 = addTime(date1, 7, 00);
	left700 = (time700 - nowTime) / 1000 / 60;

	const time710 = addTime(date1, 7, 10);
	left710 = (time710 - nowTime) / 1000 / 60;

	const time720 = addTime(date1, 7, 20);
	left720 = (time720 - nowTime) / 1000 / 60;

	const time730 = addTime(date1, 7, 30);
	left730 = (time730 - nowTime) / 1000 / 60;

	const time740 = addTime(date1, 7, 40);
	left740 = (time740 - nowTime) / 1000 / 60;

	const time750 = addTime(date1, 7, 50);
	left750 = (time750 - nowTime) / 1000 / 60;

	const time800 = addTime(date1, 8, 00);
	left800 = (time800 - nowTime) / 1000 / 60;

	const time810 = addTime(date1, 8, 10);
	left810 = (time810 - nowTime) / 1000 / 60;

	const time820 = addTime(date1, 8, 20);
	left820 = (time820 - nowTime) / 1000 / 60;

	const time830 = addTime(date1, 8, 30);
	left830 = (time830 - nowTime) / 1000 / 60;

	const time840 = addTime(date1, 8, 40);
	left840 = (time840 - nowTime) / 1000 / 60;

	const time850 = addTime(date1, 8, 50);
	left850 = (time850 - nowTime) / 1000 / 60;

	const time900 = addTime(date1, 9, 00);
	left900 = (time900 - nowTime) / 1000 / 60;

	const time910 = addTime(date1, 9, 10);
	left910 = (time910 - nowTime) / 1000 / 60;

	const time920 = addTime(date1, 9, 20);
	left920 = (time920 - nowTime) / 1000 / 60;
	
	var inputTime;
	
function inputTime() {
    if (currentDate.getDay() == 0) {
        if (hour12 >= 0) {
			inputTime = addTime(date1, 9, 00);
			$('#timeslot')[0].innerHTML = "09:10~09:20";
			$('#list-data-con').removeClass('hidden');
        } else {
             $('#list-no-con').removeClass('hidden');
        }
    } else if (currentDate.getDay() == 6) {
         $('#list-no-con').removeClass('hidden');
    } else  if (left630 >= 15 && left630 <= 390) {
        inputTime = addTime(date1, 6, 20);
        $('#timeslot')[0].innerHTML = "06:30~06:40";
       $('#list-data-con').removeClass('hidden');
    } else if (left640 >= 15 && left640 <= 25) {
        inputTime = addTime(date1, 6, 30);
        $('#timeslot')[0].innerHTML = "06:40~06:50";
       $('#list-data-con').removeClass('hidden');
    } else if (left650 >= 15 && left650 <= 25) {
        inputTime = addTime(date1, 6, 40);
        $('#timeslot')[0].innerHTML = "06:50~07:00";
       $('#list-data-con').removeClass('hidden');
    } else if (left700 >= 15 && left700 <= 25) {
        inputTime = addTime(date1, 6, 50);
        $('#timeslot')[0].innerHTML = "07:00~07:10";
       $('#list-data-con').removeClass('hidden');
    } else if (left710 >= 15 && left710 <= 25) {
        inputTime = addTime(date1, 7, 00);
        $('#timeslot')[0].innerHTML = "07:10~07:20";
       $('#list-data-con').removeClass('hidden');
    } else if (left720 >= 15 && left720 <= 25) {
        inputTime = addTime(date1, 7, 10);
        $('#timeslot')[0].innerHTML = "07:20~07:30";
       $('#list-data-con').removeClass('hidden');
    } else if (left730 >= 15 && left730 <= 25) {
        inputTime = addTime(date1, 7, 20);
        $('#timeslot')[0].innerHTML = "07:30~07:40";
       $('#list-data-con').removeClass('hidden');
    } else if (left740 >= 15 && left740 <= 25) {
        inputTime = addTime(date1, 7, 30);
        $('#timeslot')[0].innerHTML = "07:40~07:50";
       $('#list-data-con').removeClass('hidden');
    } else if (left750 >= 15 && left750 <= 25) {
        inputTime = addTime(date1, 7, 40);
        $('#timeslot')[0].innerHTML = "07:50~08:00";
       $('#list-data-con').removeClass('hidden');
    } else if (left800 >= 15 && left800 <= 25) {
        inputTime = addTime(date1, 7, 50);
        $('#timeslot')[0].innerHTML = "08:00~08:10";
       $('#list-data-con').removeClass('hidden');
    } else if (left810 >= 15 && left810 <= 25) {
        inputTime = addTime(date1, 8, 00);
        $('#timeslot')[0].innerHTML = "08:10~08:20";
       $('#list-data-con').removeClass('hidden');
    } else if (left820 >= 15 && left820 <= 25) {
        inputTime = addTime(date1, 8, 10);
        $('#timeslot')[0].innerHTML = "08:20~08:30";
       $('#list-data-con').removeClass('hidden');
    } else if (left830 >= 15 && left830 <= 25) {
        inputTime = addTime(date1, 8, 20);
        $('#timeslot')[0].innerHTML = "08:30~08:40";
       $('#list-data-con').removeClass('hidden');
    } else if (left840 >= 15 && left840 <= 25) {
        inputTime = addTime(date1, 8, 30);
        $('#timeslot')[0].innerHTML = "08:40~08:50";
       $('#list-data-con').removeClass('hidden');
    } else if (left850 >= 15 && left850 <= 25) {
        inputTime = addTime(date1, 8, 40);
        $('#timeslot')[0].innerHTML = "08:50~09:00";
       $('#list-data-con').removeClass('hidden');
    } else if (left900 >= 15 && left900 <= 25) {
        inputTime = addTime(date1, 8, 50);
        $('#timeslot')[0].innerHTML = "09:00~09:10";
       $('#list-data-con').removeClass('hidden');
    } else if (left910 >= 15 && left910 <= 25) {
        inputTime = addTime(date1, 9, 00);
        $('#timeslot')[0].innerHTML = "09:10~09:20";
       $('#list-data-con').removeClass('hidden');
    } else if (left920 >= 10 && left920 <= 25) {
        inputTime = addTime(date1, 9, 10);
        $('#timeslot')[0].innerHTML = "09:20~09:30";
       $('#list-data-con').removeClass('hidden');
    } else if (hour12 >= 0 && currentDate.getDay() != 5) {
        inputTime = addTime(date1, 9, 00);
        $('#timeslot')[0].innerHTML = "09:10~09:20";
       $('#list-data-con').removeClass('hidden');
    }  else {
		$('#list-no-con').removeClass('hidden');
	}
}

function countDown() {
	var nowTime = +new Date();
	var times = (inputTime - nowTime) / 1000;
	var h = parseInt(times / 60 / 60 % 24);
	h = h < 10 ? '0' + h: h;
	$('#hour')[0].innerHTML = h;
	var m = parseInt(times / 60 % 60);
	m = m < 10 ? '0' + m: m;
	$('#minute')[0].innerHTML = m;
	var s = parseInt(times % 60);
	s = s < 10 ? '0' + s: s;
	$('#second')[0].innerHTML = s;
	var currentDate = new Date();
	var hour12 = currentDate.getHours() - 12;

	if (currentDate.getDay() == 6) {
		$('#nodata').removeClass('hidden');
	} else if (currentDate.getDay() == 0) {
		if (hour12 >= 0) {
			$('#showcode').removeClass('hidden');
		} else {
			$('#nodata').removeClass('hidden');
		}
	} else if (currentDate.getDay() == 5) {
		if (hour12 >= 0) {
			$('#nodata').removeClass('hidden');
		} else {
			if (times > 0) {
				$('#showcode').removeClass('hidden');
			} else {
				$('#nodata').removeClass('hidden');
			}
		}
	} else {
		if (times > 0) {
			$('#showcode').removeClass('hidden');
		} else {
			$('#nodata').removeClass('hidden');
			$('#showcode').addClass('hidden');
		}
	}
}

function showDate() {
	var time = new Date;
	if (hour12 >= 0) {
		time = new Date(time.getTime()+1000*60*60*24);
		var Year = time.getFullYear();
		var Month = (time.getMonth() + 1).toString();
		Month1 = Month < 10 ? '0' + Month: Month; 
		var Day = time.getDate().toString();
		Day1 = Day < 10 ? '0' + Day: Day;
	} else {
		var Year = time.getFullYear();
		var Month = (time.getMonth() + 1).toString();
		Month1 = Month < 10 ? '0' + Month: Month; 
		var Day = time.getDate().toString();
		Day1 = Day < 10 ? '0' + Day: Day;
	}
	$('#code-date')[0].innerHTML = Year + '-' + Month1 + '-' + Day1;
	$('#record-date')[0].innerHTML = Month + '月' + Day + '日';
}