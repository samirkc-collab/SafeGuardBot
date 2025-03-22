const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("send-data").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        tg.sendData(userInput); // Send input to the bot
        document.getElementById("user-input").value = ""; // Clear input
    }
});
