"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseName = exports.newComponent = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function newComponent(options) {
    return (tree, context) => {
        options.path = '/src/framework/theme/components/';
        options.prefix = 'nb';
        options.selector = options.selector || buildSelector(options);
        const parsedPath = parseName(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        options.className = buildClassName(options);
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
            (0, schematics_1.template)(Object.assign(Object.assign({}, core_1.strings), options)),
        ]);
        return (0, schematics_1.chain)([(0, schematics_1.branchAndMerge)((0, schematics_1.chain)([(0, schematics_1.mergeWith)(templateSource)]))])(tree, context);
    };
}
exports.newComponent = newComponent;
function parseName(path, name) {
    const nameWithoutPath = (0, core_1.basename)(name);
    const namePath = (0, core_1.dirname)((path + '/' + name));
    return {
        name: nameWithoutPath,
        path: (0, core_1.normalize)('/' + namePath),
    };
}
exports.parseName = parseName;
function buildSelector(options) {
    let selector = core_1.strings.dasherize(options.name);
    if (options.prefix) {
        selector = `${options.prefix}-${selector}`;
    }
    return selector;
}
function buildClassName(options) {
    return capitalize(options.prefix) + options.name;
}
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
//# sourceMappingURL=index.js.map