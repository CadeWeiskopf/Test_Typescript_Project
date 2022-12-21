/**
 * testTsUserEvent.ts
 *
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */
define(["require", "exports", "N/log"], function (require, exports, log) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.afterSubmit = void 0;
    function afterSubmit(context) {
        let testObj = {};
        log.debug("test", testObj);
    }
    exports.afterSubmit = afterSubmit;
});
