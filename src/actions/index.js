export const incNum = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNum = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}

export const setIcon = (new_icon) => {
    return {
        type: 'change',
        payload: new_icon
    }
}