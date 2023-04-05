//分类条
function categoriesBarActive() {
	var urlinfo = window.location.pathname;
	urlinfo = decodeURIComponent(urlinfo)
	console.log(urlinfo);
	//判断是否是首页			
	if (urlinfo == '/') {
		if (document.querySelector('#category-bar')) {
			document.getElementById('主页').classList.add("select")
		}
	} else {
		// 验证是否是分类链接
		var pattern = /\/categories\/.*?\//;
		var patbool = pattern.test(urlinfo);
		// 获取当前的分类
		if (patbool) {
			var valuegroup = urlinfo.split("/");
			// 获取当前分类
			var nowCategorie = valuegroup[2];
			if (document.querySelector('#category-bar')) {
				document.getElementById(nowCategorie).classList.add("select");
			}
		}
	}
}

//鼠标控制横向滚动
function topCategoriesBarScroll() {
	if (document.getElementById("category-bar-items")) {
		let xscroll = document.getElementById("category-bar-items");
		xscroll.addEventListener("mousewheel", function (e) {
			//计算鼠标滚轮滚动的距离
			let v = -e.wheelDelta / 2;
			xscroll.scrollLeft += v;
			//阻止浏览器默认方法
			e.preventDefault();
		}, false);
	}
}


//标签条
function tagsBarActive() {
	var urlinfo = window.location.pathname;
	urlinfo = decodeURIComponent(urlinfo)
	//console.log(urlinfo);
	//判断是否是首页
	if (urlinfo == '/') {
		if (document.querySelector('#tags-bar')) {
			document.getElementById('首页').classList.add("select")
		}
	} else {
		// 验证是否是分类链接
		var pattern = /\/tags\/.*?\//;
		var patbool = pattern.test(urlinfo);
		//console.log(patbool);
		// 获取当前的标签
		if (patbool) {
			var valuegroup = urlinfo.split("/");
			//console.log(valuegroup[2]);
			// 获取当前分类
			var nowTag = valuegroup[2];
			if (document.querySelector('#category-bar')) {
				document.getElementById(nowTag).classList.add("select");
			}
		}
	}
}
categoriesBarActive()
topCategoriesBarScroll()
tagsBarActive()


//----------------------------------------------------------------


/* 农历转换 start */
/**
* @1900-2100区间内的公历、农历互转
* @charset UTF-8
* @Author  jiangjiazhi
* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
*/



/**
* 农历1900-2100的润大小信息表
* @Array Of Property
* @return Hex
*/

var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909

  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919

  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929

  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939

  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949

  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959

  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969

  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979

  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989

  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999

  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009

  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019

  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029

  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039

  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049

  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059

  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069

  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079

  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089

  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099

  0x0d520] // 2100



var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]



/**
* 天干地支之天干速查表
* @Array Of Property trans['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
* @return Cn string
*/

var Gan = ['\u7532', '\u4e59', '\u4e19', '\u4e01', '\u620a', '\u5df1', '\u5e9a', '\u8f9b', '\u58ec', '\u7678']



/**
* 天干地支之地支速查表
* @Array Of Property
* @trans['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']
* @return Cn string
*/

var Zhi = ['\u5b50', '\u4e11', '\u5bc5', '\u536f', '\u8fb0', '\u5df3', '\u5348', '\u672a', '\u7533', '\u9149', '\u620c', '\u4ea5']



/**
* 天干地支之地支速查表<=>生肖
* @Array Of Property
* @trans['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪']
* @return Cn string
*/

var Animals = ['\u9f20', '\u725b', '\u864e', '\u5154', '\u9f99', '\u86c7', '\u9a6c', '\u7f8a', '\u7334', '\u9e21', '\u72d7', '\u732a']



/**
* 24节气速查表
* @Array Of Property
* @trans['小寒','大寒','立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑','大暑','立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至']
* @return Cn string
*/

var solarTerm = ['\u5c0f\u5bd2', '\u5927\u5bd2', '\u7acb\u6625', '\u96e8\u6c34', '\u60ca\u86f0', '\u6625\u5206', '\u6e05\u660e', '\u8c37\u96e8', '\u7acb\u590f', '\u5c0f\u6ee1', '\u8292\u79cd', '\u590f\u81f3', '\u5c0f\u6691', '\u5927\u6691', '\u7acb\u79cb', '\u5904\u6691', '\u767d\u9732', '\u79cb\u5206', '\u5bd2\u9732', '\u971c\u964d', '\u7acb\u51ac', '\u5c0f\u96ea', '\u5927\u96ea', '\u51ac\u81f3']



/**
* 1900-2100各年的24节气日期速查表
* @Array Of Property
* @return 0x string For splice
*/

var sTermInfo = ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',

  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',

  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',

  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',

  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',

  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',

  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',

  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',

  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',

  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',

  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',

  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',

  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',

  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',

  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',

  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',

  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',

  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',

  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',

  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',

  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',

  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',

  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',

  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',

  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',

  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',

  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',

  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',

  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',

  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',

  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',

  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',

  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',

  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',

  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',

  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722']



/**
 * 数字转中文速查表
* @Array Of Property
* @trans ['日','一','二','三','四','五','六','七','八','九','十']
* @return Cn string
 */

var nStr1 = ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341']



/**
* 日期转农历称呼速查表
* @Array Of Property
* @trans ['初','十','廿','卅']
* @return Cn string
*/

var nStr2 = ['\u521d', '\u5341', '\u5eff', '\u5345']



/**
* 月份转农历称呼速查表
* @Array Of Property
* @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
* @return Cn string
*/

var nStr3 = ['\u6b63', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341', '\u51ac', '\u814a']



/**
* 返回农历y年一整年的总天数
* @param lunar Year
 * @return Number
* @eg:var count = calendar.lYearDays(1987) ;//count=387
*/

function lYearDays(y) {

  var i

  var sum = 348

  for (i = 0x8000; i > 0x8; i >>= 1) { sum += (lunarInfo[y - 1900] & i) ? 1 : 0 }

  return (sum + leapDays(y))

}



/**
* 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
* @param lunar Year
* @return Number (0-12)
 * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
*/

function leapMonth(y) { // 闰字编码 \u95f0

  return (lunarInfo[y - 1900] & 0xf)

}



/**
* 返回农历y年闰月的天数 若该年没有闰月则返回0
* @param lunar Year
* @return Number (0、29、30)
* @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
*/

function leapDays(y) {

  if (leapMonth(y)) {

    return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29)

  }

  return (0)

}



/**
* 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
* @param lunar Year
* @return Number (-1、29、30)
 * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
*/

function monthDays(y, m) {

  if (m > 12 || m < 1) { return -1 }// 月份参数从1至12，参数错误返回-1

  return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29)

}



/**
* 返回公历(!)y年m月的天数
* @param solar Year
* @return Number (-1、28、29、30、31)
* @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
*/

function solarDays(y, m) {

  if (m > 12 || m < 1) { return -1 } // 若参数错误 返回-1

  var ms = m - 1

  if (ms === 1) { // 2月份的闰平规律测算后确认返回28或29

    return (((y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)) ? 29 : 28)

  } else {

    return (solarMonth[ms])

  }

}



/**
* 农历年份转换为干支纪年
* @param  lYear 农历年的年份数
* @return Cn string
*/

function toGanZhiYear(lYear) {

  var ganKey = (lYear - 3) % 10

  var zhiKey = (lYear - 3) % 12

  if (ganKey === 0) ganKey = 10 // 如果余数为0则为最后一个天干

  if (zhiKey === 0) zhiKey = 12 // 如果余数为0则为最后一个地支

  return Gan[ganKey - 1] + Zhi[zhiKey - 1]

}



/**
* 公历月、日判断所属星座
* @param  cMonth [description]
* @param  cDay [description]
* @return Cn string
*/

function toAstro(cMonth, cDay) {

  var s = '\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf'

  var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22]

  return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '\u5ea7' // 座

}



/**
* 传入offset偏移量返回干支
* @param offset 相对甲子的偏移量
* @return Cn string
*/

function toGanZhi(offset) {

  return Gan[offset % 10] + Zhi[offset % 12]

}



/**
* 传入公历(!)y年获得该年第n个节气的公历日期
* @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
* @return day Number
* @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
*/

function getTerm(y, n) {

  if (y < 1900 || y > 2100) { return -1 }

  if (n < 1 || n > 24) { return -1 }

  var _table = sTermInfo[y - 1900]

  var _info = [

    parseInt('0x' + _table.substr(0, 5)).toString(),

    parseInt('0x' + _table.substr(5, 5)).toString(),

    parseInt('0x' + _table.substr(10, 5)).toString(),

    parseInt('0x' + _table.substr(15, 5)).toString(),

    parseInt('0x' + _table.substr(20, 5)).toString(),

    parseInt('0x' + _table.substr(25, 5)).toString()

  ]

  var _calday = [

    _info[0].substr(0, 1),

    _info[0].substr(1, 2),

    _info[0].substr(3, 1),

    _info[0].substr(4, 2),



    _info[1].substr(0, 1),

    _info[1].substr(1, 2),

    _info[1].substr(3, 1),

    _info[1].substr(4, 2),



    _info[2].substr(0, 1),

    _info[2].substr(1, 2),

    _info[2].substr(3, 1),

    _info[2].substr(4, 2),



    _info[3].substr(0, 1),

    _info[3].substr(1, 2),

    _info[3].substr(3, 1),

    _info[3].substr(4, 2),



    _info[4].substr(0, 1),

    _info[4].substr(1, 2),

    _info[4].substr(3, 1),

    _info[4].substr(4, 2),



    _info[5].substr(0, 1),

    _info[5].substr(1, 2),

    _info[5].substr(3, 1),

    _info[5].substr(4, 2)

  ]

  return parseInt(_calday[n - 1])

}



/**
* 传入农历数字月份返回汉语通俗表示法
* @param lunar month
* @return Cn string
* @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
*/

function toChinaMonth(m) { // 月 => \u6708

  if (m > 12 || m < 1) { return -1 } // 若参数错误 返回-1

  var s = nStr3[m - 1]

  s += '\u6708' // 加上月字

  return s

}



/**
* 传入农历日期数字返回汉字表示法
* @param lunar day
* @return Cn string
* @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
*/

function toChinaDay(d) { // 日 => \u65e5

  var s

  switch (d) {

    case 10:

      s = '\u521d\u5341'

      break

    case 20:

      s = '\u4e8c\u5341'

      break

    case 30:

      s = '\u4e09\u5341'

      break

    default:

      s = nStr2[Math.floor(d / 10)]

      s += nStr1[d % 10]

  }

  return (s)

}



/**
* 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
* @param y year
* @return Cn string
* @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
*/

function getAnimal(y) {

  return Animals[(y - 4) % 12]

}



/**
* 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
* @param y  solar year
* @param m  solar month
* @param d  solar day
* @return JSON object
* @eg:console.log(calendar.solar2lunar(1987,11,01));
*/

function solar2lunar(y, m, d) { // 参数区间1900.1.31~2100.12.31

  // 年份限定、上限

  if (y < 1900 || y > 2100) {

    return -1 // undefined转换为数字变为NaN

  }

  // 公历传参最下限

  if (y === 1900 && m === 1 && d < 31) {

    return -1

  }

  // 未传参  获得当天

  var objDate = null

  if (!y) {

    objDate = new Date()

  } else {

    objDate = new Date(y, parseInt(m) - 1, d)

  }

  var i

  var leap = 0

  var temp = 0

  // 修正ymd参数

  y = objDate.getFullYear()

  m = objDate.getMonth() + 1

  d = objDate.getDate()

  var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000

  for (i = 1900; i < 2101 && offset > 0; i++) {

    temp = lYearDays(i)

    offset -= temp

  }

  if (offset < 0) {

    offset += temp; i--

  }



  // 是否今天

  var isTodayObj = new Date()

  var isToday = false

  if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {

    isToday = true

  }

  // 星期几

  var nWeek = objDate.getDay()

  var cWeek = nStr1[nWeek]

  // 数字表示周几顺应天朝周一开始的惯例

  if (nWeek === 0) {

    nWeek = 7

  }

  // 农历年

  var year = i

  leap = leapMonth(i) // 闰哪个月

  var isLeap = false



  // 效验闰月

  for (i = 1; i < 13 && offset > 0; i++) {

    // 闰月

    if (leap > 0 && i === (leap + 1) && isLeap === false) {

      --i

      isLeap = true; temp = leapDays(year) // 计算农历闰月天数

    } else {

      temp = monthDays(year, i)// 计算农历普通月天数

    }

    // 解除闰月

    if (isLeap === true && i === (leap + 1)) { isLeap = false }

    offset -= temp

  }

  // 闰月导致数组下标重叠取反

  if (offset === 0 && leap > 0 && i === leap + 1) {

    if (isLeap) {

      isLeap = false

    } else {

      isLeap = true; --i

    }

  }

  if (offset < 0) {

    offset += temp; --i

  }

  // 农历月

  var month = i

  // 农历日

  var day = offset + 1

  // 天干地支处理

  var sm = m - 1

  var gzY = toGanZhiYear(year)



  // 当月的两个节气

  // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`

  var firstNode = getTerm(y, (m * 2 - 1)) // 返回当月「节」为几日开始

  var secondNode = getTerm(y, (m * 2)) // 返回当月「节」为几日开始



  // 依据12节气修正干支月

  var gzM = toGanZhi((y - 1900) * 12 + m + 11)

  if (d >= firstNode) {

    gzM = toGanZhi((y - 1900) * 12 + m + 12)

  }

  // 传入的日期的节气与否

  var isTerm = false

  var Term = null

  if (firstNode === d) {

    isTerm = true

    Term = solarTerm[m * 2 - 2]

  }

  if (secondNode === d) {

    isTerm = true

    Term = solarTerm[m * 2 - 1]

  }

  // 日柱 当月一日与 1900/1/1 相差天数

  var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10

  var gzD = toGanZhi(dayCyclical + d - 1)

  // 该日期所属的星座

  var astro = toAstro(m, d)

  return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': getAnimal(year), 'IMonthCn': (isLeap ? '\u95f0' : '') + toChinaMonth(month), 'IDayCn': toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': '\u661f\u671f' + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro }

}





var calendarFormatter = {

  // 传入阳历年月日获得详细的公历、农历object信息 <=>JSON

  solar2lunar: function (y, m, d) { // 参数区间1900.1.31~2100.12.31

    return solar2lunar(y, m, d)

  },

  /**
  * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
  * @param y  lunar year
  * @param m  lunar month
  * @param d  lunar day
  * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
  * @return JSON object
  * @eg:console.log(calendar.lunar2solar(1987,9,10));
  */

  lunar2solar: function (y, m, d, isLeapMonth) { // 参数区间1900.1.31~2100.12.1

    isLeapMonth = !!isLeapMonth

    if (isLeapMonth && (leapMonth !== m)) { return -1 }// 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同

    if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) { return -1 } // 超出了最大极限值

    var day = monthDays(y, m)

    var _day = day

    // bugFix 2016-9-25

    // if month is leap, _day use leapDays method

    if (isLeapMonth) {

      _day = leapDays(y, m)

    }

    if (y < 1900 || y > 2100 || d > _day) { return -1 }// 参数合法性效验



    // 计算农历的时间差

    var offset = 0

    for (var i = 1900; i < y; i++) {

      offset += lYearDays(i)

    }

    var leap = 0

    var isAdd = false

    for (i = 1; i < m; i++) {

      leap = leapMonth(y)

      if (!isAdd) { // 处理闰月

        if (leap <= i && leap > 0) {

          offset += leapDays(y); isAdd = true

        }

      }

      offset += monthDays(y, i)

    }

    // 转换闰月农历 需补充该年闰月的前一个月的时差

    if (isLeapMonth) { offset += day }

    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)

    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0)

    var calObj = new Date((offset + d - 31) * 86400000 + stmap)

    var cY = calObj.getUTCFullYear()

    var cM = calObj.getUTCMonth() + 1

    var cD = calObj.getUTCDate()

    return solar2lunar(cY, cM, cD)

  }

}

/* 农历转换 end */

//----------------------------------------------------------------

/* 节日弹窗 start */
var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 公祭日
if (m == 9 && dd == 18) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是九一八事变" + (y - 1931).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 7 && dd == 7) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是卢沟桥事变" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 12 && dd == 13) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是南京大屠杀" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 8 && dd == 14) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是世界慰安妇纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}


// 节假日
if (m == 10 && dd <= 3) {//国庆节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("祝祖国" + (y - 1949).toString() + "岁生日快乐！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 8 && dd == 15) {//搞来玩的，小日子投降
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("小日子已经投降" + (y - 1945).toString() + "年了😃");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 1 && dd == 1) {//元旦节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire(y.toString() + "年元旦快乐！🎉");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 3 && dd == 8) {//妇女节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("各位女神们，妇女节快乐！👩");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
l = ["非常抱歉，因为不可控原因，博客将于明天停止运营！", "好消息，日本没了！", "美国垮了，原因竟然是川普！", "微软垮了！", "你的电脑已经过载，建议立即关机！", "你知道吗？站长很喜欢你哦！", "一分钟有61秒哦", "你喜欢的人跟别人跑了！"]
if (m == 4 && dd == 1) {//愚人节，随机谎话
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire(l[Math.floor(Math.random() * l.length)]);
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 5 && dd == 1) {//劳动节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("劳动节快乐\n为各行各业辛勤工作的人们致敬！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 5 && dd == 4) {//青年节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("青年节快乐\n青春不是回忆逝去,而是把握现在！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 5 && dd == 20) {//520
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今年是520情人节\n快和你喜欢的人一起过吧！💑");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 7 && dd == 1) {//建党节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("祝中国共产党" + (y - 1921).toString() + "岁生日快乐！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 9 && dd == 10) {//教师节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("各位老师们教师节快乐！👩‍🏫");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 12 && dd == 25) {//圣诞节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("圣诞节快乐！🎄");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 8 && dd == 11) {//站长生日
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("祝站长" + (y - 1998).toString() + "岁生日快乐！🥝");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 6 && dd == 30) {//小猫咪生日
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("祝小猫咪" + (y - 1999).toString() + "岁生日快乐！🐱");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}

//传统节日部分

if ((y == 2023 && m == 4 && dd == 5) || (y == 2024 && m == 4 && dd == 4) || (y == 2025 && m == 4 && dd == 4)) {//清明节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("清明时节雨纷纷,一束鲜花祭故人💐");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((y == 2023 && m == 12 && dd == 22) || (y == 2024 && m == 12 && dd == 21) || (y == 2025 && m == 12 && dd == 21)) {//冬至
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("冬至快乐\n快吃上一碗热热的汤圆和饺子吧🧆");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}

var lunar = calendarFormatter.solar2lunar();

//农历采用汉字计算，防止出现闰月导致问题

if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")) {
  //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
  //元宵节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("元宵节快乐\n送你一个大大的灯笼🧅");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五")) {
  //端午节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("端午节快乐\n请你吃一条粽子🍙");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "七月" && lunar["IDayCn"] == "初七")) {
  //七夕节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("七夕节快乐\n黄昏后,柳梢头,牛郎织女来碰头");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五")) {
  //中秋节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("中秋节快乐\n请你吃一块月饼🍪");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "九月" && lunar["IDayCn"] == "初九")) {
  //重阳节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}

// 切换主题提醒
// if (y == 2022 && m == 12 && (dd >= 18 && dd <= 20)) {
//     if (sessionStorage.getItem("isPopupWindow") != "1") {
//         Swal.fire("网站换成冬日限定主题啦⛄");
//         sessionStorage.setItem("isPopupWindow", "1");
//     }
// }


/* 节日弹窗 end */

//----------------------------------------------------------------

window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}
// 分享本页
function share_() {
    let url = window.location.origin + window.location.pathname
    try {
        // 截取标题
        var title = document.title;
        var subTitle = title.endsWith("| Fomalhaut🥝") ? title.substring(0, title.length - 14) : title;
        navigator.clipboard.writeText('Fomalhaut🥝的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭');
        new Vue({
            data: function () {
                this.$notify({
                    title: "成功复制分享信息🎉",
                    message: "您现在可以通过粘贴直接跟小伙伴分享了！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success", 
                    duration: 5000
                });
                // return { visible: false }
            }
        })
    } catch (err) {
        console.error('复制失败！', err);
    }
    // new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
    // btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 防抖
function share() {
    debounce(share_, 300);
}

var now1 = new Date();

function createtime1() {
    var grt = new Date("17/02/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到无影博客の小家!`,
        `Future is now 🍭🍭🍭`,
        `
        
                ___.   .__                ____  
__  _  _____.__.\_ |__ |  |   ____   ____/_   | 
\ \/ \/ <   |  | | __ \|  |  /  _ \ / ___\|   | 
 \     / \___  | | \_\ \  |_(  <_> ) /_/  >   | 
  \/\_/  / ____| |___  /____/\____/\___  /|___| 
         \/          \/           /_____/        
                                              
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2022 By wyblog1",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大聪明」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临，大聪明", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by Fomalhaut🥝 %c 你正在访问无影の小家",
            "color:white; background-color:#f0ad4e",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };

var leonus = {
    linkCom: e => {
        var t = document.querySelector(".el-textarea__inner");
        "bf" == e ? (t.value = "```yml\n", t.value += "- name: \n  link: \n  avatar: \n  descr: \n  siteshot: ", t.value += "\n```", t.setSelectionRange(15, 15)) : (t.value = "站点名称：\n站点地址：\n头像链接：\n站点描述：\n站点截图：", t.setSelectionRange(5, 5)), t.focus()
    },
    owoBig: () => {
        if (!document.getElementById("post-comment") || document.body.clientWidth < 768) return;
        let e = 1,
            t = "",
            o = document.createElement("div"),
            n = document.querySelector("body");
        o.id = "owo-big", n.appendChild(o), new MutationObserver((l => {
            for (let a = 0; a < l.length; a++) {
                let i = l[a].addedNodes,
                    s = "";
                if (2 == i.length && "OwO-body" == i[1].className) s = i[1];
                else {
                    if (1 != i.length || "tk-comment" != i[0].className) continue;
                    s = i[0]
                }
                s.onmouseover = l => {
                    e && ("OwO-body" == s.className && "IMG" == l.target.tagName || "tk-owo-emotion" == l.target.className) && (e = 0, t = setTimeout((() => {
                        let e = 3 * l.path[0].clientHeight,
                            t = 3 * l.path[0].clientWidth,
                            a = l.x - l.offsetX - (t - l.path[0].clientWidth) / 2,
                            i = l.y - l.offsetY;
                        a + t > n.clientWidth && (a -= a + t - n.clientWidth + 10), a < 0 && (a = 10), o.style.cssText = `display:flex; height:${e}px; width:${t}px; left:${a}px; top:${i}px;`, o.innerHTML = `<img src="${l.target.src}">`
                    }), 300))
                }, s.onmouseout = () => {
                    o.style.display = "none", e = 1, clearTimeout(t)
                }
            }
        })).observe(document.getElementById("post-comment"), {
            subtree: !0,
            childList: !0
        })
    },
};
document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);
//响应pjax
function tonav() {
    document.getElementById("name-container").setAttribute("style", "display:none");
    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            document.getElementById("name-container").setAttribute("style", "");
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
        } else {
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
            document.getElementById("name-container").setAttribute("style", "display:none");
        }
        position = scroll;
    });
    //修复没有弄右键菜单的童鞋无法回顶部的问题
    document.getElementById("page-name").innerText = document.title.split(" | Fomalhaut🥝")[0];
}

function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");
    btf.scrollToDest(0, 500);
}

// 返回顶部显示网页阅读进度
window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}
// 数字传输滚动效果
var CountUp = function (target, startVal, endVal, decimals, duration, options) {
  var self = this;
  self.version = function () {
    return "1.9.2";
  };
  self.options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
    easingFn: easeOutExpo,
    formattingFn: formatNumber,
    prefix: "",
    suffix: "",
    numerals: [],
  };
  if (options && typeof options === "object") {
    for (var key in self.options) {
      if (options.hasOwnProperty(key) && options[key] !== null) {
        self.options[key] = options[key];
      }
    }
  }
  if (self.options.separator === "") {
    self.options.useGrouping = false;
  } else {
    self.options.separator = "" + self.options.separator;
  }
  var lastTime = 0;
  var vendors = ["webkit", "moz", "ms", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
  function formatNumber(num) {
    num = num.toFixed(self.decimals);
    num += "";
    var x, x1, x2, x3, i, l;
    x = num.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? self.options.decimal + x[1] : "";
    if (self.options.useGrouping) {
      x3 = "";
      for (i = 0, l = x1.length; i < l; ++i) {
        if (i !== 0 && i % 3 === 0) {
          x3 = self.options.separator + x3;
        }
        x3 = x1[l - i - 1] + x3;
      }
      x1 = x3;
    }
    if (self.options.numerals.length) {
      x1 = x1.replace(/[0-9]/g, function (w) {
        return self.options.numerals[+w];
      });
      x2 = x2.replace(/[0-9]/g, function (w) {
        return self.options.numerals[+w];
      });
    }
    return self.options.prefix + x1 + x2 + self.options.suffix;
  }
  function easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  }
  function ensureNumber(n) {
    return typeof n === "number" && !isNaN(n);
  }
  self.initialize = function () {
    if (self.initialized) {
      return true;
    }
    self.error = "";
    self.d = typeof target === "string" ? document.getElementById(target) : target;
    if (!self.d) {
      self.error = "[CountUp] target is null or undefined";
      return false;
    }
    self.startVal = Number(startVal);
    self.endVal = Number(endVal);
    if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
      self.decimals = Math.max(0, decimals || 0);
      self.dec = Math.pow(10, self.decimals);
      self.duration = Number(duration) * 1000 || 2000;
      self.countDown = self.startVal > self.endVal;
      self.frameVal = self.startVal;
      self.initialized = true;
      return true;
    } else {
      self.error = "[CountUp] startVal (" + startVal + ") or endVal (" + endVal + ") is not a number";
      return false;
    }
  };
  self.printValue = function (value) {
    var result = self.options.formattingFn(value);
    if (self.d.tagName === "INPUT") {
      this.d.value = result;
    } else {
      if (self.d.tagName === "text" || self.d.tagName === "tspan") {
        this.d.textContent = result;
      } else {
        this.d.innerHTML = result;
      }
    }
  };
  self.count = function (timestamp) {
    if (!self.startTime) {
      self.startTime = timestamp;
    }
    self.timestamp = timestamp;
    var progress = timestamp - self.startTime;
    self.remaining = self.duration - progress;
    if (self.options.useEasing) {
      if (self.countDown) {
        self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
      } else {
        self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
      }
    } else {
      if (self.countDown) {
        self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
      } else {
        self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
      }
    }
    if (self.countDown) {
      self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
    } else {
      self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
    }
    self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
    self.printValue(self.frameVal);
    if (progress < self.duration) {
      self.rAF = requestAnimationFrame(self.count);
    } else {
      if (self.callback) {
        self.callback();
      }
    }
  };
  self.start = function (callback) {
    if (!self.initialize()) {
      return;
    }
    self.callback = callback;
    self.rAF = requestAnimationFrame(self.count);
  };
  self.pauseResume = function () {
    if (!self.paused) {
      self.paused = true;
      cancelAnimationFrame(self.rAF);
    } else {
      self.paused = false;
      delete self.startTime;
      self.duration = self.remaining;
      self.startVal = self.frameVal;
      requestAnimationFrame(self.count);
    }
  };
  self.reset = function () {
    self.paused = false;
    delete self.startTime;
    self.initialized = false;
    if (self.initialize()) {
      cancelAnimationFrame(self.rAF);
      self.printValue(self.startVal);
    }
  };
  self.update = function (newEndVal) {
    if (!self.initialize()) {
      return;
    }
    newEndVal = Number(newEndVal);
    if (!ensureNumber(newEndVal)) {
      self.error = "[CountUp] update() - new endVal is not a number: " + newEndVal;
      return;
    }
    self.error = "";
    if (newEndVal === self.frameVal) {
      return;
    }
    cancelAnimationFrame(self.rAF);
    self.paused = false;
    delete self.startTime;
    self.startVal = self.frameVal;
    self.endVal = newEndVal;
    self.countDown = self.startVal > self.endVal;
    self.rAF = requestAnimationFrame(self.count);
  };
  if (self.initialize()) {
    self.printValue(self.startVal);
  }
};

const version = "V0.1.33"; function setCookie(cname, cvalue, exdays) { var d = new Date(); d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); var expires = "expires=" + d.toGMTString(); document.cookie = cname + "=" + cvalue + "; " + expires; }
function getCookie(cname) {
    var name = cname + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i].trim(); if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); } }
    return "";
}
function createLink(url) { let link = $(document.createElement('link')); link.attr('href', url); link.attr('rel', 'stylesheet'); link.attr('type', 'text/css'); $('link').last().after(link); }
function OrLike({ serverUrl = "", el = "", days = 30, style = "", ifont = "", icon = { like: "fa fa-thumbs-up", dislike: "fa fa-thumbs-down" }, } = {}) { this.serverUrl = serverUrl; this.el = el; this.style = style; this.ifont = ifont; this.days = days; this.icon = icon; this.ckid = ""; this.prepare(); this.init(); }
OrLike.prototype.prepare = function () {
    $(this.el).addClass("orlike-loading"); if (this.style != "") { createLink(this.style); }
    if (this.ifont != "") { createLink(this.ifont); }
}
OrLike.prototype.init = function () {
    server_url = this.serverUrl; obj = this; $.ajax({
        type: 'GET', url: server_url + '/tmp', dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, async: true, crossDomain: true, success: function (data) {
            let template = $(data.template); let icon_like = template.siblings("a.likeit.orlike").children("i"); let icon_dislike = template.siblings("a.dislikeit.orlike").children("i"); icon_like.attr('class', obj.icon.like); icon_dislike.attr('class', obj.icon.dislike); if (obj.icon.like == false)
                icon_like.remove(); if (obj.icon.dislike == false)
                icon_dislike.remove(); $(obj.el).removeClass("orlike-loading"); $(obj.el).html(template); obj.ckusr(obj); $('a.likeit.orlike').click({ obj: obj }, obj.like); $('a.dislikeit.orlike').click({ obj: obj }, obj.dislike);
        },
    });
}
OrLike.prototype.ckusr = function (obj) {
    server_url = this.serverUrl; $.ajax({
        type: 'GET', url: server_url + '/ckusr', dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, async: false, crossDomain: true, success: function (data) {
            if (data.stat == 'ok' && data.uid != "") {
                obj.ckid = data.ckid; if (!getCookie(data.ckid)) { setCookie(data.ckid, data.uid, obj.days); }
                obj.query();
            }
            else { console.error('connect orlike failed!!!'); }
        },
    });
}
OrLike.prototype.query = function () {
    server_url = this.serverUrl; $.ajax({
        type: 'GET', url: server_url + '/qry?link=' + window.location.pathname, dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, crossDomain: true, success: function (data) {
            if (data.stat == 'ok') { 
                $('a.likeit.orlike i span').text(data['like']);
                $('span.post-meta-orlike a span').text(data['like']);
                $('a.dislikeit.orlike i span').text(data['dislike']);
            }
            else { console.error('query orlike failed!!!'); }
        },
    });
}
OrLike.prototype.orl = function (obj, method) { server_url = obj.serverUrl; req_url = server_url + '/orl?method=' + method + '&link=' + window.location.pathname + '&' + obj.ckid + '=' + getCookie(obj.ckid); $.ajax({ type: 'GET', url: req_url, dataType: 'jsonp', jsonp: "callback", jsonpCallback: "success", xhrFields: { withCredentials: true }, crossDomain: true, success: function (data) { obj.query(); }, }); }
OrLike.prototype.like = function (event) { obj = event.data.obj; obj.orl(obj, 'like'); }
OrLike.prototype.dislike = function (event) { obj = event.data.obj; obj.orl(obj, 'dislike'); }

//----------------------------------------------------------------

/* 美化模块 start */

// 更新版本需要每个用户都恢复一次默认设置
if (localStorage.getItem("reset_4") == undefined) {
  localStorage.setItem("reset_4", "1");
  // 清空之前的标记值
  for (var i = 1; i <= 3; i++) {
    localStorage.removeItem("reset_" + i);
  }
  clearItem();
  setTimeout(function () {
    new Vue({
      data: function () {
        this.$notify({
          title: "提示🍒",
          message: " (｡･∀･)ﾉﾞ由于网站部分设置项更新，当前已为您重置所有设置，祝您愉快！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "success",
          duration: 8000
        });
      }
    })
  }, 1500);
}

// 清除localStorage配置项
function clearItem() {
  localStorage.removeItem('blogbg');
  localStorage.removeItem('universe');
  localStorage.removeItem('blur');
  localStorage.removeItem('fpson');
  localStorage.removeItem('transNum');
  localStorage.removeItem('blurRad');
  localStorage.removeItem('font');
  localStorage.removeItem('themeColor');
  localStorage.removeItem('rs');
  localStorage.removeItem('mouse');
  localStorage.removeItem('light');
  localStorage.removeItem('snow');
}


// 设置字体
if (localStorage.getItem("font") == undefined) {
  localStorage.setItem("font", "LXGW");
}
setFont(localStorage.getItem("font"));
function setFont(n) {
  localStorage.setItem("font", n)
  if (n == "default") {
    document.documentElement.style.setProperty('--global-font', '-apple-system');
    document.body.style.fontFamily = "-apple-system, Consolas_1, BlinkMacSystemFont, 'Segoe UI' , 'Helvetica Neue' , Lato, Roboto, 'PingFang SC' , 'Microsoft JhengHei' , 'Microsoft YaHei' , sans-serif";
  }
  else {
    document.documentElement.style.setProperty('--global-font', n);
    document.body.style.fontFamily = "var(--global-font),-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif";
  }
  try { setFontBorder(); } catch (err) { };
}

// 设置字体选择框边界
function setFontBorder() {
  var curFont = localStorage.getItem("font");
  var swfId = "swf_" + curFont;
  document.getElementById(swfId).style.border = "2px solid var(--theme-color)";
  Array.prototype.forEach.call(document.getElementsByClassName("swf"), function (ee) {
    if (ee.id != swfId) ee.style.border = "2px solid var(--border-color)";
  });
}

// 星空背景开关
if (localStorage.getItem("universe") == undefined) {
  localStorage.setItem("universe", "block");
}
setUniverse2(localStorage.getItem("universe"));
function setUniverse2(c) {
  document.getElementById("universe").style.display = c;
  localStorage.setItem("universe", c);
}
function setUniverse() {
  if (document.getElementById("universeSet").checked) {
    setUniverse2("block");
  } else {
    setUniverse2("none");
  }
}

// 雪花开关
if (localStorage.getItem("snow") == undefined) {
  localStorage.setItem("snow", "none");
}
document.getElementById("snow").style.display = localStorage.getItem("snow");
function setSnow() {
  if (document.getElementById("snowSet").checked) {
    document.getElementById("snow").style.display = "block";
    localStorage.setItem("snow", "block");
  } else {
    document.getElementById("snow").style.display = "none";
    localStorage.setItem("snow", "none");
  }
}


// 帧率监测开关
if (localStorage.getItem("fpson") == undefined) {
  localStorage.setItem("fpson", "1");
}
function fpssw() {
  if (document.getElementById("fpson").checked) {
    localStorage.setItem("fpson", "1");
  } else {
    localStorage.setItem("fpson", "0");
  }
  setTimeout(reload, 600);
}

// 刷新窗口
function reload() {
  window.location.reload();
}

// 侧边栏开关
if (localStorage.getItem("rs") == undefined) {
  localStorage.setItem("rs", "block");
}
if (localStorage.getItem("rs") == "block") {
  document.getElementById("rightSide").innerText = `:root{--rightside-display: block}`;
} else {
  document.getElementById("rightSide").innerText = `:root{--rightside-display: none}`;
}
function toggleRightside() {
  // 先设置localStorage变量
  if (document.getElementById("rightSideSet").checked) {
    localStorage.setItem("rs", "block");
    document.getElementById("rightSide").innerText = `:root{--rightside-display: block}`;
  } else {
    localStorage.setItem("rs", "none");
    document.getElementById("rightSide").innerText = `:root{--rightside-display: none}`;
  }
}

// 更换背景(原来Leonus的代码)
// 存数据
// name：命名 data：数据
// function saveData(name, data) {
//   localStorage.setItem(name, JSON.stringify({ time: Date.now(), data: data }));
// }
// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
// function loadData(name, time) {
//   let d = JSON.parse(localStorage.getItem(name));
//   // 过期或有错误返回 0 否则返回数据
//   if (d) {
//     let t = Date.now() - d.time;
//     if (t < time * 60 * 1000 && t > -1) return d.data;
//   }
//   return 0;
// }
// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用
// 读取背景
// try {
//   let data = loadData("blogbg", 1440);
//   if (data) changeBg(data, 1);
//   else localStorage.removeItem("blogbg");
// } catch (error) {
//   localStorage.removeItem("blogbg");
// }
// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
// function changeBg(s, flag) {
//   let bg = document.getElementById("web_bg");
//   if (s.charAt(0) == "#") {
//     bg.style.backgroundColor = s;
//     bg.style.backgroundImage = "none";
//   } else {
//     bg.style.backgroundImage = s
//   };
//   if (!flag) {
//     saveData("blogbg", s);
//   }
// }

// 切换自定义颜色
var defineColor = localStorage.getItem("blogbg") && localStorage.getItem("blogbg").charAt(0) == '#' ? localStorage.getItem("blogbg") : '#F4D88A';
function changeBgColor() {
  changeBg(document.querySelector("#define_colors").value);
}

// 必应每日壁纸API
let bingDayBg = screen.width <= 768 ? "url(https://bing.img.run/m.php)" : "url(https://bing.img.run/1920x1080.php)";
// 必应历史壁纸API
let bingHistoryBg = screen.width <= 768 ? "url(https://bing.img.run/rand_m.php)" : "url(https://bing.img.run/rand.php)";
// EEE.DOG
let EEEDog = "url(https://api.yimian.xyz/img?type=moe&size=1920x1080)";
// 随机美图cdn.seovx.com
let seovx = "url(https://cdn.seovx.com/?mom=302)";
// picsum随机
let picsum = "url(https://picsum.photos/1920/1080.webp)";
// 小歪二次元
// let waiDongman = "url(https://api.ixiaowai.cn/api/api.php)";
//  小歪高清壁纸
let waiBizhi = "url(https://api.ixiaowai.cn/gqapi/gqapi.php)";
// 博天随机
let btstu = "url(http://api.btstu.cn/sjbz/?lx=suiji)";
// tuapi 动漫
// let tuapi = "url(https://tuapi.eees.cc/api.php?category=dongman)";
// unsplash随机 https://source.unsplash.com/random/1920x1080/daily (weekly)
let unsplash = "url(https://source.unsplash.com/random/1920x1080/)";


// 更换背景(自己的代码)
if (localStorage.getItem("blogbg") != undefined) {
  setBg(localStorage.getItem("blogbg"));
} else {
  document.getElementById("defineBg").innerText = `:root{
    --default-bg: url(https://lskypro.acozycotage.net/Fomalhaut/img/dm14.webp);
    --darkmode-bg:url(https://lskypro.acozycotage.net/Fomalhaut/img/yuanshen1.webp);
    --mobileday-bg: url(https://lskypro.acozycotage.net/Fomalhaut/img/snow.webp);
    --mobilenight-bg: url(https://lskypro.acozycotage.net/Fomalhaut/img/mb8.webp);
  }`;
}
// 切换背景主函数
function changeBg(s) {
  // 自定义颜色框
  defineColor = s.charAt(0) == "#" ? s : '#F4D88A';
  setBg(s);
  localStorage.setItem("blogbg", s);
}
// 设置背景属性
function setBg(s) {
  document.getElementById("defineBg").innerText = `:root{
    --default-bg: ${s};
    --darkmode-bg: ${s};
    --mobileday-bg: ${s};
    --mobilenight-bg: ${s};
  }`;
}

// 切换链接对应的背景(加入了链接检验与防抖)
function getPicture() {
  debounce(getPicture_, 300);
}

function getPicture_() {
  checkImgExists(document.getElementById("pic-link").value).then(() => {
    // 有效的图片链接
    var link = "url(" + document.getElementById("pic-link").value + ")";
    changeBg(link);
    // 提示切换成功
    new Vue({
      data: function () {
        this.$notify({
          title: "可以啦🍨",
          message: "切换自定义背景成功！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "success",
          duration: 5000
        });
      }
    })
  }).catch(() => {
    // 无效的图片链接，提示无效
    new Vue({
      data: function () {
        this.$notify({
          title: "链接不对🤣",
          message: "请输入有效的图片链接！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "warning",
          duration: 5000
        });
      }
    })
  })
}
// 判断图片链接是否可用
function checkImgExists(imgurl) {
  return new Promise(function (resolve, reject) {
    var ImgObj = new Image();
    ImgObj.src = imgurl;
    ImgObj.onload = function (res) {
      resolve(res);
    }
    ImgObj.onerror = function (err) {
      reject(err);
    }
  })
}

// 黑夜霓虹灯开关
if (localStorage.getItem("light") == undefined) {
  localStorage.setItem("light", "true");
}
// 更换霓虹灯状态
function changeLight(flag) {
  if (document.getElementById("site-name"))
    document.getElementById("site-name").style.animation = flag ? "light_15px 10s linear infinite" : "none";
  if (document.getElementById("site-title"))
    document.getElementById("site-title").style.animation = flag ? "light_15px 10s linear infinite" : "none";
  if (document.getElementById("site-subtitle"))
    document.getElementById("site-subtitle").style.animation = flag ? "light_10px 10s linear infinite" : "none";
  if (document.getElementById("post-info"))
    document.getElementById("post-info").style.animation = flag ? "light_5px 10s linear infinite" : "none";
  document.getElementById("menu_shadow").innerText = flag ? `:root{--menu-shadow: 0 0 1px var(--theme-color);}` : `:root{--menu-shadow: none;}`;
}



// 解决开启Pjax的问题
// function whenDOMReady() {
//   try {
//     let data = loadData('blogbg', 1440)
//     if (data) changeBg_noWindow(data, 0)
//     else localStorage.removeItem('blogbg');
//   } catch (error) { localStorage.removeItem('blogbg'); }
// }
// whenDOMReady()
// document.addEventListener("pjax:success", whenDOMReady)

// 无弹窗提醒更换背景
// function changeBg_noWindow(s, flag) {
//   let bg = document.getElementById("web_bg");
//   if (s.charAt(0) == "#") {
//     bg.style.backgroundColor = s;
//     bg.style.backgroundImage = "none";
//   } else bg.style.backgroundImage = s;
//   if (!flag) {
//     saveData("blogbg", s);
//   }
// }

// 创建窗口
var winbox = "";

function createWinbox() {
  let div = document.createElement("div");
  document.body.appendChild(div);
  winbox = WinBox({
    id: "meihuaBox",
    index: 99,
    title: "美化设置",
    x: "left",
    y: "center",
    minwidth: "300px",
    height: "60%",
    // "#76c8f1"
    background: 'var(--btn-bg)',
    onmaximize: () => {
      div.innerHTML = `<style>body::-webkit-scrollbar {display: none;} div#meihuaBox {width: 100% !important;}</style>`;
    },
    onrestore: () => {
      div.innerHTML = "";
    },
  });
  winResize();
  window.addEventListener("resize", winResize);

  // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
  winbox.body.innerHTML = `
<div class="settings" style="display: block;">
<div id="article-container" style="padding:12px;">
<br>
<h2>一、显示偏好</h2>
</div>
<div class="content" style="display:flex">
  <div class="content-text" style="font-weight:bold; padding-left:10px"> 星空特效 (夜间模式) </div><input type="checkbox" id="universeSet" onclick="setUniverse()">
  <div class="content-text" style="font-weight:bold; padding-left:20px"> 霓虹灯 (夜间模式) </div><input type="checkbox" id="lightSet" onclick="setLight()">
</div>
<div class="content" style="display:flex">
  <div class="content-text" style="font-weight:bold; padding-left:10px"> 模糊效果 (消耗性能) </div><input type="checkbox" id="blur" onclick="setBlur()">
  <div class="content-text" style="font-weight:bold; padding-left:20px"> 侧边栏 (默认开) </div><input type="checkbox" id="rightSideSet" onclick="toggleRightside()">
</div>
<div class="content" style="display:flex">
  <div class="content-text" style="font-weight:bold; padding-left:10px"> 帧率监测 (刷新生效) </div><input type="checkbox" id="fpson" onclick="fpssw()">
  <div class="content-text" style="font-weight:bold; padding-left:10px"> 雪花特效 (白天模式) </div><input type="checkbox" id="snowSet" onclick="setSnow()">
</div>
<h2>二、字体设置</h2>
{% note warning modern %}非商免字体未经授权只能个人使用。本站为完全非商业、非盈利性质的网站，平时用于个人学习交流，如有侵权请联系站长删除，谢谢！ —— 致版权方{% endnote %}
<p id="swfs">
<a class="swf" id="swf_ZhuZiAWan" href="javascript:;" rel="noopener external nofollow" style="font-family:'ZhuZiAWan'!important;color:black" onclick="setFont('ZhuZiAWan')">筑紫A丸标准体2.0</a>
<a class="swf" id="swf_HYTMR" href="javascript:;" rel="noopener external nofollow" style="font-family:'HYTMR'!important;color:black" onclick="setFont('HYTMR')">汉仪唐美人</a>
<a class="swf" id="swf_LXGW" href="javascript:;" rel="noopener external nofollow" style="font-family:'LXGW'!important;color:black" onclick="setFont('LXGW')">霞鹜文楷</a>
<a class="swf" id="swf_TTQHB" href="javascript:;" rel="noopener external nofollow" style="font-family:'TTQHB'!important;color:black" onclick="setFont('TTQHB')">甜甜圈海报</a>
<a class="swf" id="swf_YSHST" href="javascript:;" rel="noopener external nofollow" style="font-family:'YSHST'!important;color:black" onclick="setFont('YSHST')">优设好身体</a>
<a class="swf" id="swf_MiSans" href="javascript:;" rel="noopener external nofollow" style="font-family:'MiSans'!important;color:black" onclick="setFont('MiSans')">MiSans</a>
<a class="swf" id="swf_default" href="javascript:;" rel="noopener external nofollow" style="font-family:-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif;!important;color:black" onclick="setFont('default')">系统默认</a>
</p>
<h2>三、背景设置</h2>
<center><button onclick="resetBg()" style="background:var(--theme-color);display:block;width:35%;padding:15px 0;border-radius:30px;color:white;"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;恢复默认背景</button></center>
<h3>1. 二次元</h3>
{% folding cyan, 查看二次元背景 %}
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/home_bg.webp)" class="imgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/home_bg.webp)')"></a>
</div>
{% endfolding %}
<h3>2. 风景</h3>
{% folding cyan, 查看风景背景 %}
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/fj1.webp)" class="imgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/fj1.webp)')"></a>
</div>
{% endfolding %}
<h3>3. 萌宠</h3>
{% folding cyan, 查看萌宠背景 %}
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/mc1.webp)" class="imgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/mc1.webp)')"></a>
</div>
{% endfolding %}
<h3>4. 渐变色</h3>
{% folding cyan, 查看渐变色背景 %}
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #544a7d, #ffd452)" onclick="changeBg('linear-gradient(to right, #544a7d, #ffd452)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)" onclick="changeBg('linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to left, #654ea3, #eaafc8)" onclick="changeBg('linear-gradient(to left, #654ea3, #eaafc8)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)" onclick="changeBg('linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #d3959b, #bfe6ba)" onclick="changeBg('linear-gradient(to top, #d3959b, #bfe6ba)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #8360c3, #2ebf91)" onclick="changeBg('linear-gradient(to top, #8360c3, #2ebf91)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #108dc7, #ef8e38)" onclick="changeBg('linear-gradient(to top, #108dc7, #ef8e38)')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)" onclick="changeBg('linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)')"></a>
</div>
{% endfolding %}
<h3>5. 纯色</h3>
{% folding cyan, 查看纯色背景 %}
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ecb1b1" onclick="changeBg('#ecb1b1')"></a> 
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d3ebac" onclick="changeBg('#d3ebac')"></a> 
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ace9ce" onclick="changeBg('#ace9ce')"></a>
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #c1ebea" onclick="changeBg('#c1ebea')"></a> 
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #dee7f1" onclick="changeBg('#dee7f1')"></a> 
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #e9e3f2" onclick="changeBg('#e9e3f2')"></a> 
<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #f7eff5" onclick="changeBg('#f7eff5')"></a>  
<input type="color" id="define_colors" href="javascript:;" rel="noopener external nofollow" class="box" autocomplete="on" value="${defineColor}" oninput="changeBgColor()"></input>
</div>
{% endfolding %}
<h3>6. 适配手机</h3>
{% folding cyan, 查看适配手机的背景 %}
<div class="bgbox">
<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/mb4.webp)" class="pimgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/mb4.webp)')"></a>
</div>
{% endfolding %}
<h3>8. 自定义背景</h3>
{% folding cyan, 设置自定义背景 %}
<p><center>
<input type="text" id="pic-link" size="70%" maxlength="1000" placeholder="请输入有效的图片链接，如 https://source.fomal.cc/img/home_bg.webp">
</center></p>
<p><center>
<button type="button" onclick="getPicture()" style="background:var(--theme-color);width:35%;padding: 5px 0px 7px 0px;border-radius:30px;color:white;line-height:2;">🌈切换背景🌈</button>
</center></p>
{% endfolding %}
<br>
<center><div style="font-size:1.2em;color:var(--theme-color);font-weight:bold;">------ ( •̀ ω •́ )y 到底啦 ------</div></center>
<br>
</div>
</div>
`;

  // 打开小窗时候初始化
  $("#" + localStorage.getItem("themeColor")).attr("checked", true);
  if (localStorage.getItem("blur") == 1) {
    document.getElementById("blur").checked = true;
  } else {
    document.getElementById("blur").checked = false;
  }
  if (localStorage.getItem("universe") == "block") {
    document.getElementById("universeSet").checked = true;
  } else if (localStorage.getItem("universe") == "none") {
    document.getElementById("universeSet").checked = false;
  }
  if (localStorage.getItem("fpson") == "1") {
    document.getElementById("fpson").checked = true;
  } else {
    document.getElementById("fpson").checked = false;
  }
  if (localStorage.getItem("rs") == "block") {
    document.getElementById("rightSideSet").checked = true;
  } else if (localStorage.getItem("rs") == "none") {
    document.getElementById("rightSideSet").checked = false;
  }
  if (localStorage.getItem("light") == "true") {
    document.getElementById("lightSet").checked = true;
  } else {
    document.getElementById("lightSet").checked = false;
  }
  setFontBorder();
  if (localStorage.getItem("snow") == "block") {
    document.getElementById("snowSet").checked = true;
  } else if (localStorage.getItem("snow") == "none") {
    document.getElementById("snowSet").checked = false;
  }
}

// 恢复默认背景
function resetBg() {
  localStorage.removeItem('blogbg');
  reload();
}

// 恢复默认设置并刷新页面
function reset() {
  clearItem();
  reload();
}

// 适应窗口大小
function winResize() {
  try {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
      winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
      winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
  } catch (err) {
    // console.log("Pjax毒瘤抽风运行winResize方法🙄🙄🙄");
  }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
  if (document.querySelector("#meihuaBox")) {
    winbox.toggleClass("hide");
  } else {
    createWinbox();
  };
}

/* 美化模块 end */
