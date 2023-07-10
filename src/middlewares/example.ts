import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    // this is only for the test, this middleware does not do any work!

    next();
  } catch (err) {
    next(err);
  }
};
