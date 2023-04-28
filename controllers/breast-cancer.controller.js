"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchParticularBreastCancer = exports.getParticularBreastCancer = exports.getAllBreastCancers = exports.welcomePage = void 0;
var breast_cancer_model_1 = require("../models/breast-cancer.model");
var errorHandler_1 = require("../utils/errorHandler");
var welcomePage = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            res.send("Hey buddy! Feel free to create stuffs with this API. Try /breast-cancers to get all breast cancers.");
        }
        catch (error) {
            next(error);
        }
        return [2 /*return*/];
    });
}); };
exports.welcomePage = welcomePage;
var getAllBreastCancers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var breastCancers, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, breast_cancer_model_1.default.find()];
            case 1:
                breastCancers = _a.sent();
                res.status(200).json({
                    status: "success",
                    data: {
                        breastCancers: breastCancers,
                    },
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllBreastCancers = getAllBreastCancers;
var getParticularBreastCancer = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, breastCancer, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                _id = req.params._id;
                return [4 /*yield*/, breast_cancer_model_1.default.findOne({ _id: _id })];
            case 1:
                breastCancer = _a.sent();
                if (breastCancer == null) {
                    throw new errorHandler_1.ErrorHandler(404, "Breast cancer does not exist");
                }
                res.status(200).json({
                    status: "success",
                    data: {
                        breastCancer: breastCancer,
                    },
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getParticularBreastCancer = getParticularBreastCancer;
var searchParticularBreastCancer = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var q, formatQuery, breastCancers, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                q = req.query.q;
                formatQuery = decodeURI(q);
                return [4 /*yield*/, breast_cancer_model_1.default.find({
                        $or: [
                            { commonName: { $regex: formatQuery, $options: "i" } },
                            { geneId: { $regex: formatQuery, $options: "i" } },
                            { orientation: { $regex: formatQuery, $options: "i" } },
                            { symbol: { $regex: formatQuery, $options: "i" } },
                            { taxId: { $regex: formatQuery, $options: "i" } },
                            { taxname: { $regex: formatQuery, $options: "i" } },
                            { type: { $regex: formatQuery, $options: "i" } },
                        ],
                    })];
            case 1:
                breastCancers = _a.sent();
                if (breastCancers.length < 1) {
                    throw new errorHandler_1.ErrorHandler(404, "No breast cancer does not exist");
                }
                res.status(201).json({
                    status: "success",
                    message: "Breast cancer has been found successfully",
                    data: {
                        breastCancers: breastCancers,
                    },
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchParticularBreastCancer = searchParticularBreastCancer;
