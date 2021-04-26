// Test File
(async () => { 
    const conn = new WebSocket("wss://gateway.discord.gg/gateway/bot");
    conn.onopen = async () => {
        const sendResponse = conn.send("hi discord");
        console.log(sendResponse);
    }
})();
