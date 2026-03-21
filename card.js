// 1. URL को सही वेरिएबल नाम दें
const webAppURL = "https://script.google.com/macros/s/AKfycby_BdphCacu9gjrdrc-D3ZvTaQnV6fZshPo7ynvGxb6Tpyn2BP6VUNFXlsc6JNNQRzv/exec"; 

async function fetchNotes() {
    const container = document.querySelector('.product-container'); 
    
    try {
        const response = await fetch(webAppURL);
        const notesData = await response.json();
        
        container.innerHTML = ""; 

        notesData.forEach(note => {
            // cardHTML को यहाँ Define करना ज़रूरी है
            `const cardHTML = 
                <div class="card">
                    <div class="img-box">
                        <img src="${note.image}" alt="${note.title}">
                    </div>
                    <div class="details">
                        <h3>${note.title}</h3>
                        <div class="rating">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </div>
                        <p class="price"><sup>₹</sup>${note.price}<sup>00</sup></p>
                        <p class="delivery">PDF डिलीवरी</p>
                        <a href="${note.link}" target="_blank" class="buy-btn">अभी खरीदें</a>
                    </div>
                </div>`; 
            
            // अब इसे Container में जोड़ें
            container.innerHTML += cardHTML;
        });
    } catch (error) {
        console.error("Data load नहीं हो पाया:", error);
    }
}

fetchNotes();