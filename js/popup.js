$(document).ready(() => {
    $("#sendBtn").click(() => {
        chrome.runtime.sendMessage({
            action: "post_message",
            message: { text: $("#textMsg").val() }
        }, function(response) {
            console.log(response);
        });
    });
});
