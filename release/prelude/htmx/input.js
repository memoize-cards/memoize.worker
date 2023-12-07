function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
import Element from "./element";
import forMethodsValid from "./forMethodsValid";
class Input extends Element {
    #target;
    /**
   * Gets the request body as JSON string.
   *
   * @returns {string} The JSON string representation of the request body.
   */ get body() {
        return JSON.stringify({
            [this.#target.name]: this.#target.value
        });
    }
    /**
   * Constructs a new Input instance.
   *
   * @param {HTMLElement} target - The target element of the HTMx event.
   */ constructor(target){
        super(target);
        this.#target = target;
    }
    static handle(event) {
        new Input(event.target).submit();
        return Input;
    }
    static is(event) {
        return /change/i.test(event.type) && /input|select|textarea/i.test(event.target.tagName);
    }
}
_ts_decorate([
    forMethodsValid
], Input.prototype, "body", null);
export default Input;
