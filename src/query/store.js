import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import h0 from '../common/fp'
import { ORDER_DEPART } from './constant'
export default createStore(
  combineReducers(reducers),
  {
      // 城市信息
      from: null,
      to: null,
      departDateL:h0(Date.now()),   // 出发日期
      highSpeed: false, // 高铁动车
      trainList: [], // 车票列表
      orderType: ORDER_DEPART, // 出发早晚
      onlyTickets: false, //只看有票
      ticketTypes: [], //坐席类型 所有选项
      checkedTicketTypes: {}, //坐席类型 选中
      departStations: [], //车次类型
      checkedDepartStations: [], //选中车次类型
      arriveStations: [], //出发车站
      checkedArriveStations: [],// 选中  出发车站
      departTimeStart: 0, // 开始
      departTimeEnd: 24, //  结尾
      arriveTimeStart:0, //到达时间 开始
      arriveTimeEnd: 24, // 结束
      isFiltersVisible: false, // 筛选图层的显示与隐藏
      searchParsed: false // 搜索

  },
  applyMiddleware(thunk)
);
