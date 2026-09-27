# Debugging Cheat Sheet

Quick reference for debugging essentials.

---

## Browser DevTools

### Opening DevTools
- **Chrome/Edge:** F12 or Ctrl+Shift+I (Cmd+Opt+I on Mac)
- **Firefox:** F12 or Ctrl+Shift+I (Cmd+Opt+I on Mac)
- **Safari:** Cmd+Option+C (enable in Preferences first)

### Panels
- **Console:** Errors, warnings, logs
- **Elements:** DOM tree, styles, computed values
- **Sources:** Source files, breakpoints, debugging
- **Network:** HTTP requests, responses, timing
- **Application:** Storage, cookies, service workers

---

## Console

```javascript
// Log
console.log("Message");
console.error("Error");
console.warn("Warning");

// Table
console.table(array);

// Group
console.group("Group");
console.log("Item 1");
console.log("Item 2");
console.groupEnd();

// Time
console.time("Timer");
// ... code ...
console.timeEnd("Timer");

// Assert
console.assert(condition, "Error message");
```

---

## Breakpoints

### Setting Breakpoints
1. Open Sources panel
2. Click line number in source file
3. Blue marker appears
4. Execution pauses at that line

### Stepping
- **Step over (F10):** Execute current line, move to next
- **Step into (F11):** Go into called function
- **Step out (Shift+F11):** Finish current function
- **Continue (F8):** Resume execution

### Conditional Breakpoints
```javascript
// Right-click line number → Add conditional breakpoint
// Enter condition
count > 5
```

---

## Network

### Checking Requests
1. Open Network panel
2. Refresh page
3. See all requests
4. Click request for details

### Common Issues
- **404:** File not found
- **500:** Server error
- **CORS:** Cross-origin restriction
- **Timeout:** Request too slow

---

## Common Bugs

### Photos Not Appearing
1. Check Network tab for 404 errors
2. Verify image paths in config.js
3. Ensure images exist in public/assets/photos/

### State Not Updating
1. Set breakpoint in event handler
2. Check if function is called
3. Verify state object is being updated
4. Check if render() is called

### Build Fails
1. Read error message carefully
2. Check for syntax errors
3. Verify import paths
4. Ensure all files exist

---

## VS Code Debugging

### launch.json
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### Debugging
1. Set breakpoints in VS Code
2. Press F5 or click "Run and Debug"
3. Select configuration
4. Debug in VS Code instead of browser

---

## Common Mistakes

- ❌ Not checking console for errors first
- ❌ Not reproducing the issue consistently
- ❌ Making multiple changes at once
- ❌ Not reading error messages carefully
- ❌ Not using breakpoints to trace execution
