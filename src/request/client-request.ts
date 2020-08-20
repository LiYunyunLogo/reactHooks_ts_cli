import request from "./zysrf-app";
import Os from "@/utils/os";

// 打开新页面
// "pageName":"h5",//userCenter个人中心，exchangeToCash  体现
export function openPage(
  pageName: string,
  url: string = "",
  params: any = {},
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "openPage",
    {
      pageName,
      url,
      ...params
    },
    _cb_ok
  );
}

// 公共缓存
// "action":"1",//1保存，2，读取，3，删除
//     "key":"aa",
//     "value":"111"
export function nativeCache(action: string, key: string, value: string) {
  request.clientRequest("nativeCache", {
    action,
    key,
    value
  });
}

// 返回
export function goBack() {
  request.clientRequest("goback", {});
}

// 获取公共参数
export function getCommonParams(_cb_ok: any) {
  request.clientRequest("getCommonParams", {}, _cb_ok);
}

// 获取用户信息
export function getAccountInfo(_cb_ok: any) {
  request.clientRequest("getAccountInfo", {}, _cb_ok);
}
// 检查权限是否开启
export function checkAppPermissionStatus(_cb_ok: any) {
  request.clientRequest("checkAppPermissionStatus", {}, _cb_ok);
}
// 申请权限
export function requestAppPermission(_cb_ok: any) {
  request.clientRequest("requestAppPermission", {}, _cb_ok);
}

// 活动日志上报
export function uploadActivityLog(
  actentryid: string,
  visitplatform: string,
  actid: string,
  entrytype: string,
  materialid: string,
  type: string,
  subactid: string = "null"
) {
  console.log(
    actentryid,
    visitplatform,
    actid,
    entrytype,
    materialid,
    type,
    subactid
  );
  request.clientRequest("uploadActivityLog", {
    actentryid,
    visitplatform,
    actid,
    entrytype,
    materialid,
    type,
    subactid
  });
}

// 更新客户端缓存
export function fetchOrUpdateCoins(coin: number) {
  request.clientRequest("fetchOrUpdateCoins", {
    action: "1",
    currentCoins: coin
  });
}

// toast
export function toast(msg: string) {
  request.clientRequest("alert", {
    msg
  });
}

// 更改状态栏颜色
export function changeStatusBarTextColor(type: number) {
  request.clientRequest("changeStatusBarTextColor", { type });
}

// 退出登录
export function goToViewLogin() {
  request.clientRequest("goToViewLogin", {});
}

// 关闭当前页面
export function goback() {
  request.clientRequest("goback", {});
}

// 打开qq群
export function openQQGroup(num: number) {
  let params: any = {};
  if (Os.android) {
    params = {
      android_key: "-sjY-vZMe54YxYwGBaV54J7aGT5676QC"
    };
  } else {
    params = {
      uin: num,
      ios_key:
        "3a4bb59e2f57475310e0f226ef5e7a1161773d0ec856f13064d4ec1773cef073"
    };
  }
  request.clientRequest("openQQGroup", params);
}

// 云控
export function getPollingData(_cb_ok: any) {
  request.clientRequest("getPollingData", {}, _cb_ok);
}

// 打开微信
export function openWechat() {
  request.clientRequest("openWechat", {});
}

// 填写邀请码
export function inviteCodeSuccess() {
  request.clientRequest("inviteCodeSuccess", {});
}

// loading
export function showLoading() {
  request.clientRequest("showLoading", {});
}

// 取消loading
export function hideLoading() {
  request.clientRequest("hideLoading", {});
}

// 绑定微信
export function bindWechat(_cb_ok: any) {
  request.clientRequest("bindWechatWithAuthorizationInfo", {}, _cb_ok);
}

// 复制到剪贴板
export function copytoClipboard(content: string) {
  request.clientRequest("copytoClipboard", { content });
}

// 邀请好友    -------------------------6.0.5  改新
export function inviteFriend(
  from: string,
  qid: string,
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "inviteFriend",
    {
      platform: "weChat",
      from: from,
      qid: qid
    },
    _cb_ok
  );
}

// 鼠卡分享
export function shareMousePoster(index: number, _cb_ok: any = () => {}) {
  request.clientRequest(
    "shareMousePoster",
    {
      platform: "weChat",
      from: "3",
      qid: "ccyyaoqing2",
      imageIndex: index
    },
    _cb_ok
  );
}
// --------------------------------6.0.4--------------------------------
// 保存图片
export function saveBase64Img(imageDataBase64: string, _cb_ok: any = () => {}) {
  request.clientRequest(
    "saveBase64Img",
    {
      imageDataBase64,
      fileType: "png"
    },
    _cb_ok
  );
}

// 分享图片
export function shareBase64Img(
  imageDataBase64: string,
  platform: string,
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "shareBase64Img",
    {
      imageDataBase64,
      platform, //weChat  weChatZone
      fileType: "png" //png jpg 文件后缀
    },
    _cb_ok
  );
}

// 微信卡片分享
export function shareCard(
  webpageUrl: string,
  title: string,
  description: string,
  platform: string,
  shareThumb: string,
  _cb_ok: any = () => {}
) {
  request.clientRequest(
    "shareCard",
    {
      webpageUrl,
      title,
      description,
      platform, //weChat  weChatZone
      shareThumb //卡片分享 图片 base64
    },
    _cb_ok
  );
}

// banner广告
export function showBanner(position: string, _cb_ok: any = () => {}) {
  request.clientRequest("showBanner", { position }, _cb_ok);
}

export function hideBanner(position: string, _cb_ok: any = () => {}) {
  request.clientRequest("hideBanner", { position }, _cb_ok);
}

// 视频广告
export function excitationVideo(type: string, _cb_ok: any = () => {}) {
  request.clientRequest("excitationVideo", { type }, _cb_ok);
}

// --------------------------------6.0.5--------------------------------
// 取消loading
export function goRoot() {
  request.clientRequest("goRoot", {});
}

// --------------------------------6.0.6--------------------------------

// 获取面对面的二维码图片
export function getQRInviteStr(from: string, qid: string, _cb_ok: any) {
  request.clientRequest(
    "getQRInviteStr",
    {
      platform: "weChat",
      from: from,
      qid: qid
    },
    _cb_ok
  );
}

// --------------------------------6.1.3--------------------------------
export function activeShare(params: any) {
  request.clientRequest("activeShare", { ...params });
}
// --------------------------------6.1.5--------------------------------
//是否存在京东金融app
export function isApkInstalled(pkgName: string, _cb_ok: any) {
  request.clientRequest("isApkInstalled", { pkgName }, _cb_ok);
}

//唤醒app
export function wakeUpAppByPackageName(pkgName: string) {
  request.clientRequest("wakeUpAppByPackageName", { pkgName });
}

//京东app下载
export function appDownload(downloadUrl: string, pkgName: string, _cb_ok: any) {
  request.clientRequest("appDownload", { downloadUrl, pkgName }, _cb_ok);
}

// openUrl
export function openUrl(url: string = "", _cb_ok: any = () => {}) {
  request.clientRequest("openUrl", { url }, _cb_ok);
}
