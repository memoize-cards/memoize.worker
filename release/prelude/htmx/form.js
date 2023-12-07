function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
import Element from "./element";
import forMethodsValid from "./forMethodsValid";
import preventDefault from "./preventDefault";
class Form extends Element {
    #target;
    /**
   * Gets the request body as JSON string.
   *
   * @returns {string} The JSON string representation of the request body.
   */ get body() {
        return JSON.stringify([
            ...new FormData(this.#target)
        ].reduce((o, [x, y])=>(o[x] = y, o), {}));
    }
    /**
   * Constructs a new Form instance.
   *
   * @param {HTMLElement} target - The target element of the HTMx event.
   */ constructor(target){
        super(target);
        this.#target = target;
    }
    static handle(event) {
        new Form(event.target).submit();
        return Form;
    }
    static is(event) {
        return /submit/i.test(event.type) && /form/i.test(event.target.tagName);
    }
}
_ts_decorate([
    forMethodsValid
], Form.prototype, "body", null);
_ts_decorate([
    preventDefault
], Form, "handle", null);
export default Form;
