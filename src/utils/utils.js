// import { fileTypes, maxFileSize } from '../constants/constants'
import moment from 'moment'

export function numberBoolean(value = 0) {
    return value === 0 ? false : true
}
export function removeWhiteSpace(str) {
    return String(str).replace(' ', '')
}
export function allCaps(text) {
    return String(text).toUpperCase()
}
export function allLower(text) {
    return String(text).toLowerCase()
}

export function momentDate(date = '') {
    return date === '' ? date : moment(date ?? '').format('YYYY-MM-DDTHH:mm') 
}

export function preferDateFormat(date = '', format='ll') {
    return date ? moment(date).format(format) : '' 
}

export function prettyDateFormat(date = '') {
    return date ? moment(date).format("ll") : '' 
}

export function prettyDateTimeFormat(date = '') {
    return date ? moment(date).format("MMMM Do YYYY, h:mm a") : '' 
}

export function notifyDateTimeFormat(date = '', long = false) {
    let newDate = date ?? ''
    const today = moment()
    if (moment(newDate).isSame(today, 'year')) {
        if (moment(newDate).isSame(today, 'date')) {
            return long ? moment(newDate).format("MMM DD YYYY, h:mm a") : moment(newDate).format("h:mm a")
        } else {
            return long ? moment(newDate).format("MMM DD YYYY, h:mm a") : moment(newDate).format("MMM DD")
        } 
    } else {
        return long ? moment(newDate).format("MMM DD YYYY, h:mm a") : moment(newDate).format("MMM DD YYYY")
    }
}

export function reviewDateTimeFormat(date = '', long = false) {
    let newDate = date ?? ''
    const today = moment()
    if (moment(newDate).isSame(today, 'year')) {
        if (moment(newDate).isSame(today, 'date')) {
            return moment(newDate).format("h:mm a")
        } else {
            return moment(newDate).format("MMM DD, YYYY")
        } 
    } else {
        return moment(newDate).format("MMM DD, YYYY")
    }
}

export const moneyFormat = (amount, decimal) => {
    if (amount === 'NIL') {
        return amount
    } else {
        let newAmount = Number(amount) ? Number(amount) : Number(0)
        return newAmount.toLocaleString(undefined, {minimumFractionDigits: decimal ? 0 : 2, maximumFractionDigits: decimal ? 0 : 2})
    }
}

export const nairaToKobo = (value) => {
    return parseInt(value) * 100
}

export const averageOf = (arr = []) => {
    let sum = arr.map(e => e).reduce((prev, curr) => parseFloat(curr) + parseFloat(prev), 0)
    return parseFloat(sum/arr.length).toFixed(1)
}


const compareAlpha = (a, b) => {
    const nameA = String(a).toUpperCase();
    const nameB = String(b).toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

export const alphaSort = (arr = [], keyToCompare) => {
    return arr.sort((a, b) => compareAlpha(!!keyToCompare ? a[keyToCompare] : a, !!keyToCompare ? b[keyToCompare] : b))
}
export const numSort = (arr = [], keyToCompare, order) => {
    if (order === 'asc') {
        return arr.sort((a, b) => ((keyToCompare ? a[keyToCompare] : a) - (keyToCompare ? b[keyToCompare] : b)))
    } else {
        return arr.sort((a, b) => ((keyToCompare ? b[keyToCompare] : b) - (keyToCompare ? a[keyToCompare] : a)))
    }
}
export const dateSort = (arr = [], key, order) => {
    if (order === 'desc') {
        return arr.sort((a, b) => Number(moment(b[key]).format('X')) - Number(moment(a[key]).format('X')))
    } else {
        return arr.sort((a, b) => Number(moment(a[key]).format('X')) - Number(moment(b[key]).format('X')))
    }
}


export function formController(e, setData) {
    e?.preventDefault()
    const { name, value, type } = e.target

    if (type === 'number') {
        setData((prev) => ({ ...prev, [name]: Number(value) === 0 ? 0 : Number(value) }));
    } else if (type === 'select-one') {
        setData((prev) => ({ ...prev, [name]: value }));
    } else if(type === 'checkbox' ) {
        setData((prev) => ({ ...prev, [name]: !prev[name] }));
    } else if(type === 'radio' ) {
        setData((prev) => ({ ...prev, [name]: value }));
    } else if(type === 'date') {
        setData((prev) => ({ ...prev, [name]: momentDate(value) }));
    } else {
        setData((prev) => ({ ...prev, [name]: value }));
    }
}

export function isObjectPropsEmpty (obj = {}) {
    const keys = Object.keys(obj)
    if (keys.length > 0) {
        return keys.every(k => obj[k] == '' || !obj[k])
    }
    return true
}

export function isObject(obj) {
    return obj == {} ? true : Object.keys(obj).length > 0 ? true : false
}

// export function isCompatibleFile(file, max = 0, types = []) {
//     if (!file) {
//         return [false, 'No file selected']
//     } else if (!fileTypes.includes(file?.type)) {
//         return [false, 'File type is incompatible']
//     } else if (Number(file?.size) > maxFileSize) {
//         return [false, 'File is too large (Max - 2MB)']
//     } else {
//         return [true, 'File is allowed']
//     }
// }
