function generateMessage() {
    const input = document.querySelector("textarea").value;

    if (input.trim() === "") {
        alert("Please enter your message first.");
        return;
    }

    const resultBox = document.createElement("div");

    resultBox.innerHTML = `
        <h2>Generated Message</h2>
        <p>${input}</p>
    `;

    resultBox.style.marginTop = "20px";
    resultBox.style.padding = "20px";
    resultBox.style.background = "white";
    resultBox.style.borderRadius = "10px";

    document.body.appendChild(resultBox);
}
