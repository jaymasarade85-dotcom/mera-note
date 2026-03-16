document.getElementById("sellerForm").addEventListener("submit", function(event) {
    // बटन को डिसेबल करें ताकि बार-बार क्लिक न हो
    let btn = document.getElementById("submitBtn");
    let status = document.getElementById("formStatus");
    
    btn.innerText = "प्रोसेसिंग...";
    btn.style.opacity = "0.7";

    // आप चाहें तो यहाँ अतिरिक्त वैलिडेशन जोड़ सकते हैं
    console.log("Form is being submitted...");
});

// फॉर्म सबमिट होने के बाद मैसेज दिखाने के लिए (Formspree के साथ काम करता है)
if (window.location.search.includes("success=true")) {
    document.getElementById("formStatus").innerText = "धन्यवाद! आपका आवेदन हमें मिल गया है।";
    document.getElementById("formStatus").style.color = "green";
}