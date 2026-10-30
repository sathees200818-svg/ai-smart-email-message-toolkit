 function generateMessage() {
    const input = document.getElementById("messageInput").value.trim();
    const tone = document.getElementById("tone").value;
    const messageType = document.getElementById("messageType").value;
    const result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "<p>Please enter your message first.</p>";
        return;
    }

    const generateButton = document.querySelector("button");
    generateButton.innerText = "Generating...";

    setTimeout(() => {
        let generatedText = "";

        if (messageType === "Email") {
            if (tone === "Professional") {
                generatedText = `Subject: Leave Request

Dear Sir/Madam,

I would like to request leave for the following reason:

${input}

Kindly consider my request and grant me leave.

Thank you for your understanding.

Regards,
[Your Name]`;
            } 
            else if (tone === "Friendly") {
                generatedText = `Subject: Leave Request

Hi,

I wanted to let you know that:

${input}

Please consider my request.

Thank you!

Best regards,
[Your Name]`;
            } 
            else if (tone === "Formal") {
                generatedText = `Subject: Formal Leave Request

Respected Sir/Madam,

I am writing to formally request leave regarding the following:

${input}

I kindly request you to consider and approve my leave.

Thank you.

Yours sincerely,
[Your Name]`;
            } 
            else {
                generatedText = `Subject: Leave Request

Hi,

I need to request leave because:

${input}

Please let me know if it is okay.

Thanks,
[Your Name]`;
            }
        } 
        else {
            if (tone === "Professional") {
                generatedText = `Hello,

I would like to inform you that:

${input}

Thank you.`;
            } 
            else if (tone === "Friendly") {
                generatedText = `Hi! 😊

Just wanted to let you know:

${input}

Thanks!`;
            } 
            else if (tone === "Formal") {
                generatedText = `Dear Sir/Madam,

I would like to inform you regarding the following:

${input}

Thank you for your consideration.`;
            } 
            else {
                generatedText = `Hey!

Just wanted to say:

${input}

Thanks!`;
            }
        }

        result.innerHTML = `
            <h2>✨ AI Generated ${messageType}</h2>
            <p><strong>Type:</strong> ${messageType}</p>
            <p><strong>Tone:</strong> ${tone}</p>
            <p id="generatedText" style="white-space: pre-line;">${generatedText}</p>
        `;

        generateButton.innerText = "Generate";

    }, 700);
}

function clearAll() {
    document.getElementById("messageInput").value = "";
    document.getElementById("messageType").value = "Email";
    document.getElementById("tone").value = "Professional";
    document.getElementById("result").innerHTML = "";

    document.querySelector("button").innerText = "Generate";
}

function copyMessage() {
    const generatedText = document.getElementById("generatedText");

    if (!generatedText) {
        alert("Please generate a message first.");
        return;
    }

    navigator.clipboard.writeText(generatedText.innerText);
    alert("Message copied!");
}