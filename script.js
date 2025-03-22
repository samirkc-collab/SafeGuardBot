// Initialize Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDf2uIA7tb14YRqs4zLGQ58SfL2gPNaALs",
    authDomain: "telegramminiapp-3a485.firebaseapp.com",
    databaseURL: "https://telegramminiapp-3a485-default-rtdb.firebaseio.com",
    projectId: "telegramminiapp-3a485",
    storageBucket: "telegramminiapp-3a485.firebasestorage.app",
    messagingSenderId: "498910131049",
    appId: "1:498910131049:web:c5855c5c0486f9c36903f8",
    measurementId: "G-L8ZQTDH5H1"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Send data when button is clicked
document.getElementById("send-data").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        // Send to Firebase
        db.ref("user_input").push({
            message: userInput,
            timestamp: Date.now()
        });

        // Optionally notify Telegram bot
        tg.sendData(userInput);

        // Clear input
        document.getElementById("user-input").value = "";
    }
});