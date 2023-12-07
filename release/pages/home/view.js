import Button from "../../elements/button";
import h from "../../standard/h";
import Master from "../../standard/master";
import text from "../../elements/text";
function component(address) {
    return /*#__PURE__*/ h(Master, null, /*#__PURE__*/ h("address", null, /*#__PURE__*/ h(text.P, null, address.value)), /*#__PURE__*/ h(Button, {
        "data-action": "/api/click-me",
        "data-for": "#shelf",
        "data-morph": "afterbegin"
    }, "Click Me"), /*#__PURE__*/ h("div", {
        id: "shelf"
    }));
}
export default component;
