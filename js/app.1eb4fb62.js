	var currentDate = new Date();
	var hour12 = currentDate.getHours() - 12;
	var nowTime = +new Date(); 
	const date1 = new Date();
	
	function addTime(date, hours, mins) {
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
	
	const time930 = addTime(date1, 9, 30);
	left930 = (time930 - nowTime) / 1000 / 60;

	var inputTime;
	
	function changeTimeslot(isNotWorkToday, isNotWorkTomorrow) {
		console.log(hour12)
		if (hour12 < 0) {
			if (isNotWorkToday === 0) {
				console.log("工作日9:30之前常规展示");
				if (left630 >= 15 && left630 <= 390) {
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
					$('#list-data-con')
						.removeClass('hidden');
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
					$('#list-data-con')
						.removeClass('hidden');
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
				} else if (left930 >= 10 && left930 <= 25) {
					inputTime = addTime(date1, 9, 20);
					$('#timeslot')[0].innerHTML = "09:20~09:30";
					$('#list-data-con').removeClass('hidden');
				} else {
					console.log("工作日过了9:30不显示");
					$('#list-no-con').removeClass('hidden');
				}
			} else {
				console.log("不是工作日不显示记录");
				$('#list-no-con').removeClass('hidden');
			}
		} else {
			if (isNotWorkTomorrow === 0) {
				console.log("明天是工作日显示900-910的记录");
				inputTime = addTime(date1, 9, 00);
				$('#timeslot')[0].innerHTML = "09:10~09:20";
				$('#list-data-con').removeClass('hidden');
			} else {
				console.log("明天不是工作日不显示记录");
				$('#list-no-con').removeClass('hidden');
			}
		}
	}

function countDown(isNotWorkToday, isNotWorkTomorrow) {
	var nowTime = +new Date();
	var times = (inputTime - nowTime) / 1000;
	var h = parseInt(times / 60 / 60 % 24);
	h = h < 10 ? '0' + h : h;
	$('#hour')[0].innerHTML = h;
	var m = parseInt(times / 60 % 60);
	m = m < 10 ? '0' + m : m;
	$('#minute')[0].innerHTML = m;
	var s = parseInt(times % 60);
	s = s < 10 ? '0' + s : s;
	$('#second')[0].innerHTML = s;
	var currentDate = new Date();
	var hour12 = currentDate.getHours() - 12;


	if (isNotWorkToday === 0)  {
		if (hour12 < 0) {
			console.log("12点之前显示倒计时");
			if (times > 0) {
				$('#showcode').removeClass('hidden');
			} else {
				$('#nodata').removeClass('hidden');
			}
		} else {
			if (isNotWorkTomorrow === 0) {
				console.log("显示倒计时");
				$('#showcode').removeClass('hidden');
			} else {
				console.log("不显示倒计时1");
				$('#nodata').removeClass('hidden');
			}
		}
	} else if (isNotWorkToday === 1) {
		if (isNotWorkTomorrow === 0) {
			console.log("显示倒计时");
			$('#showcode').removeClass('hidden');
		} else {
		console.log("不显示倒计时2");
		$('#nodata').removeClass('hidden');
	}
	}
}

function changeDate() {
	var time = new Date;
	if (hour12 >= 0) {
		time = new Date(time.getTime() + 1000 * 60 * 60 * 24);
		var Year = time.getFullYear();
		var Month = (time.getMonth() + 1)
			.toString();
		Month1 = Month < 10 ? '0' + Month : Month;
		var Day = time.getDate()
			.toString();
		Day1 = Day < 10 ? '0' + Day : Day;
	} else {
		var Year = time.getFullYear();
		var Month = (time.getMonth() + 1)
			.toString();
		Month1 = Month < 10 ? '0' + Month : Month;
		var Day = time.getDate()
			.toString();
		Day1 = Day < 10 ? '0' + Day : Day;
	}
	$('#code-date')[0].innerHTML = Year + '-' + Month1 + '-' + Day1;
	$('#record-date')[0].innerHTML = Month + '月' + Day + '日';
}

const date = new Date();
const formatDate = (date) => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");
                return `${year}${month}${day}`;
            };
			
const today = new Date();
const tomorrow = new Date(today.getTime() + 1000 * 60 * 60 * 24);
const apiUrl = "https://apis.tianapi.com/jiejiari/index?key=d2c3e9453311b8f5ae88f7360d8d96c1";
const requestTodayUrl = `${apiUrl}&date=${formatDate(today)}`;
const requestTomorrowUrl = `${apiUrl}&date=${formatDate(tomorrow)}`;

// 在第一个请求中处理isNotWorkToday的值
fetch(requestTodayUrl)
.then(response => response.json())
.then(data => {
	let isNotWorkToday;
	try {
		isNotWorkToday = data.result.list[0].isnotwork;
	} catch (error) {
		isNotWorkToday = 0; // 设置默认值
	}
	// 第二个请求并处理isNotWorkTomorrow的值
	fetch(requestTomorrowUrl)
		.then(response => response.json())
		.then(data => {
			let isNotWorkTomorrow;
			try {
				isNotWorkTomorrow = data.result.list[0].isnotwork;
			} catch (error) {
				isNotWorkTomorrow = 0; // 设置默认值
			}
			console.log("isNotWorkToday =" + isNotWorkToday)
			console.log("isNotWorkTomorrow =" + isNotWorkTomorrow)
			changeTimeslot(isNotWorkToday, isNotWorkTomorrow);
			countDown(isNotWorkToday, isNotWorkTomorrow);
		});
});         
