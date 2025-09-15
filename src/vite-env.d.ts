// src/vite-env.d.ts
/// <reference types="vite/client" />

// Allow TypeScript to import .glb files
declare module "*.glb" {
  const src: string;
  export default src;
}

// Optional: also declare image types if not already
declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
