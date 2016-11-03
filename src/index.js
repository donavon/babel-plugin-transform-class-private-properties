import * as t from "babel-types";

const PREFIX = "_";

var privateMethodPaths = [];
var classModified = false;

export default function() {
    return {
        // inherits: require("babel-plugin-syntax-class-properties"),
        visitor: {
            ClassMethod: (path) => {
                console.log("private method found: ", JSON.stringify(path.node.key.name));
                if (path.node.key.name.startsWith("_")) {
                    privateMethodPaths.push(path); // Save it.
                    path.remove(); // Remove it.
                    classModified = true;
                    // path.parent.modified = true;
                    return;
                }
            },
            ClassDeclaration: {
                enter: () => {
                    console.log("ClassDeclaration Entered!");
                },
                exit: (dpath) => {
                    console.log("ClassDeclaration Exited!", classModified);
                    if (classModified) {
                        while (privateMethodPaths.length) {
                            var path = privateMethodPaths.pop();
                            console.log(path);
                            dpath.insertBefore(t.expressionStatement(t.stringLiteral(`// Insert a function ${path.node.key.name} here`)));
                            // const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id);
                            // path.scope.parent.push({ id, init: path });
                        }
                    }
                }
            },
            // ClassDeclaration(node, parent) {
            //     // Do something on a class declaration node.
            // },
            Identifier: (path) => {
                // Class(path) {
                // console.log(path); //

                // let isDerived = !!path.node.superClass;
                // let constructor;
                // let props = [];
                // let body = path.get("body");
                //
                // for (let path of body.get("body")) {
                //     if (path.isClassProperty()) {
                //         props.push(path);
                //     } else if (path.isClassMethod({ kind: "constructor" })) {
                //         // constructor = path;
                //     }
                // }
                //
                // if (!props.length) return;
                //

                var name = path.node.name;
                if (!name.startsWith(PREFIX)) {
                    return;
                }
                // console.log(path);
                path.node.name = "_" + path.node.name;
            }
        }
    };
}
