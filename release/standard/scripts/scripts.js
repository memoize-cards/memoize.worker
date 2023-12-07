import h, { Fragment } from "../h";
function component() {
    return /*#__PURE__*/ h(Fragment, null, /*#__PURE__*/ h("script", {
        src: "prelude/htmx.js",
        async: true
    }));
}
export default component;
