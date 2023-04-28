import { type NextFunction, type Request, type Response } from "express";
import BreastCancer from "../models/breast-cancer.model";
import { ErrorHandler } from "../utils/errorHandler";

const welcomePage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(
      "Hey buddy! Feel free to create stuffs with this API. Try /breast-cancers to get all breast cancers.",
    );
  } catch (error) {
    next(error);
  }
};

const getAllBreastCancers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const breastCancers = await BreastCancer.find();

    res.status(200).json({
      status: "success",
      data: {
        breastCancers,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getParticularBreastCancer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.params;
    const breastCancer = await BreastCancer.findOne({ _id });

    if (breastCancer == null) {
      throw new ErrorHandler(404, "Breast cancer does not exist");
    }

    res.status(200).json({
      status: "success",
      data: {
        breastCancer,
      },
    });
  } catch (error) {
    next(error);
  }
};

const searchParticularBreastCancer = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { q } = req.query;

    const formatQuery = decodeURI(q as string);

    const breastCancers = await BreastCancer.find({
      $or: [
        { commonName: { $regex: formatQuery, $options: "i" } },
        { geneId: { $regex: formatQuery, $options: "i" } },
        { orientation: { $regex: formatQuery, $options: "i" } },
        { symbol: { $regex: formatQuery, $options: "i" } },
        { taxId: { $regex: formatQuery, $options: "i" } },
        { taxname: { $regex: formatQuery, $options: "i" } },
        { type: { $regex: formatQuery, $options: "i" } },
      ],
    });

    if (breastCancers.length < 1) {
      throw new ErrorHandler(404, "No breast cancer does not exist");
    }

    res.status(201).json({
      status: "success",
      message: "Breast cancer has been found successfully",
      data: {
        breastCancers,
      },
    });
  } catch (error) {
    next(error);
  }
};

export {
  welcomePage,
  getAllBreastCancers,
  getParticularBreastCancer,
  searchParticularBreastCancer,
};