/*jshint esversion: 11 */

(function () {
  "use strict";
  const m = b();
  performance.mark("code/didStartRenderer"),
    m.load(
      [
        "vs/workbench/workbench.desktop.main",
        "vs/nls!vs/workbench/workbench.desktop.main",
        "vs/css!vs/workbench/workbench.desktop.main",
      ],
      function (e, o) {
        return (
          performance.mark("code/didLoadWorkbenchMain"),
          require("vs/workbench/electron-sandbox/desktop.main").main(o)
        );
      },
      {
        configureDeveloperSettings: function (e) {
          return {
            forceDisableShowDevtoolsOnError:
              typeof e.extensionTestsPath == "string",
            forceEnableDeveloperKeybindings:
              Array.isArray(e.extensionDevelopmentPath) &&
              e.extensionDevelopmentPath.length > 0,
            removeDeveloperKeybindingsAfterLoad: !0,
          };
        },
        canModifyDOM: function (e) {
          w(e);
        },
        beforeLoaderConfig: function (e) {
          e.recordStats = !0;
        },
        beforeRequire: function () {
          performance.mark("code/willLoadWorkbenchMain"),
            window.requestIdleCallback(
              () => {
                const e = document.createElement("canvas");
                e.getContext("2d").clearRect(0, 0, e.width, e.height),
                  e.remove();
              },
              { timeout: 50 }
            );
        },
      }
    );
  function b() {
    return window.MonacoBootstrapWindow;
  }
  function w(e) {
    performance.mark("code/willShowPartsSplash");
    let o = e.partsSplash;
    const c = e.colorScheme.highContrast && e.autoDetectHighContrast;
    o && c && o.baseTheme !== "hc-black" && (o = void 0),
      o && e.extensionDevelopmentPath && (o.layoutInfo = void 0);
    let n, a, d;
    o
      ? ((n = o.baseTheme),
        (a = o.colorInfo.editorBackground),
        (d = o.colorInfo.foreground))
      : c
      ? ((n = "hc-black"), (a = "#000000"), (d = "#FFFFFF"))
      : ((n = "vs-dark"), (a = "#1E1E1E"), (d = "#CCCCCC"));
    const s = document.createElement("style");
    if (
      ((s.className = "initialShellColors"),
      document.head.appendChild(s),
      (s.textContent = `body { background-color: ${a}; color: ${d}; margin: 0; padding: 0; }`),
      o?.layoutInfo)
    ) {
      const { layoutInfo: t, colorInfo: i } = o,
        r = document.createElement("div");
      (r.id = "monaco-parts-splash"),
        (r.className = n),
        t.windowBorder &&
          ((r.style.position = "relative"),
          (r.style.height = "calc(100vh - 2px)"),
          (r.style.width = "calc(100vw - 2px)"),
          (r.style.border = "1px solid var(--window-border-color)"),
          r.style.setProperty("--window-border-color", i.windowBorder),
          t.windowBorderRadius &&
            (r.style.borderRadius = t.windowBorderRadius)),
        (t.sideBarWidth = Math.min(
          t.sideBarWidth,
          window.innerWidth - (t.activityBarWidth + t.editorPartMinWidth)
        ));
      const l = document.createElement("div");
      l.setAttribute(
        "style",
        `position: absolute; width: 100%; left: 0; top: 0; height: ${t.titleBarHeight}px; background-color: ${i.titleBarBackground}; -webkit-app-region: drag;`
      ),
        r.appendChild(l);
      const h = document.createElement("div");
      if (
        (h.setAttribute(
          "style",
          `position: absolute; height: calc(100% - ${t.titleBarHeight}px); top: ${t.titleBarHeight}px; ${t.sideBarSide}: 0; width: ${t.activityBarWidth}px; background-color: ${i.activityBarBackground};`
        ),
        r.appendChild(h),
        e.workspace)
      ) {
        const u = document.createElement("div");
        u.setAttribute(
          "style",
          `position: absolute; height: calc(100% - ${t.titleBarHeight}px); top: ${t.titleBarHeight}px; ${t.sideBarSide}: ${t.activityBarWidth}px; width: ${t.sideBarWidth}px; background-color: ${i.sideBarBackground};`
        ),
          r.appendChild(u);
      }
      const p = document.createElement("div");
      p.setAttribute(
        "style",
        `position: absolute; width: 100%; bottom: 0; left: 0; height: ${
          t.statusBarHeight
        }px; background-color: ${
          e.workspace ? i.statusBarBackground : i.statusBarNoFolderBackground
        };`
      ),
        r.appendChild(p),
        document.body.appendChild(r);
    }
    performance.mark("code/didShowPartsSplash");
  }
})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f80445acd5a3dadef24aa209168452a3d97cc326/core/vs/code/electron-browser/workbench/workbench.js.map
