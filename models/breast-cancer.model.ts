import { Schema, model } from "mongoose";

const breastCancerSchema = new Schema(
  {
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
  },
  {
    collection: "breast-cancer",
  },
);

const BreastCancer = model("BreastCancer", breastCancerSchema);
export default BreastCancer;
