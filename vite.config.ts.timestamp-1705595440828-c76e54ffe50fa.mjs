// vite.config.ts
import { defineConfig } from "file:///C:/Users/daplo/OneDrive/Pulpit/projects/testoo/node_modules/vite/dist/node/index.js";
import { resolve as resolve2 } from "path";
import preact from "file:///C:/Users/daplo/OneDrive/Pulpit/projects/testoo/node_modules/@preact/preset-vite/dist/esm/index.mjs";

// scripts/make-manifest.ts
import * as fs from "fs";
import * as path from "path";

// package.json
var package_default = {
  name: "testoo",
  version: "0.0.1",
  description: "Pomocnik tester\xF3w",
  license: "MIT",
  scripts: {
    build: "vite build",
    dev: "nodemon",
    test: "jest",
    "test:cov": "jest --coverage",
    format: "prettier src/ scripts/ --write"
  },
  type: "module",
  packageManager: "pnpm@8.10.5",
  devDependencies: {
    "@babel/core": "^7.21.0",
    "@babel/plugin-proposal-class-properties": "^7.18.6",
    "@babel/plugin-transform-react-jsx": "^7.21.0",
    "@babel/preset-env": "^7.20.2",
    "@preact/preset-vite": "^2.5.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/preact": "^3.0.0",
    "@types/chrome": "^0.0.251",
    "@types/jest": "^29.0.0",
    "@types/node": "^20.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    autoprefixer: "^10.4.14",
    "babel-jest": "^29.0.0",
    eslint: "^8.35.0",
    "eslint-config-preact": "^1.3.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prettier": "^5.0.0",
    jest: "^29.0.0",
    "jest-environment-jsdom": "^29.5.0",
    "jest-preset-preact": "^4.0.5",
    nodemon: "^3.0.0",
    postcss: "^8.4.21",
    preact: "^10.13.0",
    "preact-render-to-string": "^6.0.0",
    prettier: "^3.0.0",
    "prettier-plugin-tailwindcss": "^0.5.0",
    tailwindcss: "^3.2.7",
    typescript: "^5.0.0",
    vite: "^5.0.0"
  },
  eslintConfig: {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      "preact",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: [
      "@typescript-eslint"
    ],
    globals: {
      chrome: "readonly"
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {
          singleQuote: true,
          jsxSingleQuote: true,
          trailingComma: "es5",
          arrowParens: "avoid"
        }
      ]
    }
  }
};

// src/manifest.ts
var manifest = {
  manifest_version: 3,
  name: package_default.name,
  version: package_default.version,
  description: package_default.description,
  action: {
    default_popup: "src/popup/index.html",
    default_icon: "icon-34.png"
  },
  icons: {
    "128": "icon-128.png"
  },
  web_accessible_resources: [
    {
      resources: ["icon-128.png", "icon-34.png"],
      matches: []
    }
  ]
};
var manifest_default = manifest;

// scripts/color-log.ts
function colorLog(message, type) {
  let color = type || COLORS.FgBlack;
  switch (type) {
    case "success":
      color = COLORS.FgGreen;
      break;
    case "info":
      color = COLORS.FgBlue;
      break;
    case "error":
      color = COLORS.FgRed;
      break;
    case "warning":
      color = COLORS.FgYellow;
      break;
  }
  console.log(color, message);
}
var COLORS = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m"
};

// scripts/make-manifest.ts
var __vite_injected_original_dirname = "C:\\Users\\daplo\\OneDrive\\Pulpit\\projects\\testoo\\scripts";
var { resolve } = path;
var outDir = resolve(__vite_injected_original_dirname, "..", "public");
function makeManifest() {
  return {
    name: "make-manifest",
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }
      const manifestPath = resolve(outDir, "manifest.json");
      fs.writeFileSync(manifestPath, JSON.stringify(manifest_default, null, 2));
      colorLog(`
Manifest file copy complete: ${manifestPath}`, "success");
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname2 = "C:\\Users\\daplo\\OneDrive\\Pulpit\\projects\\testoo";
var src = resolve2(__vite_injected_original_dirname2, "src");
var assetsDir = resolve2(src, "assets");
var outDir2 = resolve2(__vite_injected_original_dirname2, "dist");
var publicDir = resolve2(__vite_injected_original_dirname2, "public");
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": src,
      "@assets": assetsDir
    }
  },
  plugins: [makeManifest(), preact()],
  publicDir,
  build: {
    outDir: outDir2,
    rollupOptions: {
      input: {
        content: resolve2(src, "content", "index.ts"),
        background: resolve2(src, "background", "index.ts"),
        popup: resolve2(src, "popup", "index.html"),
        newtab: resolve2(src, "newtab", "index.html"),
        devtools: resolve2(src, "devtools", "index.html"),
        options: resolve2(src, "options", "index.html")
      },
      output: {
        entryFileNames: (chunk) => `src/${chunk.name}/index.js`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9tYWtlLW1hbmlmZXN0LnRzIiwgInBhY2thZ2UuanNvbiIsICJzcmMvbWFuaWZlc3QudHMiLCAic2NyaXB0cy9jb2xvci1sb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYXBsb1xcXFxPbmVEcml2ZVxcXFxQdWxwaXRcXFxccHJvamVjdHNcXFxcdGVzdG9vXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYXBsb1xcXFxPbmVEcml2ZVxcXFxQdWxwaXRcXFxccHJvamVjdHNcXFxcdGVzdG9vXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9kYXBsby9PbmVEcml2ZS9QdWxwaXQvcHJvamVjdHMvdGVzdG9vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgcHJlYWN0IGZyb20gJ0BwcmVhY3QvcHJlc2V0LXZpdGUnO1xuaW1wb3J0IG1ha2VNYW5pZmVzdCBmcm9tICcuL3NjcmlwdHMvbWFrZS1tYW5pZmVzdCc7XG5cbmNvbnN0IHNyYyA9IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyk7XG5jb25zdCBhc3NldHNEaXIgPSByZXNvbHZlKHNyYywgJ2Fzc2V0cycpO1xuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0Jyk7XG5jb25zdCBwdWJsaWNEaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAc3JjJzogc3JjLFxuICAgICAgJ0Bhc3NldHMnOiBhc3NldHNEaXIsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW21ha2VNYW5pZmVzdCgpLCBwcmVhY3QoKV0sXG4gIHB1YmxpY0RpcixcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXIsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgY29udGVudDogcmVzb2x2ZShzcmMsICdjb250ZW50JywgJ2luZGV4LnRzJyksXG4gICAgICAgIGJhY2tncm91bmQ6IHJlc29sdmUoc3JjLCAnYmFja2dyb3VuZCcsICdpbmRleC50cycpLFxuICAgICAgICBwb3B1cDogcmVzb2x2ZShzcmMsICdwb3B1cCcsICdpbmRleC5odG1sJyksXG4gICAgICAgIG5ld3RhYjogcmVzb2x2ZShzcmMsICduZXd0YWInLCAnaW5kZXguaHRtbCcpLFxuICAgICAgICBkZXZ0b29sczogcmVzb2x2ZShzcmMsICdkZXZ0b29scycsICdpbmRleC5odG1sJyksXG4gICAgICAgIG9wdGlvbnM6IHJlc29sdmUoc3JjLCAnb3B0aW9ucycsICdpbmRleC5odG1sJyksXG4gICAgICB9LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBjaHVuayA9PiBgc3JjLyR7Y2h1bmsubmFtZX0vaW5kZXguanNgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRhcGxvXFxcXE9uZURyaXZlXFxcXFB1bHBpdFxcXFxwcm9qZWN0c1xcXFx0ZXN0b29cXFxcc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZGFwbG9cXFxcT25lRHJpdmVcXFxcUHVscGl0XFxcXHByb2plY3RzXFxcXHRlc3Rvb1xcXFxzY3JpcHRzXFxcXG1ha2UtbWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2RhcGxvL09uZURyaXZlL1B1bHBpdC9wcm9qZWN0cy90ZXN0b28vc2NyaXB0cy9tYWtlLW1hbmlmZXN0LnRzXCI7aW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYW5pZmVzdCBmcm9tICcuLi9zcmMvbWFuaWZlc3QnO1xuaW1wb3J0IGNvbG9yTG9nIGZyb20gJy4vY29sb3ItbG9nJztcblxuY29uc3QgeyByZXNvbHZlIH0gPSBwYXRoO1xuXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ3B1YmxpYycpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlTWFuaWZlc3QoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21ha2UtbWFuaWZlc3QnLFxuICAgIGJ1aWxkRW5kKCkge1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKG91dERpcikpIHtcbiAgICAgICAgZnMubWtkaXJTeW5jKG91dERpcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IHJlc29sdmUob3V0RGlyLCAnbWFuaWZlc3QuanNvbicpO1xuXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgSlNPTi5zdHJpbmdpZnkobWFuaWZlc3QsIG51bGwsIDIpKTtcblxuICAgICAgY29sb3JMb2coYFxcbk1hbmlmZXN0IGZpbGUgY29weSBjb21wbGV0ZTogJHttYW5pZmVzdFBhdGh9YCwgJ3N1Y2Nlc3MnKTtcbiAgICB9LFxuICB9O1xufVxuIiwgIntcbiAgXCJuYW1lXCI6IFwidGVzdG9vXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQb21vY25payB0ZXN0ZXJcdTAwRjN3XCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXG4gICAgXCJkZXZcIjogXCJub2RlbW9uXCIsXG4gICAgXCJ0ZXN0XCI6IFwiamVzdFwiLFxuICAgIFwidGVzdDpjb3ZcIjogXCJqZXN0IC0tY292ZXJhZ2VcIixcbiAgICBcImZvcm1hdFwiOiBcInByZXR0aWVyIHNyYy8gc2NyaXB0cy8gLS13cml0ZVwiXG4gIH0sXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInBhY2thZ2VNYW5hZ2VyXCI6IFwicG5wbUA4LjEwLjVcIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJhYmVsL2NvcmVcIjogXCJeNy4yMS4wXCIsXG4gICAgXCJAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXNcIjogXCJeNy4xOC42XCIsXG4gICAgXCJAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1yZWFjdC1qc3hcIjogXCJeNy4yMS4wXCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjIwLjJcIixcbiAgICBcIkBwcmVhY3QvcHJlc2V0LXZpdGVcIjogXCJeMi41LjBcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNi4wLjBcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcHJlYWN0XCI6IFwiXjMuMC4wXCIsXG4gICAgXCJAdHlwZXMvY2hyb21lXCI6IFwiXjAuMC4yNTFcIixcbiAgICBcIkB0eXBlcy9qZXN0XCI6IFwiXjI5LjAuMFwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMC4wXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl42LjAuMFwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTRcIixcbiAgICBcImJhYmVsLWplc3RcIjogXCJeMjkuMC4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC4zNS4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZWFjdFwiOiBcIl4xLjMuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjAuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yNy41XCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWpzeC1hMTF5XCI6IFwiXjYuNy4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjUuMC4wXCIsXG4gICAgXCJqZXN0XCI6IFwiXjI5LjAuMFwiLFxuICAgIFwiamVzdC1lbnZpcm9ubWVudC1qc2RvbVwiOiBcIl4yOS41LjBcIixcbiAgICBcImplc3QtcHJlc2V0LXByZWFjdFwiOiBcIl40LjAuNVwiLFxuICAgIFwibm9kZW1vblwiOiBcIl4zLjAuMFwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMjFcIixcbiAgICBcInByZWFjdFwiOiBcIl4xMC4xMy4wXCIsXG4gICAgXCJwcmVhY3QtcmVuZGVyLXRvLXN0cmluZ1wiOiBcIl42LjAuMFwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4wLjBcIixcbiAgICBcInByZXR0aWVyLXBsdWdpbi10YWlsd2luZGNzc1wiOiBcIl4wLjUuMFwiLFxuICAgIFwidGFpbHdpbmRjc3NcIjogXCJeMy4yLjdcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4wLjBcIixcbiAgICBcInZpdGVcIjogXCJeNS4wLjBcIlxuICB9LFxuICBcImVzbGludENvbmZpZ1wiOiB7XG4gICAgXCJlbnZcIjoge1xuICAgICAgXCJicm93c2VyXCI6IHRydWUsXG4gICAgICBcImVzNlwiOiB0cnVlLFxuICAgICAgXCJub2RlXCI6IHRydWVcbiAgICB9LFxuICAgIFwiZXh0ZW5kc1wiOiBbXG4gICAgICBcInByZWFjdFwiLFxuICAgICAgXCJlc2xpbnQ6cmVjb21tZW5kZWRcIixcbiAgICAgIFwicGx1Z2luOkB0eXBlc2NyaXB0LWVzbGludC9yZWNvbW1lbmRlZFwiLFxuICAgICAgXCJwbHVnaW46cHJldHRpZXIvcmVjb21tZW5kZWRcIlxuICAgIF0sXG4gICAgXCJwYXJzZXJcIjogXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCIsXG4gICAgXCJwYXJzZXJPcHRpb25zXCI6IHtcbiAgICAgIFwiZWNtYUZlYXR1cmVzXCI6IHtcbiAgICAgICAgXCJqc3hcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIFwiZWNtYVZlcnNpb25cIjogXCJsYXRlc3RcIixcbiAgICAgIFwic291cmNlVHlwZVwiOiBcIm1vZHVsZVwiXG4gICAgfSxcbiAgICBcInBsdWdpbnNcIjogW1xuICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnRcIlxuICAgIF0sXG4gICAgXCJnbG9iYWxzXCI6IHtcbiAgICAgIFwiY2hyb21lXCI6IFwicmVhZG9ubHlcIlxuICAgIH0sXG4gICAgXCJydWxlc1wiOiB7XG4gICAgICBcInByZXR0aWVyL3ByZXR0aWVyXCI6IFtcbiAgICAgICAgXCJ3YXJuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcInNpbmdsZVF1b3RlXCI6IHRydWUsXG4gICAgICAgICAgXCJqc3hTaW5nbGVRdW90ZVwiOiB0cnVlLFxuICAgICAgICAgIFwidHJhaWxpbmdDb21tYVwiOiBcImVzNVwiLFxuICAgICAgICAgIFwiYXJyb3dQYXJlbnNcIjogXCJhdm9pZFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRhcGxvXFxcXE9uZURyaXZlXFxcXFB1bHBpdFxcXFxwcm9qZWN0c1xcXFx0ZXN0b29cXFxcc3JjXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkYXBsb1xcXFxPbmVEcml2ZVxcXFxQdWxwaXRcXFxccHJvamVjdHNcXFxcdGVzdG9vXFxcXHNyY1xcXFxtYW5pZmVzdC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGFwbG8vT25lRHJpdmUvUHVscGl0L3Byb2plY3RzL3Rlc3Rvby9zcmMvbWFuaWZlc3QudHNcIjtpbXBvcnQgcGFja2FnZUpzb24gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IE1hbmlmZXN0VHlwZSB9IGZyb20gJ0BzcmMvbWFuaWZlc3QtdHlwZSc7XG5cbmNvbnN0IG1hbmlmZXN0OiBNYW5pZmVzdFR5cGUgPSB7XG4gIG1hbmlmZXN0X3ZlcnNpb246IDMsXG4gIG5hbWU6IHBhY2thZ2VKc29uLm5hbWUsXG4gIHZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXG4gIGRlc2NyaXB0aW9uOiBwYWNrYWdlSnNvbi5kZXNjcmlwdGlvbixcbiAgYWN0aW9uOiB7XG4gICAgZGVmYXVsdF9wb3B1cDogJ3NyYy9wb3B1cC9pbmRleC5odG1sJyxcbiAgICBkZWZhdWx0X2ljb246ICdpY29uLTM0LnBuZycsXG4gIH0sXG4gIGljb25zOiB7XG4gICAgJzEyOCc6ICdpY29uLTEyOC5wbmcnLFxuICB9LFxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcbiAgICB7XG4gICAgICByZXNvdXJjZXM6IFsnaWNvbi0xMjgucG5nJywgJ2ljb24tMzQucG5nJ10sXG4gICAgICBtYXRjaGVzOiBbXSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFuaWZlc3Q7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRhcGxvXFxcXE9uZURyaXZlXFxcXFB1bHBpdFxcXFxwcm9qZWN0c1xcXFx0ZXN0b29cXFxcc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZGFwbG9cXFxcT25lRHJpdmVcXFxcUHVscGl0XFxcXHByb2plY3RzXFxcXHRlc3Rvb1xcXFxzY3JpcHRzXFxcXGNvbG9yLWxvZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGFwbG8vT25lRHJpdmUvUHVscGl0L3Byb2plY3RzL3Rlc3Rvby9zY3JpcHRzL2NvbG9yLWxvZy50c1wiO3R5cGUgQ29sb3JUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8IGtleW9mIHR5cGVvZiBDT0xPUlM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yTG9nKG1lc3NhZ2U6IHN0cmluZywgdHlwZT86IENvbG9yVHlwZSkge1xuICBsZXQgY29sb3I6IHN0cmluZyA9IHR5cGUgfHwgQ09MT1JTLkZnQmxhY2s7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0dyZWVuO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaW5mbyc6XG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0JsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBjb2xvciA9IENPTE9SUy5GZ1JlZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdZZWxsb3c7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGNvbG9yLCBtZXNzYWdlKTtcbn1cblxuY29uc3QgQ09MT1JTID0ge1xuICBSZXNldDogJ1xceDFiWzBtJyxcbiAgQnJpZ2h0OiAnXFx4MWJbMW0nLFxuICBEaW06ICdcXHgxYlsybScsXG4gIFVuZGVyc2NvcmU6ICdcXHgxYls0bScsXG4gIEJsaW5rOiAnXFx4MWJbNW0nLFxuICBSZXZlcnNlOiAnXFx4MWJbN20nLFxuICBIaWRkZW46ICdcXHgxYls4bScsXG4gIEZnQmxhY2s6ICdcXHgxYlszMG0nLFxuICBGZ1JlZDogJ1xceDFiWzMxbScsXG4gIEZnR3JlZW46ICdcXHgxYlszMm0nLFxuICBGZ1llbGxvdzogJ1xceDFiWzMzbScsXG4gIEZnQmx1ZTogJ1xceDFiWzM0bScsXG4gIEZnTWFnZW50YTogJ1xceDFiWzM1bScsXG4gIEZnQ3lhbjogJ1xceDFiWzM2bScsXG4gIEZnV2hpdGU6ICdcXHgxYlszN20nLFxuICBCZ0JsYWNrOiAnXFx4MWJbNDBtJyxcbiAgQmdSZWQ6ICdcXHgxYls0MW0nLFxuICBCZ0dyZWVuOiAnXFx4MWJbNDJtJyxcbiAgQmdZZWxsb3c6ICdcXHgxYls0M20nLFxuICBCZ0JsdWU6ICdcXHgxYls0NG0nLFxuICBCZ01hZ2VudGE6ICdcXHgxYls0NW0nLFxuICBCZ0N5YW46ICdcXHgxYls0Nm0nLFxuICBCZ1doaXRlOiAnXFx4MWJbNDdtJyxcbn0gYXMgY29uc3Q7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBVLFNBQVMsb0JBQW9CO0FBQ3ZXLFNBQVMsV0FBQUEsZ0JBQWU7QUFDeEIsT0FBTyxZQUFZOzs7QUNGcVYsWUFBWSxRQUFRO0FBQzVYLFlBQVksVUFBVTs7O0FDRHRCO0FBQUEsRUFDRSxNQUFRO0FBQUEsRUFDUixTQUFXO0FBQUEsRUFDWCxhQUFlO0FBQUEsRUFDZixTQUFXO0FBQUEsRUFDWCxTQUFXO0FBQUEsSUFDVCxPQUFTO0FBQUEsSUFDVCxLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixRQUFVO0FBQUEsRUFDWjtBQUFBLEVBQ0EsTUFBUTtBQUFBLEVBQ1IsZ0JBQWtCO0FBQUEsRUFDbEIsaUJBQW1CO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2YsMkNBQTJDO0FBQUEsSUFDM0MscUNBQXFDO0FBQUEsSUFDckMscUJBQXFCO0FBQUEsSUFDckIsdUJBQXVCO0FBQUEsSUFDdkIsNkJBQTZCO0FBQUEsSUFDN0IsMkJBQTJCO0FBQUEsSUFD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LEVBQ1YsUUFBUTtBQUFBLEVBQ1IsV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUNYOzs7QUgvQ0EsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxFQUFFLFFBQVEsSUFBSTtBQUVwQixJQUFNLFNBQVMsUUFBUSxrQ0FBVyxNQUFNLFFBQVE7QUFFakMsU0FBUixlQUFnQztBQUNyQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQ1QsVUFBSSxDQUFJLGNBQVcsTUFBTSxHQUFHO0FBQzFCLFFBQUcsYUFBVSxNQUFNO0FBQUEsTUFDckI7QUFFQSxZQUFNLGVBQWUsUUFBUSxRQUFRLGVBQWU7QUFFcEQsTUFBRyxpQkFBYyxjQUFjLEtBQUssVUFBVSxrQkFBVSxNQUFNLENBQUMsQ0FBQztBQUVoRSxlQUFTO0FBQUEsK0JBQWtDLFlBQVksSUFBSSxTQUFTO0FBQUEsSUFDdEU7QUFBQSxFQUNGO0FBQ0Y7OztBRHhCQSxJQUFNQyxvQ0FBbUM7QUFLekMsSUFBTSxNQUFNQyxTQUFRQyxtQ0FBVyxLQUFLO0FBQ3BDLElBQU0sWUFBWUQsU0FBUSxLQUFLLFFBQVE7QUFDdkMsSUFBTUUsVUFBU0YsU0FBUUMsbUNBQVcsTUFBTTtBQUN4QyxJQUFNLFlBQVlELFNBQVFDLG1DQUFXLFFBQVE7QUFFN0MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQ2xDO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFBQztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsU0FBU0YsU0FBUSxLQUFLLFdBQVcsVUFBVTtBQUFBLFFBQzNDLFlBQVlBLFNBQVEsS0FBSyxjQUFjLFVBQVU7QUFBQSxRQUNqRCxPQUFPQSxTQUFRLEtBQUssU0FBUyxZQUFZO0FBQUEsUUFDekMsUUFBUUEsU0FBUSxLQUFLLFVBQVUsWUFBWTtBQUFBLFFBQzNDLFVBQVVBLFNBQVEsS0FBSyxZQUFZLFlBQVk7QUFBQSxRQUMvQyxTQUFTQSxTQUFRLEtBQUssV0FBVyxZQUFZO0FBQUEsTUFDL0M7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixXQUFTLE9BQU8sTUFBTSxJQUFJO0FBQUEsTUFDNUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJvdXREaXIiXQp9Cg==
