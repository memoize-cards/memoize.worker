import * as p from "../../standard/polished";
import styled from "../../standard/styled";
const text = new Proxy({}, {
    get (_target, key) {
        return styled[key]`
      color: ${p.color};
      font-family: ${p.family};
      font-size: ${p.size};
      font-weight: ${p.weight};
      letter-spacing: .618px;
      line-height: var(--line-height-md);
      text-align: ${p.align};
    `;
    }
});
export default text;
