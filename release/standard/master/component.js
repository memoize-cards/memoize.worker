import { Style } from "../css";
import Desciption from "../description";
import h from "../h";
import Scripts from "../scripts";
import Title from "../title";
function component(_props, children) {
    return /*#__PURE__*/ h("html", {
        lang: "en-US"
    }, /*#__PURE__*/ h("head", null, /*#__PURE__*/ h(Title, null), /*#__PURE__*/ h(Desciption, null), /*#__PURE__*/ h(Style, null)), /*#__PURE__*/ h("body", null, children, /*#__PURE__*/ h(Scripts, null)));
}
export default component;
