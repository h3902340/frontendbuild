pbjs -t static-module -w es6 -o src/app/proto/compiled.js src/proto/*.proto
pbts -o src/app/proto/compiled.d.ts src/app/proto/compiled.js