# downloads/

Published Android APK for direct sideload from https://www.fusionnexis.com/download.html.

- `NexisHealth.apk` — universal signed release APK, extracted from the same
  AAB the `nexis-native-app/nexis-rn` `build-prod` workflow submits to Google Play.
- `version.json` — versionName / versionCode / build timestamp for the current APK.

**Do not commit APKs to this folder by hand.** Both files are written by the
`build-prod` workflow in `fusionnexis/nexis-native-app` on every production
release, using a fine-grained PAT (secret `WEBSITE_PUSH_TOKEN`). If the folder
is empty, the site's "Download APK directly" link will 404 until the next
production build runs.
