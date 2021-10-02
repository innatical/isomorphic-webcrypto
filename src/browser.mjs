import "./webcrypto-shim.mjs";
import "./elliptic.mjs";
import { crypto } from "webcrypto-liner";
delete window.crypto;
window.crypto = crypto;
export default window.crypto;
