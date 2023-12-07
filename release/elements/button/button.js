import h from "../../standard/h";
import style from "./style";
function component(props, children) {
    return /*#__PURE__*/ h("button", {
        ...props,
        className: [
            style.button,
            props.className
        ]
    }, children);
}
export default component;
