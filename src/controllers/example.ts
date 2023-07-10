import { Request, Response, NextFunction } from "express";
import { example } from "../interfaces";
import { exampleService } from "../services";
import { madeItUpperCase } from "../utils";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // getting data from request
    let data: example = req.body;

    // using utility functions, we convert this name to Uppercase
    data.name = madeItUpperCase(data.name);

    // now, we insert example data by using service functions
    let createExample = await exampleService.create(data);

    // final success response
    res.status(201).json({
      message: `Created successfully!`,
      data: createExample,
    });
  } catch (err) {
    next(err);
  }
};

export { create };
