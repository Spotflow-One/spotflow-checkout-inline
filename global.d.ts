declare module "*.html" {
  const content: string;
  export default content;
}

declare module "*.html?raw" {
  const content: string;
  export default content;
}

declare var define: {
  (deps: string[], factory: (...args: any[]) => any): void;
  amd: boolean;
};

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.otf" {
  const content: string;
  export default content;
}
