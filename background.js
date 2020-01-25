chrome.contextMenus.create({
  title: "ヤフーファイナンスで「%s」を検索する",
  type : "normal",
  contexts: ["all"],
  onclick: (info) => {
    const url = `https://info.finance.yahoo.co.jp/search/?query=${info.selectionText}`;
    chrome.tabs.create({ url : url });
  }
});

chrome.browserAction.onClicked.addListener(function(activeTab){
  const url = 'https://finance.yahoo.co.jp/';
  chrome.tabs.create({ url: url });
});
