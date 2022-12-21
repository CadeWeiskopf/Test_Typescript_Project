/**
 * testTsUserEvent.ts
 * 
 * @NScriptType UserEventScript
 * @NApiVersion 2.1
 */

import {EntryPoints} from 'N/types';
import log = require('N/log');

export function afterSubmit(context: EntryPoints.UserEvent.afterSubmitContext) {
    let testObj: object = {};
    log.debug("test", testObj);
} 