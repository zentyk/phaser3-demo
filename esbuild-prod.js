require('esbuild').build({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    minify : true,
    sourcemap : false,
    target : 'es2015',
    format:'esm',
    outfile: './dist/prod/app.min.js',
  }).catch(() => process.exit(1));