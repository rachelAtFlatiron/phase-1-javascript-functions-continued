// code your solution here

//function declaration
//a default argument for the parameter activity
//saturdayFun() => 'This Saturday, I want to roller-skate!'
//saturdayFun('picnic') => 'This Saturday, I want to picnic!'
//default value for parameter applies if user does not pass in an argument
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair='*'){
    //visualFlair is in scope of wrapAdjective
    return function (innerParam='special'){
        //this inner function is enclose by wrapAdjective
        //and in scope of wrapAdjective
        //and therefore has access to visualFlair
        return `You are ${visualFlair}${innerParam}${visualFlair}!`
    }
}

//inner function enclosed in scope it was created in 
//due to closure, visualFlair will always be * for innerStarFunction

//wrapAdjective('*')('nice')
let innerStar = wrapAdjective('*')
innerStar('nice') // => 'You are *nice*!'

//wrapAdjective('!')('nice')
let innerExclamation = wrapAdjective('!')
innerExclamation('nice') // => 'You are !nice!!'

// let innerFunction = threeNestedFunctions()
// let innerInnerFunction = innerFunction()
// innerInnerFunction()



