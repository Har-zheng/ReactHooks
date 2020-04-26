import {ORDER_DURATION, ORDER_DEPART} from "./constant";

import {h0} from "../common/fp";
import {setDepartDate} from "../index/actions";

export const ACTION_SET_FROM = "SET_FROM"; //  from: null,
export const ACTION_SET_TO = "SET_TO"; //  to: null,
export const ACTION_SET_DEPART_DATEL = "SET_DEPARTDATEL"; //  departDateL:h0(Date.now()),   // 出发日期
export const ACTION_SET_HIGH_SPEED = "SET_HIGHSPEED"; //  highspeed: false, // 高铁动车
export const ACTION_SET_TRAIN_LIST = "SET_TRAINLIST"; //  trainList: [], // 车票列表
export const ACTION_SET_ORDER_TYPE = "SET_ORDERTYPE"; //  orderType: ORDER_DEPART, // 出发早晚
export const ACTION_SET_ONLY_TICKETS = "SET_ONLYTICKETS"; //  onlyTickets: false, //只看有票
export const ACTION_SET_TICKET_TYPES = "SET_TICKETTYPES"; //  ticketTypes: [], //坐席类型 所有选项
export const ACTION_SET_CHECKED_TICKET_TYPES = "SET_CHECKEDTICKETTYPES"; //  checkedTicketTypes: {}, //坐席类型 选中
export const ACTION_SET_DEPART_STATIONS = "SET_DEPARTSTATIONS"; //  departStations: [], //车次类型
export const ACTION_SET_CHECKED_DEPART_STATIONS = "SET_CHECKEDDEPARTSTATIONS"; //  checkedDepartStations: [], //选中车次类型
export const ACTION_SET_ARRIVE_STATIONS = "SET_ARRIVESTATIONS"; //  arriveStations: [], //出发车站
export const ACTION_SET_CHECKED_ARRIVE_STATIONS = "SET_CHECKEDARRIVESTATIONS"; //  checkedArriveStations: [],// 选中  出发车站
export const ACTION_SET_DEPART_TIME_START = "SET_DEPARTTIMESTART"; //  departTimeStart: 0, // 开始
export const ACTION_SET_DEPART_TIME_END = "SET_DEPARTTIMEEND"; //  departTimeEnd: 24, //  结尾
export const ACTION_SET_ARRIVE_TIME_START = "SET_ARRIVETIMESTART"; //  arriveTimeStart:0, //到达时间 开始
export const ACTION_SET_ARRIVE_TIME_END = "SET_ARRIVETIMEEND"; //  arriveTimeEnd: 24, // 结束
export const ACTION_SET_IS_FILTERS_VISIBLE = "SET_ISFILTERSVISIBLE"; //  isFiltersVisible: false, // 筛选图层的显示与隐藏
export const ACTION_SET_SEARCH_PARSED = "SET_SEARCHPARSED"; //  searchParsed: false // 搜索
export function  setFrom(from){
    return{
        type: ACTION_SET_FROM,
        payload:from,
    }
}
export function  setTo(to){
    return{
        type: ACTION_SET_TO,
        payload:to,
    }
}
export function  setDepartDateL(departDateL){
    return{
        type: ACTION_SET_DEPART_DATEL,
        payload:departDateL,
    }
}
export function  setHighSpeed(highSpeed){
    return{
        type: ACTION_SET_HIGH_SPEED,
        payload:highSpeed,
    }
}
export function toggleHighSpeed() {
    return (dispatch, getState) => {
        const { highSpeed } = getState();

        dispatch(setHighSpeed(!highSpeed));
    };
}
export function  setTrainList(trainList){
    return{
        type: ACTION_SET_TRAIN_LIST,
        payload:trainList,
    }
}
export function  toggletOrderType(orderType){
    return (dispatch,getState)=> {
        const  { ordeeType } = getState();
            if(ordeeType === ORDER_DEPART){
                dispatch({
                    type: ACTION_SET_ORDER_TYPE,
                    payload:  ORDER_DURATION
                })
            } else {
                dispatch({
                    type: ACTION_SET_ORDER_TYPE,
                    payload:  ORDER_DEPART
                })
            }
    }
    return{
        type: ACTION_SET_ORDER_TYPE,
        payload:orderType,
    }
}
export function  toggleOnlyTickets(onlyTickets){
    return (dispatch, getState) => {
        const { onlyTickets } = getState()
        dispatch({
            type: ACTION_SET_ONLY_TICKETS,
            payload: !onlyTickets
        })
    }
}
export function  setTicketTypes(ticketTypes){
    return{
        type: ACTION_SET_TICKET_TYPES,
        payload:ticketTypes,
    }
}
export function  setCheckedTicketTypes(checkedTicketTypes){
    return{
        type: ACTION_SET_CHECKED_TICKET_TYPES,
        payload:checkedTicketTypes,
    }
}
export function  setDepartStations(departStations){
    return{
        type: ACTION_SET_DEPART_STATIONS,
        payload:departStations,
    }
}
export function  setCheckedDepartStations(checkedDepartStations){
    return{
        type: ACTION_SET_CHECKED_DEPART_STATIONS,
        payload:checkedDepartStations,
    }
}
export function  setArriveStations(arriveStations){
    return{
        type: ACTION_SET_ARRIVE_STATIONS,
        payload:arriveStations,
    }
}
export function  setCheckedArriveStations(checkedArriveStations){
    return{
        type: ACTION_SET_CHECKED_ARRIVE_STATIONS,
        payload:checkedArriveStations,
    }
}
export function  setDepartTimeStart(departTimeStart){
    return{
        type: ACTION_SET_DEPART_TIME_START,
        payload:departTimeStart,
    }
}
export function  setDepartTimeEnd(departTimeEnd){
    return{
        type: ACTION_SET_DEPART_TIME_END,
        payload:departTimeEnd,
    }
}
export function  setArriveTimeStart(arriveTimeStart){
    return{
        type: ACTION_SET_ARRIVE_TIME_START,
        payload:arriveTimeStart,
    }
}
export function  setArriveTimeEnd(arriveTimeEnd){
    return{
        type: ACTION_SET_ARRIVE_TIME_END,
        payload:arriveTimeEnd,
    }
}
export function  setIsFiltersVisible(){
    return (dispatch, getState) => {
        const { isFiltersVisible } = getState()
        dispatch({
            type: ACTION_SET_IS_FILTERS_VISIBLE,
            payload: !isFiltersVisible
        })
    }
}
export function  setSearchParsed(searchParsed){
    return{
        type: ACTION_SET_SEARCH_PARSED,
        payload:searchParsed,
    }
}
export function nextDate() {
    return (dispatch, getState) => {
        const  { departDate } = getState()
        dispatch(setDepartDate(h0(departDate + 86400 * 1000)))
    }

}
export function prevDate() {
    return (dispatch, getState) => {
        const  { departDate } = getState()
        dispatch(setDepartDate(h0(departDate + 86400 * 1000)))
    }

}
