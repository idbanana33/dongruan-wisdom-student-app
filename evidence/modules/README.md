# Application-owned Webpack module evidence

This directory contains split, formatted modules attributed to the application, excluding the third-party `vendor` chunk. These files retain production variable names and are evidence copies, not clean-room rewrites. SDK credentials have been redacted where identified.

For an individual module, cross-reference its source chunk and module ID with `../indexes/recovery-index.json` and the corresponding entry in `../evidence/chunks/`.
