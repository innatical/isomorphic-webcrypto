import "./webcrypto-shim.mjs";
import * as elliptic from "elliptic";
window["elliptic"] = elliptic;
import "webcrypto-liner";
export default window.crypto;
