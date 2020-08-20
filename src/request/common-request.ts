import request from "./zysrf-app";
import api from "@/api";

// 风控参数
const fengkong = {
  tsid: "__tsid__",
  accountname: "__accountname__",
  avator: "__avator__",
  nickname: "__nickname__",
  installedwechat: "__installedwechat__",
  smdeviceid: "__smdeviceid__",
  appinfo: "__appinfo__",
  appinfolist: "__appinfolist__",
  startingprogram: "__startingprogram__",
  installphone: "__installphone__",
  installtime: "__installtime__",
  usertype: "__usertype__",
  laststat: "__laststat__",
  thisstat: "__thisstat__"
};

// 红包雨领红包
export const red_rain = (_cb_ok: any) => {
  const _url = api.path.activites.red_rain;
  request.commonRequest(_url, {}, _cb_ok);
};
//获取晒单列表
export const get_Order_list = (_cb_ok: any) => {
  const _url = api.path.activites.get_order_list;
  request.commonRequest(_url, {}, _cb_ok);
};
//-@@@百万现金-
//获取用户信息
export const get_info = (obj: any, _cb_ok: any) => {
  const _url = api.path.activites.get_info;
  request.commonRequest(_url, obj, _cb_ok);
};
//领取签到奖励
export const get_qiandao_money = (obj: any, _cb_ok: any) => {
  const _url = api.path.activites.get_qiandao_money;
  request.commonRequest(_url, obj, _cb_ok);
};
//整点领取红包
export const get_money = (obj: any, _cb_ok: any) => {
  const _url = api.path.activites.get_money;
  console.log(_url);
  request.commonRequest(_url, obj, _cb_ok);
};
//分享获取
export const share_get_money = (obj: any, _cb_ok: any) => {
  const _url = api.path.activites.share_get_money;
  console.log(_url);
  request.commonRequest(_url, obj, _cb_ok);
};
//红包雨获取
export const red_money = (obj: any, _cb_ok: any) => {
  const _url = api.path.activites.red_money;
  console.log(_url);
  request.commonRequest(_url, obj, _cb_ok);
};
//是否展示jd展示入口
export const jdjr = (obj: any, _cb_ok: any) => {
  const _url = api.path.wellet.jdjr;
  // console.log(_url,'jdjr');
  // console.log(obj,'jdjr');
  request.commonRequest(_url, obj, _cb_ok);
};
//jd下单接口
export const jdorder = (obj: any, _cb_ok: any) => {
  const _url = api.path.wellet.jdorder;
  request.commonRequest(_url, obj, _cb_ok);
};

// 升级接口
export const androidupdate = (_cb_ok: any) => {
  const _url = api.path.androidupdate;
  request.commonRequest(_url, {}, _cb_ok);
};

// 获取金币余额
export const select_bonus = (_cb_ok: any) => {
  const _url = api.path.wellet.select_bonus;
  request.commonRequest(_url, {}, _cb_ok);
};

// 获取金币列表
export const detail_bonus = (pagekey: string, _cb_ok: any) => {
  const _url = api.path.wellet.detail_bonus;
  request.commonRequest(_url, { pagekey }, _cb_ok);
};

// 金币状态
export const user_status = (_cb_ok: any) => {
  const _url = api.path.wellet.user_status;
  request.commonRequest(_url, {}, _cb_ok);
};

// 获取提现选项
export const cashitem = (_cb_ok: any) => {
  const _url = api.path.wellet.cashitem;
  request.commonRequest(_url, {}, _cb_ok);
};

// 绑定提现账号
export const bind = (params: any, _cb_ok: any) => {
  const _url = api.path.wellet.bind;
  request.commonRequest(_url, params, _cb_ok);
};

// 20提现7日签到
export const condition = (_cb_ok: any) => {
  const _url = api.path.wellet.condition;
  request.commonRequest(_url, {}, _cb_ok);
};

// 获取已绑定的提现账号
export const get_bind = (_cb_ok: any) => {
  const _url = api.path.wellet.get_bind;
  request.commonRequest(_url, {}, _cb_ok);
};

// 提现验证码
export const txyzm = (_cb_ok: any) => {
  const _url = api.path.wellet.txyzm;
  request.commonRequest(_url, {}, _cb_ok);
};

// 提现下单
export const create_order = (params: any, _cb_ok: any) => {
  const _url = api.path.wellet.create_order;
  request.commonRequest(_url, { ...params, ...fengkong }, _cb_ok);
};

// 身份验证信息
export const identify_info = (_cb_ok: any) => {
  const _url = api.path.wellet.identify_info;
  request.commonRequest(_url, {}, _cb_ok);
};

// 身份验证信息
export const identify_info_submit = (params: any, _cb_ok: any) => {
  const _url = api.path.wellet.identify_info_submit;
  request.commonRequest(_url, params, _cb_ok);
};

// 提现记录
export const get_orders = (params: any, _cb_ok: any) => {
  const _url = api.path.wellet.get_orders;
  request.commonRequest(_url, params, _cb_ok);
};

// 用户注销
export const destroy_account = (_cb_ok: any) => {
  const _url = api.path.destroy_account;
  request.commonRequest(_url, {}, _cb_ok);
};

// 填写邀请码
export const type_invitation_code = (code: string, _cb_ok: any) => {
  const _url = api.path.type_invitation_code;
  request.commonRequest(_url, { code, ...fengkong }, _cb_ok);
};

// 获取鼠卡活动信息
export const get_mouse = (_cb_ok: any) => {
  const _url = api.path.activites.get_mouse;
  request.commonRequest(_url, {}, _cb_ok);
};

// 领取鼠卡
export const get_card = (type: string, _cb_ok: any) => {
  const _url = api.path.activites.get_card;
  request.commonRequest(_url, { type: type }, _cb_ok);
};

// 分享鼠卡
export const share_card = (_cb_ok: any) => {
  const _url = api.path.activites.share_card;
  request.commonRequest(_url, {}, _cb_ok);
};

// 九宫格 首页
export const lottery_index = (_cb_ok: any) => {
  const _url = api.path.lottery.index;
  request.commonRequest(_url, {}, _cb_ok);
};

// 九宫格 免费抽奖
export const freeAward = (_cb_ok: any) => {
  const _url = api.path.lottery.freeAward;
  request.commonRequest(_url, {}, _cb_ok);
};

// 九宫格 金币抽奖
export const buyAward = (_cb_ok: any) => {
  const _url = api.path.lottery.buyAward;
  request.commonRequest(_url, {}, _cb_ok);
};
// 九宫格 福气抽奖
export const luckyAward = (_cb_ok: any) => {
  const _url = api.path.lottery.luckyAward;
  request.commonRequest(_url, {}, _cb_ok);
};

// 九宫格 更新视频次数
export const updateWatch = (watch_index: number, _cb_ok: any) => {
  const _url = api.path.lottery.updateWatch;
  console.log(watch_index);
  request.commonRequest(_url, { watch_index }, _cb_ok);
};

// 九宫格 获取体力
export const game = (_cb_ok: any) => {
  const _url = api.path.lottery.game;
  request.commonRequest(_url, {}, _cb_ok);
};

// 生词本 列表
export const notebook = (_cb_ok: any) => {
  const _url = api.path.activites.notebook;
  request.commonRequest(_url, {}, _cb_ok);
};

// 生词本 删除
export const notebook_rem = (idiom: string, _cb_ok: any) => {
  const _url = api.path.activites.notebook_rem;
  request.commonRequest(_url, { idiom }, _cb_ok);
};
// 生词本 添加
export const notebook_add = (idiom: string, _cb_ok: any) => {
  const _url = api.path.activites.notebook_add;
  request.commonRequest(_url, { idiom }, _cb_ok);
};

// 生词本 shiyi
export const notebook_detail = (idiom: string, _cb_ok: any) => {
  const _url = api.path.activites.notebook_detail;
  request.commonRequest(_url, { idiom }, _cb_ok);
};

// 神兽
export const dividend = (_cb_ok: any) => {
  const _url = api.path.activites.dividend;
  request.commonRequest(_url, {}, _cb_ok);
};
//神兽 进度
export const dividend_collect = (_cb_ok: any) => {
  const _url = api.path.activites.dividend_collect;
  request.commonRequest(_url, {}, _cb_ok);
};
// 神兽 领取神兽
export const dividend_receive = (_cb_ok: any) => {
  const _url = api.path.activites.dividend_receive;
  request.commonRequest(_url, { tmp: 0 }, _cb_ok);
};
// 神兽 今日分红
export const dividend_records = (key: string, _cb_ok: any) => {
  const _url = api.path.activites.dividend_records;
  request.commonRequest(_url, { key }, _cb_ok);
};
// 神兽 进度条诊断
export const dividend_guide = (_cb_ok: any) => {
  const _url = api.path.activites.dividend_guide;
  request.commonRequest(_url, {}, _cb_ok);
};

//  邀请
export const dividend_invite = (_cb_ok: any) => {
  const _url = api.path.activites.dividend_invite;
  request.commonRequest(_url, { tmp: 0 }, _cb_ok);
};

//  邀请列表
export const dividend_invite_list = (
  page: string,
  type: string,
  _cb_ok: any
) => {
  const _url = api.path.activites.dividend_invite_list;
  request.commonRequest(_url, { tmp: 0, page, type }, _cb_ok);
};

//  集拼图送手机，获取首页列表信息
export const debris_list = (_cb_ok: any) => {
  const _url = api.path.sendphone.index;
  // 地址  参数  回调
  request.commonRequest(_url, {}, _cb_ok);
};
// 集拼图送手机，领碎片
export const collecting_debris = (_cb_ok: any) => {
  const _url = api.path.sendphone.collectingDebris;
  request.commonRequest(_url, {}, _cb_ok);
};
//集拼图送手机，领碎片,兑换金币
export const getCoin = (obj: any, _cb_ok: any) => {
  const _url = api.path.sendphone.getBonus;
  request.commonRequest(_url, obj, _cb_ok);
};
// 摇骰子 用户信息
export const griddle_get_info = (_cb_ok: any) => {
  const _url = api.path.activites.griddle_get_info;
  request.commonRequest(_url, {}, _cb_ok);
};
// 摇骰子 摇
export const griddle_draw_info = (_cb_ok: any) => {
  const _url = api.path.activites.griddle_draw_info;
  request.commonRequest(_url, {}, _cb_ok);
};
// 摇骰子 提现
export const griddle_get_hundred = (_cb_ok: any) => {
  const _url = api.path.activites.griddle_get_hundred;
  request.commonRequest(_url, {}, _cb_ok);
};
