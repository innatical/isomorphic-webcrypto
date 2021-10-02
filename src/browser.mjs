import "./webcrypto-shim.mjs";
import "./elliptic.mjs";
import { Buffer } from "buffer/";
window.Buffer = Buffer;
import { crypto } from "webcrypto-liner";
delete window.crypto;
window.crypto = crypto;
export default window.crypto;
