import h from "../h";
function component(description) {
    return /*#__PURE__*/ h("meta", {
        name: "description",
        content: description.content
    });
}
export default component;
