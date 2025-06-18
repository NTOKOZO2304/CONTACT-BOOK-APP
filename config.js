let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey;

async function checkApiKey() {
    const defaultKey = "ntokozomaphosa034@gmail.com";
    let response = await fetch(rootPath + "controller/api-key/?apiKey=" + defaultKey);
    let data = await response.text();

    if (data === "1") {
        localStorage.setItem("apiKey", defaultKey);
        return defaultKey;
    } else {
        const backupKey = "appacademy@itvarsity.org";
        response = await fetch(rootPath + "controller/api-key/?apiKey=" + backupKey);
        data = await response.text();

        if (data === "1") {
            localStorage.setItem("apiKey", backupKey);
            return backupKey;
        } else {
            localStorage.removeItem("apiKey");
            window.open("enter-api-key.html", "_self");
            return null; // Stops further code execution
        }
    }
}
