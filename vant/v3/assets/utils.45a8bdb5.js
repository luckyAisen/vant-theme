var a=typeof window!="undefined";function e(n){return a?requestAnimationFrame(n):-1}function i(n){a&&cancelAnimationFrame(n)}function r(n){e(()=>e(n))}export{i as c,r as d,a as i,e as r};
