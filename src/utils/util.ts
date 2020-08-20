// 千位，分割数字
export function formatNumber(num: string | number = "") {
  let decimalPart = "";
  num = num.toString();
  if (num.indexOf(".") != -1) {
    decimalPart = "." + num.split(".")[1];
    num = parseInt(num.split(".")[0]);
  }
  let array = num.toString().split("");
  let index = -3;
  while (array.length + index > 0) {
    array.splice(index, 0, ",");
    index -= 4;
  }
  return array.join("") + decimalPart;
}

export function millisecondToTimestr(milliseconds: number, hasDay = false) {
  var c = milliseconds;
  var d, h, m, s, ms;
  (d = parseInt((c / 1000 / 60 / 60 / 24).toString())),
    (h = parseInt((c / 1000 / 60 / 60 - 24 * d).toString())),
    (m = parseInt((c / 1000 / 60 - 24 * 60 * d - 60 * h).toString())),
    (s = parseInt(
      (c / 1000 - 24 * 60 * 60 * d - 60 * 60 * h - 60 * m).toString()
    ));
  ms = Math.floor(
    (c -
      24 * 60 * 60 * 1000 * d -
      60 * 60 * 1000 * h -
      60 * 1000 * m -
      s * 1000) /
      100
  );
  var hh, mm: any, ss;
  let seconds = milliseconds / 1000;
  // 传入的时间为空或小于0
  if (seconds == null || seconds < 0) {
    return;
  }
  seconds = Math.ceil(seconds);
  // 得到小时
  hh = (seconds / 3600) | 0;
  seconds = seconds - hh * 3600;
  if (hh < 10) {
    hh = `0${hh}`;
  }
  // 得到分
  mm = (seconds / 60) | 0;
  if (mm < 10) {
    mm = `0${mm.toString()}`;
  }
  // 得到秒
  ss = seconds - mm * 60;
  if (ss < 10) {
    ss = `0${ss}`;
  }

  if (hasDay) {
    const day = Math.floor(Number(hh) / 24);
    const dayH = Math.floor(Number(hh) % 24);
    const dayHh = dayH < 10 ? `0${dayH}` : dayH;
    if (day) {
      return `${day}天 ${dayHh}:${mm}:${ss}.${ms}`;
    } else {
      return `${hh}:${mm}:${ss}`;
    }
  }
  return `${mm}:${ss}`;
}

export function secondsToTimestr(seconds: number, hasHour = false) {
  var hh, mm: any, ss;
  // 传入的时间为空或小于0
  if (seconds == null || seconds < 0) {
    return;
  }
  seconds = Math.ceil(seconds);
  // 得到小时
  hh = (seconds / 3600) | 0;
  seconds = seconds - hh * 3600;
  if (hh < 10) {
    hh = `0${hh}`;
  }
  // 得到分
  mm = (seconds / 60) | 0;
  if (mm < 10) {
    mm = `0${mm.toString()}`;
  }
  // 得到秒
  ss = seconds - mm * 60;
  if (ss < 10) {
    ss = `0${ss}`;
  }
  if (hasHour) {
    return `${hh}:${mm}:${ss}`;
  }
  return `${mm}:${ss}`;
}

// 时间戳转时间 2018.8.29 15:30
export function toTime(timestamp: any) {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + ".";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + ".";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return Y + M + D + h + m;
}

export function toTimeZh(timestamp: any) {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "年";
  var M = date.getMonth() + 1 + "月";
  var D = date.getDate() + "日";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return Y + M + D + h + m;
}

export function getParam() {
  let url = location.search; //获取url中"?"符后的字串
  let theRequest: any = {};
  if (url.indexOf("?") != -1) {
    let str = url.substr(1);
    let strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
