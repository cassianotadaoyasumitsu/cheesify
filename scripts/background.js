// ================================================= //
// Code for your background script goes in this file //
// ================================================= //

const postBinUrl = 'https://postb.in/1583321503061-7001616365741' // 👈 Paste your PostBin url here

// TODO: Create function to make a POST request to PostBin using fetch()

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'postItem') postItem(request.title, request.url).then(response => sendResponse(response));
    return true // Necessary when sendResponse() is sent asynchronously so that the script that sent the message waits for the response.
  }
);

const postItem = (title, url) => {
  return fetch(postBinUrl, {
    method: 'POST',
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ title: title, url: url })
  })
}

// TODO: Add a message listener to receive the active page information sent by popup.js and send it to PostBin
