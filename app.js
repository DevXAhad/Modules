"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vendor_js_1 = __importDefault(require("./Vendor.js"));
const Buyer_js_1 = __importDefault(require("./Buyer.js"));
let buyer = new Buyer_js_1.default();
console.log(buyer.data);
let vendor = new Vendor_js_1.default();
console.log(vendor.data);
