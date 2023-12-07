import h from "../h";
function view(description) {
    return /*#__PURE__*/ h("meta", {
        name: "description",
        content: description.content
    });
}
export default view;
