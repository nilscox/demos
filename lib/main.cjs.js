'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

var configContext = React.createContext(null);
var ConfigProvider = configContext.Provider;
var useConfig = function () { return React.useContext(configContext); };

var DemoComponent = function (_a) {
    var demo = _a.demo;
    var _b = useConfig(), getDependencies = _b.getDependencies, _c = _b.Wrapper, Wrapper = _c === void 0 ? NoopComponent : _c;
    var prepare = demo.prepare, Demo = demo.render;
    var _d = React.useState(false), ready = _d[0], setReady = _d[1];
    var deps = React.useMemo(function () { var _a; return (_a = getDependencies === null || getDependencies === void 0 ? void 0 : getDependencies()) !== null && _a !== void 0 ? _a : {}; }, [getDependencies]);
    React.useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!deps) return [3 /*break*/, 2];
                        return [4 /*yield*/, (prepare === null || prepare === void 0 ? void 0 : prepare(deps))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        setReady(true);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [deps, prepare]);
    return (React__default['default'].createElement("div", { className: "demos__demo-component" },
        React__default['default'].createElement(Wrapper, __assign({}, deps), ready && React__default['default'].createElement(Demo, null))));
};
var NoopComponent = function (_a) {
    var children = _a.children;
    return React__default['default'].createElement(React__default['default'].Fragment, null, children);
};

function isDemo(item) {
    return 'render' in item;
}
function isDemosGroup(item) {
    return !isDemo(item);
}
var DemoGroupItems = function (_a) {
    var group = _a.group, path = _a.path, Demo = _a.Demo, Group = _a.Group;
    return (React__default['default'].createElement(React__default['default'].Fragment, null, Object.entries(group).map(function (_a) {
        var name = _a[0], item = _a[1];
        return (React__default['default'].createElement(React.Fragment, { key: name },
            isDemo(item) && Demo && React__default['default'].createElement(Demo, { demo: item, path: __spreadArray(__spreadArray([], path, true), [name], false) }),
            isDemosGroup(item) && Group && React__default['default'].createElement(Group, { group: item, path: __spreadArray(__spreadArray([], path, true), [name], false) })));
    })));
};

var DemosList = function (_a) {
    var group = _a.group;
    return (React__default['default'].createElement("div", { className: "demos__content" },
        React__default['default'].createElement("main", null,
            React__default['default'].createElement(DemoGroupItems, { group: group, path: [], Demo: DemosListItem, Group: DemosListGroup }))));
};
var DemosListGroup = function (_a) {
    var group = _a.group, path = _a.path;
    return (React__default['default'].createElement(GroupRoute, { path: '/' + path.join('/') },
        React__default['default'].createElement("div", { className: "demos__demo-group" },
            React__default['default'].createElement(DemoGroupName, { className: "demos__demo-group__name", depth: path.length }, path[path.length - 1]),
            React__default['default'].createElement(DemoGroupItems, { group: group, path: path, Demo: DemosListItem, Group: DemosListGroup }))));
};
var DemosListItem = function (_a) {
    var demo = _a.demo, path = _a.path;
    return (React__default['default'].createElement("div", { className: "demos__demo-item" },
        demo.description && React__default['default'].createElement("div", { className: "demos__demo-item__description" }, demo.description),
        React__default['default'].createElement("div", { className: "demos__demo-item__container" },
            React__default['default'].createElement(reactRouterDom.Link, { to: '/' + path.join('/'), className: "demos__demo-item__view" }, "View demo"),
            React__default['default'].createElement(DemoComponent, { demo: demo }))));
};
var GroupRoute = function (_a) {
    var path = _a.path, children = _a.children;
    var location = reactRouterDom.useLocation();
    if (location.pathname.startsWith(path.slice(0, location.pathname.length))) {
        return React__default['default'].createElement(React__default['default'].Fragment, null, children);
    }
    return null;
};
var DemoGroupName = function (_a) {
    var className = _a.className, depth = _a.depth, children = _a.children;
    return React.createElement("h" + Math.min(depth + 1, 6), { className: className }, children);
};

var Sidebar = function (_a) {
    var group = _a.group, setSearch = _a.setSearch;
    var title = useConfig().title;
    return (React__default['default'].createElement("aside", { className: "demos__sidebar" },
        React__default['default'].createElement("h1", { className: "demos__sidebar__branding" },
            React__default['default'].createElement(reactRouterDom.Link, { to: "/" }, title)),
        React__default['default'].createElement("input", { className: "demos__sidebar__search", placeholder: "Search...", onChange: function (e) { return setSearch(e.target.value); } }),
        React__default['default'].createElement(DemoGroupItems, { path: [], group: group, Group: TreeGroup })));
};
var TreeGroup = function (_a) {
    var group = _a.group, path = _a.path;
    var location = reactRouterDom.useLocation();
    var pathname = __spreadArray([''], path, true).join('/');
    var active = reactRouterDom.matchPath(location.pathname, { path: pathname, exact: true });
    return (React__default['default'].createElement("div", { className: "demos__tree__group depth-" + path.length },
        React__default['default'].createElement(reactRouterDom.NavLink, { to: active ? '/' : pathname, className: "demos__tree__group-name" }, path[path.length - 1]),
        React__default['default'].createElement(DemoGroupItems, { group: group, path: path, Group: TreeGroup })));
};

function App(_a) {
    var demos = _a.demos, config = __rest(_a, ["demos"]);
    return (React__default['default'].createElement(reactRouterDom.BrowserRouter, null,
        React__default['default'].createElement(ConfigProvider, { value: config },
            React__default['default'].createElement(Demos, { demos: demos }))));
}
var Demos = function (_a) {
    var demos = _a.demos;
    var _b = React.useState(''), search = _b[0], setSearch = _b[1];
    var filteredDemos = React.useMemo(function () { return filterDemos(demos, new RegExp(search, 'i')); }, [demos, search]);
    var location = reactRouterDom.useLocation();
    var currentPath = location.pathname.split('/').slice(1);
    var targetDemo = currentPath.reduce(function (group, key) {
        if (!group) {
            return;
        }
        if (isDemosGroup(group)) {
            return group[key];
        }
        else {
            return group;
        }
    }, demos);
    if (targetDemo && isDemo(targetDemo)) {
        return React__default['default'].createElement(DemoComponent, { demo: targetDemo });
    }
    return (React__default['default'].createElement("div", { className: "demos__wrapper" },
        React__default['default'].createElement(Sidebar, { group: filteredDemos, setSearch: setSearch }),
        React__default['default'].createElement(DemosList, { group: filteredDemos })));
};
var filterDemos = function (demos, regexp) {
    var matchItem = function (name, demo) {
        var _a;
        return Boolean(regexp.exec(name) || regexp.exec((_a = demo.description) !== null && _a !== void 0 ? _a : ''));
    };
    var matchGroup = function (name) {
        return Boolean(regexp.exec(name));
    };
    return Object.entries(demos).reduce(function (obj, _a) {
        var _b, _c, _d;
        var name = _a[0], item = _a[1];
        if (isDemo(item)) {
            if (matchItem(name, item)) {
                return __assign(__assign({}, obj), (_b = {}, _b[name] = item, _b));
            }
            else {
                return obj;
            }
        }
        if (isDemosGroup(item)) {
            if (matchGroup(name)) {
                return __assign(__assign({}, obj), (_c = {}, _c[name] = item, _c));
            }
            else {
                var filteredGroup = filterDemos(item, regexp);
                if (Object.keys(filteredGroup).length > 0) {
                    return __assign(__assign({}, obj), (_d = {}, _d[name] = filteredGroup, _d));
                }
                else {
                    return obj;
                }
            }
        }
        return obj;
    }, {});
};

exports.Demos = App;
