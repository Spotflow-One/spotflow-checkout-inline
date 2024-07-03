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
