# Module-level recovery index

`recovery-index.json` lists the recovered module path, source chunk, module ID, associated route, template-draft status, and related output files. It describes analysis evidence, not a build graph.

Other indexes:

- `modules.json` — chunk-to-module inventory.
- `routes.json` — route metadata extracted from the app bundle.
- `packets.json` — module/chunk summary used by the recovery script.

The indexes are sanitized; API keys and application secrets are not intentionally retained.
