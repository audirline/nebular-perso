"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMissingModules = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const utils_1 = require("../utils");
function generateMissingModules(tree) {
    const moduleDirs = [(0, utils_1.getPlaygroundRootDir)(tree), ...(0, utils_1.getModuleDirs)(tree)];
    const moduleRules = moduleDirs.map((moduleDir) => dirRule(tree, moduleDir));
    return (0, schematics_1.chain)(moduleRules);
}
exports.generateMissingModules = generateMissingModules;
function dirRule(tree, moduleDir) {
    return fromTemplate(tree, optionsFromDir(moduleDir));
}
function fromTemplate(tree, options) {
    const transformedSource = (0, schematics_1.apply)((0, schematics_1.url)('./files'), [
        (0, schematics_1.template)(options),
        (0, schematics_1.filter)((filePath) => shouldCreateModule(tree, filePath)),
    ]);
    return (0, schematics_1.mergeWith)(transformedSource);
}
function shouldCreateModule(tree, filePath) {
    const dir = tree.getDir((0, core_1.normalize)((0, core_1.dirname)(filePath)));
    const fileName = (0, core_1.basename)(filePath);
    const isModuleExist = (0, utils_1.isFeatureModule)(fileName) ? (0, utils_1.hasFeatureModuleInDir)(dir) : (0, utils_1.hasRoutingModuleInDir)(dir);
    if (isModuleExist) {
        return false;
    }
    return (0, utils_1.isFeatureModule)(fileName) || (0, utils_1.hasComponentsInDir)(dir);
}
function optionsFromDir(moduleDir) {
    const moduleName = (0, core_1.basename)(moduleDir.path);
    const routingModuleFileName = (0, utils_1.generateRoutingModuleFileName)(moduleName);
    return {
        path: moduleDir.path,
        featureModuleFileName: (0, utils_1.generateFeatureModuleFileName)(moduleName),
        featureModuleClassName: (0, utils_1.generateFeatureModuleClassName)(moduleName),
        routingModuleFileName,
        routingModuleClassName: (0, utils_1.generateRoutingModuleClassName)(moduleName),
        routingModuleImportPath: (0, utils_1.generateCurrentDirImport)(routingModuleFileName),
    };
}
//# sourceMappingURL=generate-missing-modules.js.map