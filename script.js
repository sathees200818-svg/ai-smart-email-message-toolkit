function generateMessage() {
    const input = document.querySelector("textarea").value;

    if (input.trim() === "") {
        alert("Please enter your message first.");
        return;
    }

    const result = "Generated message:\n\n" + input;

    alert(result);
}
