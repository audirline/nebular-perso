"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePlayground = void 0;
const schematics_1 = require("@angular-devkit/schematics");
function generatePlayground() {
    return (0, schematics_1.chain)([(0, schematics_1.schematic)('playground-module', {}), (0, schematics_1.schematic)('playground-components', {})]);
}
exports.generatePlayground = generatePlayground;
//# sourceMappingURL=index.js.map