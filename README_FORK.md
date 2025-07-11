# Release Instructions

To release a new version of the package:

1. Copy `.npmrc.example` to `.npmrc`:
   ```bash
   cp .npmrc.example .npmrc
   ```

2. Fill in your GitHub token in the `.npmrc` file:
   ```
   @checksum-ai:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
   ```

3. Run the publish command:
   ```bash
   yarn publish
   ```

## Notes

- Make sure you have the necessary permissions to publish to the GitHub Package Registry
- Your GitHub token should have the appropriate scopes for package publishing
- The token should be placed after the `_authToken=` line in the `.npmrc` file
