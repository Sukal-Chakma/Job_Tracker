// Get the totalcount, interviewcount and rejectedcount
let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
// empty list
let interviewList = [];
let rejectedList = [];

// get all cards section

const allCardsElement = document.getElementById('all-cards')
const allCardsLength = allCardsElement.children.length;
// console.log(allCardsLength)

// to get main container
const mainContainer = document.getElementById('main-container');
console.log(mainContainer)

// tatalCount function
function calculationCount(){
    totalCount.innerText =  allCardsElement.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculationCount()