var RouteState = require('route-state');
var handleError = require('handle-error-web');
var catFieldFlow = require('./flows/cat-field-flow');
var renderControls = require('./dom/render-controls');

var routeState = RouteState({
  followRoute,
  windowObject: window
});

(function go() {
  window.onerror = reportTopLevelError;
  routeState.routeFromHash();
})();

function followRoute(routeDict) {
  catFieldFlow({
    useExtraParts: routeDict.useExtraParts
  });
  renderControls({ onRoll, hideControls: routeDict.hideControls });
}

function onRoll() {
  routeState.overwriteRouteEntirely({});
}

function reportTopLevelError(msg, url, lineNo, columnNo, error) {
  handleError(error);
}
