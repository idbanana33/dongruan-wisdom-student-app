# Reverse-engineering and reconstruction reports

## Scope

This repository contains a sanitized, static analysis of the Android/Cordova application “东软智慧学工” (`com.neuedu.wisestu`, version 2.0.1). The original APK, signing material, SDK credentials, DEX, and native binaries are intentionally not included.

## Reports

- `01-analysis.md` — application and Webpack/Vue analysis, scope, findings, and limitations.
- `02-algorithms.md` — recovered algorithms, worked examples, and confirmed edge cases.
- `03-route-module-map.md` — URL routes mapped to page chunks and Webpack modules.
- `04-native-analysis.md` — sanitized Manifest/native-layer observations and tool limitations.
- `05-AXML-DEX-ARSC说明.md` — which Android artifacts were analyzed and which were omitted.
- `manifest-decoded.xml` — sanitized Manifest excerpt, not the original complete binary manifest.
- `apk-metadata.json` — sample metadata and redaction summary.
- `template-sanity.json` — structural check output; not a Vue compiler result.

All credentials and SDK keys are redacted in the public copy. Some reported SDK component and permission details were derived from the local sample before the original binaries were excluded.
