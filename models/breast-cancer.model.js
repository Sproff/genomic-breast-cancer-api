"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var breastCancerSchema = new mongoose_1.Schema({
    annotations: [
        {
            assembliesInScope: [
                {
                    accession: {
                        type: String,
                        required: true,
                    },
                    name: {
                        type: String,
                        required: true,
                    },
                },
            ],
            releaseDate: {
                type: String,
                required: true,
            },
            releaseName: {
                type: String,
                required: true,
            },
        },
    ],
    commonName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    geneId: {
        type: String,
        required: true,
    },
    genomicRanges: [
        {
            accessionVersion: {
                type: String,
                required: true,
            },
            range: [
                {
                    begin: {
                        type: String,
                        required: true,
                    },
                    end: {
                        type: String,
                        required: true,
                    },
                    orientation: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
    ],
    orientation: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    taxId: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
}, {
    collection: "breast-cancer",
});
var BreastCancer = (0, mongoose_1.model)("BreastCancer", breastCancerSchema);
exports.default = BreastCancer;
