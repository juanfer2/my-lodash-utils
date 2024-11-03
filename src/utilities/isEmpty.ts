/* eslint-disable @typescript-eslint/no-explicit-any */
export const isEmpty = (obj: any) =>
  !Object.entries(obj || {}).length && !obj?.length && !obj?.size;

export default isEmpty;
