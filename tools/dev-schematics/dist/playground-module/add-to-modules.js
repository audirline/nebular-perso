"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToModules = void 0;
const ts = require("typescript");
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const utils_1 = require("../utils");
function addToModules(tree, context) {
    processDirs(tree, context, (0, utils_1.getPlaygroundDirs)(tree));
    return tree;
}
exports.addToModules = addToModules;
function processDirs(tree, context, dirs) {
    for (const dir of dirs) {
        processDir(tree, context, dir);
        if (dir.subdirs.length) {
            processDirs(tree, context, dir.subdirs.map((d) => dir.dir(d)));
        }
    }
}
function processDir(tree, context, dir) {
    (0, utils_1.getComponentsFromDir)(dir).forEach((path) => processComponent(tree, context, path));
    (0, utils_1.getDirectivesFromDir)(dir).forEach((path) => processDirectives(tree, path));
    (0, utils_1.getServicesFromDir)(dir).forEach((path) => processService(tree, path));
    const modulePath = (0, utils_1.getFeatureModuleFromDir)(dir);
    if (modulePath) {
        processFeatureModule(tree, context, modulePath);
    }
    const routingModulePath = (0, utils_1.getRoutingModuleFromDir)(dir);
    if (routingModulePath) {
        processRoutingModule(tree, routingModulePath);
    }
}
function processService(tree, servicePath) {
    const modulePath = (0, utils_1.findFeatureModule)(tree, (0, core_1.dirname)(servicePath));
    if (!modulePath) {
        throw new schematics_1.SchematicsException(`Can't find module for service ${servicePath}.`);
    }
    const serviceDeclarations = (0, utils_1.getClassWithDecorator)(tree, servicePath, 'Injectable');
    for (const service of serviceDeclarations) {
        const serviceClassName = service.name.getText();
        const importString = (0, utils_1.importPath)(modulePath, servicePath);
        const source = (0, schematics_2.parseSourceFile)(tree, servicePath);
        const changes = (0, schematics_2.addSymbolToNgModuleMetadata)(source, modulePath, 'providers', serviceClassName, importString);
        (0, utils_1.applyInsertChange)(tree, modulePath, ...changes);
    }
}
function processComponent(tree, context, componentPath) {
    const componentDir = tree.getDir((0, core_1.dirname)(componentPath));
    const modulePath = (0, utils_1.findFeatureModule)(tree, componentDir.path);
    if (!modulePath) {
        throw new schematics_1.SchematicsException(`Can't find module for component ${componentPath}.`);
    }
    const componentDeclarations = (0, utils_1.getClassWithDecorator)(tree, componentPath, 'Component');
    if (!componentDeclarations.length) {
        return;
    }
    addComponentToModule(tree, componentDeclarations, componentPath, modulePath);
    if ((0, utils_1.hasRoutingModuleInDir)(componentDir)) {
        addComponentRoute(tree, componentDeclarations, modulePath, context, componentPath);
    }
}
function addComponentToModule(tree, declarations, componentPath, modulePath) {
    for (const component of declarations) {
        const className = component.name.getText();
        const moduleImportString = (0, utils_1.importPath)(modulePath, componentPath);
        (0, utils_1.addDeclaration)(tree, modulePath, className, moduleImportString);
    }
}
function addComponentRoute(tree, componentDeclarations, modulePath, context, componentPath) {
    const routingModulePath = (0, utils_1.findRoutingModule)(tree, (0, core_1.dirname)(componentPath));
    if (!routingModulePath) {
        throw new schematics_1.SchematicsException(`Can't find routing module for module ${modulePath}.`);
    }
    if (componentDeclarations.length > 1) {
        context.logger.warn(`Found more than one component declaration in ${componentPath}. ` +
            'Route will be created only for the first one.\n' +
            "Move all helper components which don't need own routes to sub directory without routing module in it.");
    }
    const componentClassName = componentDeclarations[0].name.getText();
    const routes = (0, utils_1.findRoutesArray)(tree, routingModulePath);
    if ((0, utils_1.findRoute)(routes, utils_1.componentRoutePredicate.bind(null, componentClassName))) {
        return;
    }
    const routingImport = (0, utils_1.importPath)(routingModulePath, componentPath);
    const routePath = (0, utils_1.isInPlaygroundRoot)(componentPath) ? '' : (0, utils_1.removeExtension)(componentPath);
    const route = (0, utils_1.generateComponentRoute)(routePath, componentClassName);
    (0, utils_1.addRoute)(tree, routingModulePath, routes, route, componentClassName, routingImport);
}
function processDirectives(tree, directivePath) {
    const dirPath = (0, core_1.dirname)(directivePath);
    const modulePath = (0, utils_1.findFeatureModule)(tree, dirPath);
    if (!modulePath) {
        throw new schematics_1.SchematicsException(`Can't find module for directive ${directivePath}.`);
    }
    const directiveDeclarations = (0, utils_1.getClassWithDecorator)(tree, directivePath, 'Directive');
    for (const directive of directiveDeclarations) {
        const directiveClassName = directive.name.getText();
        const moduleImportString = (0, utils_1.importPath)(modulePath, directivePath);
        (0, utils_1.addDeclaration)(tree, modulePath, directiveClassName, moduleImportString);
    }
}
function processFeatureModule(tree, context, modulePath) {
    const moduleDeclarations = (0, utils_1.getClassWithDecorator)(tree, modulePath, 'NgModule');
    if (!moduleDeclarations.length) {
        return;
    }
    multilineDeclarationsArray(tree, modulePath);
    const parentDir = (0, core_1.dirname)((0, core_1.dirname)(modulePath));
    const routingModulePath = (0, utils_1.findRoutingModule)(tree, parentDir);
    if (!routingModulePath) {
        return;
    }
    if (moduleDeclarations.length > 1) {
        context.logger.warn(`Found more than one module declaration in ${modulePath}. ` + 'Route will be created only for the first one.');
    }
    addModuleRoute(tree, moduleDeclarations[0], modulePath, routingModulePath);
}
function addModuleRoute(tree, moduleDeclaration, modulePath, routingModulePath) {
    const moduleDir = (0, core_1.dirname)(modulePath);
    if ((0, utils_1.isRootPlaygroundModule)(moduleDir)) {
        return;
    }
    const routePredicates = (0, utils_1.routePredicatesFromPath)(routingModulePath, moduleDir);
    let route = (0, utils_1.findRouteWithPath)((0, utils_1.findRoutesArray)(tree, routingModulePath), routePredicates);
    if (!route) {
        (0, utils_1.addMissingChildRoutes)(tree, routingModulePath, modulePath);
        route = (0, utils_1.findRouteWithPath)((0, utils_1.findRoutesArray)(tree, routingModulePath), routePredicates);
    }
    if ((0, utils_1.getRouteLazyModule)(route)) {
        return;
    }
    const moduleClassName = moduleDeclaration.name.getText();
    const lazyModuleImport = (0, utils_1.generateLazyModuleImport)(routingModulePath, modulePath, moduleClassName);
    const loadChildren = `loadChildren: ${lazyModuleImport}`;
    (0, utils_1.addObjectProperty)(tree, (0, schematics_2.parseSourceFile)(tree, routingModulePath), route, loadChildren);
}
function multilineDeclarationsArray(tree, modulePath) {
    const source = (0, schematics_2.parseSourceFile)(tree, modulePath);
    const decoratorNode = (0, schematics_2.getDecoratorMetadata)(source, 'NgModule', '@angular/core')[0];
    if (!decoratorNode) {
        throw new schematics_1.SchematicsException(`Can't find NgModule decorator in ${modulePath}`);
    }
    const declarationsNode = decoratorNode.properties
        .filter((prop) => prop.kind === ts.SyntaxKind.PropertyAssignment)
        .find((prop) => prop.name.getText() === 'declarations');
    if (!declarationsNode) {
        return;
    }
    if (declarationsNode.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression) {
        throw new schematics_1.SchematicsException(`Error in ${modulePath}. Expecting declarations to be an array.`);
    }
    const declarationsArray = declarationsNode.initializer;
    const isAlreadyMultiline = declarationsArray.getText().includes('\n');
    const fitsMaxLineLength = declarationsNode.getFullText().length <= 120; // from prettier config
    if (isAlreadyMultiline || fitsMaxLineLength) {
        return;
    }
    const replaces = (0, utils_1.multilineArrayLiteral)(source.getFullText(), declarationsArray);
    (0, utils_1.applyReplaceChange)(tree, modulePath, ...replaces);
}
function processRoutingModule(tree, modulePath) {
    const moduleDeclarations = (0, utils_1.getClassWithDecorator)(tree, modulePath, 'NgModule');
    if (!moduleDeclarations.length) {
        return;
    }
    const featureModulePath = (0, utils_1.findFeatureModule)(tree, (0, core_1.dirname)(modulePath));
    if (!featureModulePath) {
        throw new schematics_1.SchematicsException(`Can't find module for routing module ${featureModulePath}.`);
    }
    const featureModuleSource = (0, schematics_2.parseSourceFile)(tree, featureModulePath);
    const importString = (0, utils_1.importPath)(featureModulePath, modulePath);
    for (const moduleDeclaration of moduleDeclarations) {
        const className = moduleDeclaration.name.getText();
        const changes = (0, schematics_2.addImportToModule)(featureModuleSource, featureModulePath, className, importString);
        (0, utils_1.applyInsertChange)(tree, featureModulePath, ...changes);
    }
}
//# sourceMappingURL=add-to-modules.js.map