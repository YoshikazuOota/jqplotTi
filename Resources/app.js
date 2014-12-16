var event_name = 'myJqplotEvent';

var data = [[3, 7, 9, 1, 4, 6, 8, 2, 5]];
var option = {
  title: 'Plot With Options',
  axes: {
    xaxis: {label: "X Axis", pad: 0},
    yaxis: {label: "Y Axis"}
  }
};

var window = Ti.UI.createWindow({
  backgroundColor: 'white',
});

var webView = Ti.UI.createWebView({
  url: 'html/jqplot.html',
  top: '30dp',
  height: '300dp',
  width: '300dp',
  touchEnabled: false // これを付けないとWebView内でスクロールが発生したりして不都合がある
});


var chartFunc = function () {
  // 注: webview側のJSには文字列として値を渡すので、オブジェクトは指定できません
  webView.evalJS("jqplot_ti(" + JSON.stringify(data) + ", " + JSON.stringify(option) + ")");
  Titanium.App.removeEventListener(event_name, chartFunc);
};
Titanium.App.addEventListener(event_name, chartFunc);


window.add(webView);
window.open();

