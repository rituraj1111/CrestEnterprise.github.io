// Types for vite-imagetools query imports and srcset outputs
declare module '*?as=srcset' {
  const srcset: string;
  export default srcset;
}

declare module '*&as=srcset' {
  const srcset: string;
  export default srcset;
}

declare module '*?imagetools' {
  const src: string;
  export default src;
}

declare module '*&imagetools' {
  const src: string;
  export default src;
}

declare module '*.webp?*' {
  const src: string;
  export default src;
}

declare module '*.jpg?*' {
  const src: string;
  export default src;
}

declare module '*.jpeg?*' {
  const src: string;
  export default src;
}

declare module '*.png?*' {
  const src: string;
  export default src;
}
