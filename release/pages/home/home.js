function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
import { paint } from "../../standard/h";
import result from "../../standard/result";
import storage from "./storage";
import view from "./view";
let Home = class Home {
    #data;
    get value() {
        return `${this.#data?.logradouro}, ${this.#data?.bairro} - ${this.#data?.localidade}`;
    }
    [result.Ok](data) {
        this.#data = data;
        return this;
    }
};
Home = _ts_decorate([
    paint(view),
    storage
], Home);
export default Home;
