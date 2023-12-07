import "./pixel/index";
import "./api/index";
import "./pages/index";
import asset from "./standard/asset/index";
import router from "./standard/router/index";
export default {
    async fetch (request, ...args) {
        return asset.is(request) ? await asset.handle(request, ...args) : await router.handle(request, ...args);
    }
};
