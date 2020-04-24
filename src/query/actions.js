import {ORDER_DURATION, ORDER_DEPART} from "./constant";

import {h0} from "../common/fp";

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
export function setFrom(from) {
    return {
        //ACTON_SET_FROM
        type: ACTION_SET_FROM,
        payload: from
    };
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    };
}

export function setDepartDateL(departDateL) {
    return {
        type: ACTION_SET_DEPARTDATEL,
        payload: departDateL
    };
}

export function setHighspeed(highspeed) {
    return {
        type: ACTION_SET_HIGHSPEED,
        payload: highspeed
    };
}

export function setTrainList(trainList) {
    return {
        type: ACTION_SET_TRAINLIST,
        payload: trainList
    };
}

export function toggeleOrderType(orderType) {
    return (dispatch, getState) => {
        const {orderType} = getState();
        if (orderType === ORDER_DEPART) {
            dispatch({
                type: ACTION_SET_ORDERTYPE
            });
        }
    };
    return {
        type: ACTION_SET_ORDERTYPE,
        payload: orderType
    };
}

export function setOnlyTickets(onlyTickets) {
    return {
        type: ACTION_SET_ONLYTICKETS,
        payload: onlyTickets
    };
}

export function setTicketTypes(ticketTypes) {
    return {
        type: ACTION_SET_TICKETTYPES,
        payload: ticketTypes
    };
}

export function setCheckedTicketTypes(checkedTicketTypes) {
    return {
        type: ACTION_SET_CHECKEDTICKETTYPES,
        payload: checkedTicketTypes
    };
}

export function setDepartStations(departStations) {
    return {
        type: ACTION_SET_DEPARTSTATIONS,
        payload: departStations
    };
}

export function setCheckedDepartStations(checkedDepartStations) {
    return {
        type: ACTION_SET_CHECKEDDEPARTSTATIONS,
        payload: checkedDepartStations
    };
}

export function setArriveStations(arriveStations) {
    return {
        type: ACTION_SET_ARRIVESTATIONS,
        payload: arriveStations
    };
}

export function setCheckedArriveStations(checkedArriveStations) {
    return {
        type: ACTION_SET_CHECKEDARRIVESTATIONS,
        payload: checkedArriveStations
    };
}

export function setDepartTimeStart(departTimeStart) {
    return {
        type: ACTION_SET_DEPARTTIMESTART,
        payload: departTimeStart
    };
}

export function setDepartTimeEnd(departTimeEnd) {
    return {
        type: ACTION_SET_DEPARTTIMEEND,
        payload: departTimeEnd
    };
}

export function setArriveTimeStart(arriveTimeStart) {
    return {
        type: ACTION_SET_ARRIVETIMESTART,
        payload: arriveTimeStart
    };
}

export function setArriveTimeEnd(arriveTimeEnd) {
    return {
        type: ACTION_SET_ARRIVETIMEEND,
        payload: arriveTimeEnd
    };
}

export function setIsFiltersVisible(isFiltersVisible) {
    return {
        type: ACTION_SET_ISFILTERSVISIBLE,
        payload: isFiltersVisible
    };
}

export function setSearchParsed(searchParsed) {
    return {
        type: ACTION_SET_SEARCHPARSED,
        payload: searchParsed
    };
}
