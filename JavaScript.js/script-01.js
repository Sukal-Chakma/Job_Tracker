// check
// console.log('connected with file')
// get the all elements


const cards = document.querySelectorAll(".card");
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const jobsText = document.getElementById("jobs");

// console.log(cards, totalCount, interviewCount)

// Update counter function elements

function updateCounts() {

  const notAppliedCards = document.querySelectorAll(".card[data-status='not-applied']");
  const interviewCards = document.querySelectorAll(".card[data-status='interview']");
  const rejectedCards = document.querySelectorAll(".card[data-status='rejected']");

  // console.log(rejectedCards)
  
  totalCount.innerText = notAppliedCards.length;
  interviewCount.innerText = interviewCards.length;
  rejectedCount.innerText = rejectedCards.length;

  const allTotal = notAppliedCards.length + interviewCards.length + rejectedCards.length;
  jobsText.innerText = allTotal + " jobs";

  //  Empty State Logic
  
  const emptyMessage = document.getElementById("empty-message");
  const allCardsSection = document.getElementById("all-cards");

  if (notAppliedCards.length === 0) {
    emptyMessage.style.display = "block";
    allCardsSection.style.display = "none";
  } else {
    emptyMessage.style.display = "none";
    allCardsSection.style.display = "block";
  }
}


// add event Leasner 


document.querySelectorAll(".card").forEach(card => {
  card.dataset.status = "not-applied";

  const interviewBtn = card.querySelector(".border-green-600");
  const rejectedBtn = card.querySelector(".border-red-600");
  const deleteBtn = card.querySelector(".fa-trash-can").parentElement;
  const statusBtn = card.querySelector(".btn-soft");

  // Interview Click

  interviewBtn.addEventListener("click", () => {
    card.dataset.status = "interview";
    statusBtn.innerText = "INTERVIEW";
    statusBtn.classList.remove("btn-soft");
    statusBtn.classList.add("border-green-600", "text-green-600");
    updateCounts();
  });

  // Rejected Click

  rejectedBtn.addEventListener("click", () => {
    card.dataset.status = "rejected";
    statusBtn.innerText = "REJECTED";
    statusBtn.classList.remove("btn-soft");
    statusBtn.classList.add("border-red-600", "text-red-600");
    updateCounts();
  });

  // Delete Click

  deleteBtn.addEventListener("click", () => {
    card.remove();
    updateCounts();
  });
});


// toggole btn


function togglestyle(buttonId) {
  document.querySelectorAll(".btn-soft").forEach(btn => {
    btn.classList.remove("bg-black", "text-white");
  });

  document.getElementById(buttonId).classList.add("bg-black", "text-white");

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (buttonId === "btn-all") {
      card.style.display = "grid";
    } else if (buttonId === "btn-interview") {
      card.style.display =
        card.dataset.status === "interview" ? "grid" : "none";
    } else if (buttonId === "btn-rejected") {
      card.style.display =
        card.dataset.status === "rejected" ? "grid" : "none";
    }
  });
}


updateCounts();