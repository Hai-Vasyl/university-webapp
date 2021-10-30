import { Filter } from "../models";
import { IField } from "../interfaces";

export const Query = {
  async getFilters(_: any, { url, lang }: IField) {
    try {
      const filters = await Filter.find({ url, lang });
      return filters;
    } catch (error: any) {
      throw new Error(`Getting filters error: ${error.message}`);
    }
  },
};
