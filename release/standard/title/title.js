function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
import { paint } from "../h";
import component from "./component";
import magic from "../magic";
let Title = class Title1 {
    get content() {
        return Title[magic.content] ?? 'Memoize';
    }
    static change(content) {
        Title[magic.content] = content;
        return Title;
    }
};
Title = _ts_decorate([
    paint(component)
], Title);
export default Title;
