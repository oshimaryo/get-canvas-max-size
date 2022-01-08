const esbuild = require('esbuild')

const results = esbuild.buildSync({
  entryPoints: ['src/index.js'],
  outdir: 'lib',
  bundle: true,
  sourcemap: true,
  minify: true,
  format: 'cjs',
  target: ['esnext']
})

console.log(results)
