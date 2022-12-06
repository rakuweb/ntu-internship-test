// import layer

// constant layer
export const breakpoints = [30, 48, 62, 80, 96, 23]; // em - [480, 768, 992, 1280, 1536, 375] px
export const breakpointsByPx = breakpoints.map((bp) => bp * 16);

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`);
