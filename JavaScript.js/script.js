// Get the totalcount, interviewcount and rejectedcount
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

// get all cards section

const allCardsElement = document.getElementById('all-cards')
const allCardsLength = allCardsElement.children.length;
console.log(allCardsLength)

// tatalCount function
function calculationCount(){
    totalCount.innerText =  allCardsElement.children.length;
}
calculationCount()