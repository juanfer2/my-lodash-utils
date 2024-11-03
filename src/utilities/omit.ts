export const omit = (obj: any, props: string[]) => {
  obj = { ...obj };
  props.forEach((prop: any) => delete obj[prop]);
  return obj;
};

export default omit;
