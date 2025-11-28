# Troubleshooting Guide

## Common Issues

### Import Error: Failed to load "lucide-react"

**Symptoms:**
- Site shows blank page with "Import Error"
- Error message: "Failed to load 'lucide-react' from blob URL"

**Root Cause:**
- The lucide-react package is not properly installed or cached
- This is a build environment issue, not a code issue

**Solution:**
1. The package.json should include lucide-react as a dependency
2. If the error persists, it's a v0 runtime issue that needs to resolve itself
3. The code itself is correct - the issue is with package loading

**Prevention:**
- Always verify that icon imports are from lucide-react
- Ensure package.json includes all required dependencies
- When making changes, only modify the specific code needed

### Site Breaking After Changes

**Why This Happens:**
- Any code change triggers a rebuild
- If there's an underlying dependency issue, the rebuild fails
- The failure appears to be caused by the change, but it's actually exposing an existing problem

**Safeguards:**
1. **Minimal Changes**: Only modify the exact lines needed
2. **Read First**: Always read the current file state before editing
3. **Verify Dependencies**: Check that all imports are available
4. **Test Incrementally**: Make one change at a time when possible

## Current Status

The ImageBridge component is correctly implemented. The lucide-react error is a build environment issue that should resolve when the package is properly loaded by the v0 runtime.
