let mileageCalc = function(beg=0, end) {
    return (end-beg)*0.35
}

let begin = 13505.2
let end = 13810.6
let rem = mileageCalc(begin, end)

console.log(`MILEAGE REIMBURSEMENT CALCULATOR`)
console.log(`Beginning odometer reading => ${begin}`)
console.log(`Ending odometer reading => ${end}`)
console.log(`You travelled ${(end-begin).toFixed(2)} miles. At $0.35 per mile,`)
console.log(`your reimbursement is $${rem.toFixed(2)}.`)