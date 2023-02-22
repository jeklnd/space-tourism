declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.webp" {
  const content: any;
  export default content;
}

declare module "data.js" {
  const planets: Array<any>;
  const people: Array<any>;
  const technology: Array<any>;
  const hurley, shuttleworth, glover, ansari: object;
  const vehicle, spaceport, capsule: object;
}