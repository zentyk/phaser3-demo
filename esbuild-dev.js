require('esbuild').build({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    sourcemap : true,
    target : 'es2015',
    format:'esm',
    minify : true,
    outfile: './dist/dev/app.js',
  }).catch(() => process.exit(1));