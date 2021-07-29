import moment from "moment";

export const calculateSumOfNumbers = ( arr ) => {
    let sum = 0

    console.log( arr )
    arr.forEach( el => {
        sum += el.amount
    });

    return sum
}

export const getFormattedTime = ( date ) => {
    return new moment(date).format('MMMM Do YYYY, h:mm:ss a')
}