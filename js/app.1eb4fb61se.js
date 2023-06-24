function addTime(date, hours, mins) {
	const d = new Date(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`.replace(/-/g,'/'));
	d.setHours(d.getHours() + hours);
	d.setMinutes(d.getMinutes() + mins);
	return d;
}

var currentDate = new Date();
var hour = currentDate.getHours() - 12;
var nowTime = +new Date();
const date = new Date();

const time630 = addTime(date, 6, 30);
left630 = (time630 - nowTime) / 1000 / 60;

const time640 = addTime(date, 6, 40);
left640 = (time640 - nowTime) / 1000 / 60;

const time650 = addTime(date, 6, 50);
left650 = (time650 - nowTime) / 1000 / 60;

const time700 = addTime(date, 7, 00);
left700 = (time700 - nowTime) / 1000 / 60;

const time710 = addTime(date, 7, 10);
left710 = (time710 - nowTime) / 1000 / 60;

const time720 = addTime(date, 7, 20);
left720 = (time720 - nowTime) / 1000 / 60;

const time730 = addTime(date, 7, 30);
left730 = (time730 - nowTime) / 1000 / 60;

const time740 = addTime(date, 7, 40);
left740 = (time740 - nowTime) / 1000 / 60;

const time750 = addTime(date, 7, 50);
left750 = (time750 - nowTime) / 1000 / 60;

const time800 = addTime(date, 8, 00);
left800 = (time800 - nowTime) / 1000 / 60;

const time810 = addTime(date, 8, 10);
left810 = (time810 - nowTime) / 1000 / 60;

const time820 = addTime(date, 8, 20);
left820 = (time820 - nowTime) / 1000 / 60;

const time830 = addTime(date, 8, 30);
left830 = (time830 - nowTime) / 1000 / 60;

const time840 = addTime(date, 8, 40);
left840 = (time840 - nowTime) / 1000 / 60;

const time850 = addTime(date, 8, 50);
left850 = (time850 - nowTime) / 1000 / 60;

const time900 = addTime(date, 9, 00);
left900 = (time900 - nowTime) / 1000 / 60;

const time910 = addTime(date, 9, 10);
left910 = (time910 - nowTime) / 1000 / 60;

const time920 = addTime(date, 9, 20);
left920 = (time920 - nowTime) / 1000 / 60;

const time930 = addTime(date, 9, 30);
left930 = (time930 - nowTime) / 1000 / 60;

var green = "data:image/png;base64,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";
var blue = "data:image/png;base64,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";
var gray = "data:image/png;base64,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";

function updateTimeSelectToday630930() {
	if (left630 >= 15 && left630 <= 390) {
		$(".todaybg")[0].src = green;
		$(".time-select-today")[0].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[0].src = gray;
		$(".time-select-today")[0].innerHTML = "无";
	}
	if (left640 >= 15 && left640 <= 25) {
		$(".todaybg")[1].src = green;
		$(".time-select-today")[1].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[1].src = gray;
		$(".time-select-today")[1].innerHTML = "无";
	}
	if (left650 >= 15 && left650 <= 25) {
		$(".todaybg")[2].src = green;
		$(".time-select-today")[2].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[2].src = gray;
		$(".time-select-today")[2].innerHTML = "无";
	}
	if (left700 >= 15 && left700 <= 25) {
		$(".todaybg")[3].src = green;
		$(".time-select-today")[3].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[3].src = gray;
		$(".time-select-today")[3].innerHTML = "无";
	}
	if (left710 >= 15 && left710 <= 25) {
		$(".todaybg")[4].src = green;
		$(".time-select-today")[4].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[4].src = gray;
		$(".time-select-today")[4].innerHTML = "无";
	}
	if (left720 >= 15 && left720 <= 25) {
		$(".todaybg")[5].src = green;
		$(".time-select-today")[5].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[5].src = gray;
		$(".time-select-today")[5].innerHTML = "无";
	}
	if (left730 >= 15 && left730 <= 25) {
		$(".todaybg")[6].src = green;
		$(".time-select-today")[6].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[6].src = gray;
		$(".time-select-today")[6].innerHTML = "无";
	}
	if (left740 >= 15 && left740 <= 25) {
		$(".todaybg")[7].src = green;
		$(".time-select-today")[7].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[7].src = gray;
		$(".time-select-today")[7].innerHTML = "无";
	}
	if (left750 >= 15 && left750 <= 25) {
		$(".todaybg")[8].src = green;
		$(".time-select-today")[8].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[8].src = gray;
		$(".time-select-today")[8].innerHTML = "无";
	}
	if (left800 >= 15 && left800 <= 25) {
		$(".todaybg")[9].src = green;
		$(".time-select-today")[9].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[9].src = gray;
		$(".time-select-today")[9].innerHTML = "无";
	}
	if (left810 >= 15 && left810 <= 25) {
		$(".todaybg")[10].src = green;
		$(".time-select-today")[10].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[10].src = gray;
		$(".time-select-today")[10].innerHTML = "无";
	}
	if (left820 >= 15 && left820 <= 25) {
		$(".todaybg")[11].src = green;
		$(".time-select-today")[11].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[11].src = gray;
		$(".time-select-today")[11].innerHTML = "无";
	}
	if (left830 >= 15 && left830 <= 25) {
		$(".todaybg")[12].src = green;
		$(".time-select-today")[12].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[12].src = gray;
		$(".time-select-today")[12].innerHTML = "无";
	}
	if (left840 >= 15 && left840 <= 25) {
		$(".todaybg")[13].src = green;
		$(".time-select-today")[13].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[13].src = gray;
		$(".time-select-today")[13].innerHTML = "无";
	}
	if (left850 >= 15 && left850 <= 25) {
		$(".todaybg")[14].src = green;
		$(".time-select-today")[14].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[14].src = gray;
		$(".time-select-today")[14].innerHTML = "无";
	}
	if (left900 >= 15 && left900 <= 25) {
		$(".todaybg")[15].src = green;
		$(".time-select-today")[15].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[15].src = gray;
		$(".time-select-today")[15].innerHTML = "无";
	}
	if (left910 >= 15 && left910 <= 25) {
		$(".todaybg910")[0].src = green;
		$(".time-select-today910")[0].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg910")[0].src = gray;
		$(".time-select-today910")[0].innerHTML = "无";
	}
	if (left920 >= 10 && left920 <= 25) {
		$(".todaybg")[16].src = green;
		$(".time-select-today")[16].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[16].src = gray;
		$(".time-select-today")[16].innerHTML = "无";
	}
	if (left930 >= 10 && left930 <= 25) {
		$(".todaybg")[16].src = green;
		$(".time-select-today")[16].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg")[16].src = gray;
		$(".time-select-today")[16].innerHTML = "无";
	}
}

function updateTimeSelectTodayAfter12() {
	if (hour >= 0) {
		$(".todaybg").each(function() {
			$(this)[0].src = gray;
		});
		$(".time-select-today").each(function() {
			$(this)[0].innerHTML = "无";
		});
		$(".todaybg910")[0].src = green;
		$(".time-select-today910")[0].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
	} else {
		$(".todaybg").each(function() {
			$(this)[0].src = blue;
		});
		$(".time-select-today").each(function() {
			$(this)[0].innerHTML = "未开始";
		});
		$(".todaybg910")[0].src = blue;
		$(".time-select-today910")[0].innerHTML = "未开始";
	}
}

//第一个工作日状态显示
function changeTodayStatus(isNotWorkToday, isNotWorkTomorrow) {
	if (currentDate.getDay() == 6) {
		console.log("今天周六，isNotWork =  " + isNotWorkToday);
		if (isNotWorkToday === 0) {
			console.log("明天还要工作啊");
			updateTimeSelectToday630930();
		} else if (isNotWorkTomorrow === 0) {
			console.log("xxxxxxxxxxxxxx");
			updateTimeSelectTodayAfter12();
		} else { // 如果是调休日
			console.log("休息下xxxxxxxxxxx");
			$(".todaybg").each(function() {
				$(this)[0].src = blue;
				$(".todaybg910")[0].src = blue;
			});
			$(".time-select-today").each(function() {
				$(this)[0].innerHTML = "未开始";
			});
			$(".time-select-today910")[0].innerHTML = "未开始";
		}
	} else if (currentDate.getDay() == 0) {
		if (isNotWorkToday === 1) { // 如果不是调休日
			console.log("今天周日，isNotWork =  " + isNotWorkToday);
			console.log("明天就要工作了");
			if (hour >= 0) {
				$(".todaybg").each(function() {
					$(this)[0].src = gray;
				});
				$(".todaybg910")[0].src = green;

				$(".time-select-today").each(function() {
					$(this)[0].innerHTML = "无";
				});
				$(".time-select-today910")[0].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
			} else {
				$(".todaybg").each(function() {
					$(this)[0].src = blue;
				});
				$(".todaybg910")[0].src = blue;

				$(".time-select-today").each(function() {
					$(this)[0].innerHTML = "未开始";
				});
				$(".time-select-today910")[0].innerHTML = "未开始";
			}

		} else { // 如果是调休日
			console.log("今天周日，但isNotWorkToday =  " + isNotWorkToday + "  所以今天还要工作啊");
			updateTimeSelectToday630930();
		}

	} else {
		console.log("周一到周五，肯定要上班啊  " + isNotWorkToday);
		updateTimeSelectToday630930();
	}
}

function updateTimeSelectTomorrowAfter12() {
	if (hour < 0) {
		$(".nextdaybg").each(function() {
			$(this)[0].src = blue;
		});
		$(".nextdaybg910")[0].src = blue;
		$(".time-select-nextday").each(function() {
			$(this)[0].innerHTML = "未开始";
		});
		$(".time-select-nextday910")[0].innerHTML = "未开始";
	} else {
		if (hour >= 0) {
			$(".nextdaybg").each(function() {
				$(this)[0].src = gray;
			});
			$(".nextdaybg910")[0].src = green;

			$(".time-select-nextday").each(function() {
				$(this)[0].innerHTML = "无";
			});
			$(".time-select-nextday910")[0].innerHTML = "<a href=\"code.html\" style=\"color:#fff;text-decoration:none\">约</a>";
		} else {
			$(".nextdaybg").each(function() {
				$(this)[0].src = blue;
			});
			$(".nextdaybg910")[0].src = blue;
			$(".time-select-nextday").each(function() {
				$(this)[0].innerHTML = "未开始";
			});
			$(".time-select-nextday910")[0].innerHTML = "未开始";
		}
	}
}

function updateTimeSelectTomorrowNeverStart() {
	$(".nextdaybg").each(function() {
		$(this)[0].src = blue;
	});
	$(".nextdaybg910")[0].src = blue;
	$(".time-select-nextday").each(function() {
		$(this)[0].innerHTML = "未开始";
	});
	$(".time-select-nextday910")[0].innerHTML = "未开始";
}

//第二个工作日状态显示
function changeTomorrowStatus(isNotWorkToday, isNotWorkTomorrow) {
	switch (currentDate.getDay()) {
	case 5:
		if (isNotWorkTomorrow === 1) {
			console.log("是周日的预约，应该一直显示未开始");
			updateTimeSelectTomorrowNeverStart();
		} else if (isNotWorkTomorrow === 0) {
			console.log("是周六的预约，12点前后不一样");
			updateTimeSelectTomorrowAfter12();
		}
		break;
	case 6:
		if (isNotWorkToday === 0) {
			if (isNotWorkTomorrow === 1) {
				console.log("是周一的预约，应该一直显示未开始");
				updateTimeSelectTomorrowNeverStart();
			} else if (isNotWorkTomorrow === 0) {
				console.log("是周日的预约，12点前后不一样");
				updateTimeSelectTomorrowAfter12();
			}
		} else if (isNotWorkToday === 1) {
			console.log("是周一或周二的预约，应该一直显示未开始");
			updateTimeSelectTomorrowNeverStart();
		}
		break;
	case 0:
		if (isNotWorkToday === 0 && isNotWorkTomorrow === 0) {
			console.log("是周一的预约，12点前后不一样");
			updateTimeSelectTomorrowAfter12();
		} else if (isNotWorkToday === 1) {
			console.log("是周二的预约，应该一直显示未开始");
			updateTimeSelectTomorrowNeverStart();
		}
		break;
	default:
		console.log("已预约");
		updateTimeSelectTomorrowAfter12();
		break;
	}
}

// 获取当前日期, 格式2023-05-06，用于API查询, 返回1代表非工作日 0代表工作日
const apiUrl = "https://apis.tianapi.com/jiejiari/index?key=d2c3e9453311b8f5ae88f7360d8d96c1";

const formatDate = (date) => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};
const formatDateMonthDay = (date) => {
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${month}-${day}`;
};

const today = new Date();
const tomorrow = new Date(today.getTime() + 1000 * 60 * 60 * 24);
const afterTomorrow = new Date(today.getTime() + 1000 * 60 * 60 * 48);
const ThreeDaysLater = new Date(today.getTime() + 1000 * 60 * 60 * 72);

const requestTodayUrl = `${apiUrl}&date=${formatDate(today)}`;
const requestTomorrowUrl = `${apiUrl}&date=${formatDate(tomorrow)}`;
const requestAfterTomorrowUrl = `${apiUrl}&date=${formatDate(afterTomorrow)}`;

const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
const dayOfWeek = today.getDay();
const nextDayOfWeek = tomorrow.getDay();
const nextNextDayOfWeek = afterTomorrow.getDay();

const updateDate = (elementSelector, date, dayOfWeek) => {
	const formattedDate = formatDateMonthDay(date);
	$(elementSelector)[0].innerHTML = formattedDate + "\xa0" + '周' + weekDays[dayOfWeek];
};

// 根据今天日期判断：如果是调休日则显示实际日期，否则将周六和周日设置为周一
function setCurrentDay(isNotWorkToday, isNotWorkTomorrow) {
	if (dayOfWeek === 6) {
		if (isNotWorkToday === 0) {
			console.log("周六 当天的日期setCurrentDay");
			updateDate("#todaydate", today, dayOfWeek);
		} else if (isNotWorkToday === 1 && isNotWorkTomorrow === 0) {
			console.log("周日 第二天的日期setCurrentDay");
			updateDate("#todaydate", tomorrow, nextDayOfWeek);
		} else if (isNotWorkToday === 1 && isNotWorkTomorrow === 1) {
			console.log("周一 第三天的日期setCurrentDay");
			updateDate("#todaydate", afterTomorrow, nextNextDayOfWeek);
		}
	} else if (dayOfWeek === 0) {
		if (isNotWorkToday === 0) {
			console.log("周日 当天的日期setCurrentDay");
			updateDate("#todaydate", today, dayOfWeek);
		} else if (isNotWorkToday === 1) {
			console.log("周一 第二天的日期setCurrentDay");
			updateDate("#todaydate", tomorrow, nextDayOfWeek);
		}
	} else {
		console.log("当天的日期setCurrentDay");
		updateDate("#todaydate", today, dayOfWeek);

	}
}

// 根据明天日期判断：如果是调休日则显示实际日期，否则将周六和周日设置为周一
function setNextDay(isNotWorkToday, isNotWorkTomorrow, isNotWorkAfterTomorrow) {
	if (dayOfWeek === 5) {
		if (isNotWorkTomorrow === 0) {
			console.log("周六 第二天的日期");
			updateDate("#nextdaydate", tomorrow, nextDayOfWeek);
		} else if (isNotWorkTomorrow === 1 && isNotWorkAfterTomorrow === 0) {
			console.log("周日 第三天的日期");
			updateDate("#nextdaydate", afterTomorrow, nextNextDayOfWeek);
		} else {
			console.log("周一 第4天的日期" + nextNextDayOfWeek);
			$('#nextdaydate')[0].innerHTML = formatDateMonthDay(ThreeDaysLater) + "\xa0" + '周一';
		}
	} else if (dayOfWeek === 6) {
		if (isNotWorkToday === 0 && isNotWorkTomorrow === 1) {
			console.log("周一 第三天的日期");
			updateDate("#nextdaydate", afterTomorrow, nextNextDayOfWeek);
		} else if (isNotWorkToday === 1 && isNotWorkTomorrow === 0) {
			console.log("周一 第三天的日期");
			updateDate("#nextdaydate", afterTomorrow, nextNextDayOfWeek);
		} else if (isNotWorkToday === 0 && isNotWorkTomorrow === 0) {
			console.log("周日 第二天的日期");
			updateDate("#nextdaydate", tomorrow, nextDayOfWeek);
		} else if (isNotWorkToday === 1 && isNotWorkTomorrow === 1) {
			console.log("周二的日期");
			$('#nextdaydate')[0].innerHTML = formatDateMonthDay(ThreeDaysLater) + "\xa0" + '周二';
		}
	} else if (dayOfWeek === 0) {
		if (isNotWorkToday === 0) {
			console.log("周一 第二天的日期");
			updateDate("#nextdaydate", tomorrow, nextDayOfWeek);
		} else if (isNotWorkToday === 1) {
			console.log("周二 第三天的日期");
			updateDate("#nextdaydate", afterTomorrow, nextNextDayOfWeek);
		}
	} else {
		console.log("第二天的日期");
		updateDate("#nextdaydate", tomorrow, nextDayOfWeek);
	}

}

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
	// 第二个请求并处理isNotWorkTomorrow的值，并调用setNextDay函数传递这两个值
	fetch(requestTomorrowUrl)
	.then(response => response.json())
	.then(data => {
		let isNotWorkTomorrow;
		try {
		isNotWorkTomorrow = data.result.list[0].isnotwork;
		} catch (error) {
		isNotWorkTomorrow = 0; // 设置默认值
		}
		// 第三个请求并处理isNotWorkAfterTomorrow的值，并调用setNextDay函数传递这两个值
		fetch(requestAfterTomorrowUrl)
		.then(response => response.json())
		.then(data => {
			let isNotWorkAfterTomorrow;
			try {
				isNotWorkAfterTomorrow = data.result.list[0].isnotwork;
			} catch (error) {
				isNotWorkAfterTomorrow = 0; // 设置默认值
			}
			console.log("isNotWorkToday =" + isNotWorkToday)
			console.log("isNotWorkTomorrow =" + isNotWorkTomorrow)
			console.log("isNotWorkAfterTomorrow =" + isNotWorkAfterTomorrow)
			changeTodayStatus(isNotWorkToday,isNotWorkTomorrow);
			changeTomorrowStatus(isNotWorkToday,isNotWorkTomorrow);
			setCurrentDay(isNotWorkToday,isNotWorkTomorrow); // 将当前日期也传递给setCurrentDay函数
			setNextDay(isNotWorkToday, isNotWorkTomorrow, isNotWorkAfterTomorrow);
		});
	});
});