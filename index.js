"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_01_to_10 = __importStar(require("./tasks/Task_02_to_10"));
const Task_11_to_19 = __importStar(require("./tasks/Task_11_to_19"));
const Task_20_to_32 = __importStar(require("./tasks/Task_20_to_32"));
const Task_33_to_35 = __importStar(require("./tasks/Task_33_to_35"));
const Task_36_to_45 = __importStar(require("./tasks/Task_36_to_45"));
Task_01_to_10.runTasks();
Task_11_to_19.runTasks();
Task_20_to_32.runTasks();
Task_33_to_35.runTasks();
Task_36_to_45.runTasks();
