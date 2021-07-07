const port = chrome.runtime.connectNative('com.google.chrome.example.echo');

port.onMessage.addListener(portListener);

port.onDisconnect.addListener(() => {
    console.log("Disconnected");
});

port.postMessage({ text: "Hello, my_application" });

