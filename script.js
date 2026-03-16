

// 1. सर्च फंक्शन (टाइप करते ही काम करेगा)
function searchBooks() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector('h3').innerText.toLowerCase();
        // अगर सर्च शब्द टाइटल में है तो दिखाओ, नहीं तो छुपा दो
        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

