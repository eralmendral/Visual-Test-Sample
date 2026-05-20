(function () {
  var scanCount = 0;
  var button = document.querySelector("[data-rescan-target]");
  var status = document.querySelector("[data-rescan-status]");
  var target = document.querySelector("[data-visual-target]") || document.body;

  if (!button || !status) {
    return;
  }

  function setStatus(message) {
    status.textContent = message;
  }

  function publishRescan() {
    var detail = {
      count: scanCount,
      path: window.location.pathname,
      status: "complete"
    };

    window.dispatchEvent(new CustomEvent("visual-target:rescan", { detail: detail }));

    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "visual-target:rescan", detail: detail }, "*");
    }
  }

  button.addEventListener("click", function () {
    scanCount += 1;
    button.disabled = true;
    target.dataset.scanCount = String(scanCount);
    target.classList.add("is-rescanning");
    setStatus("Rescanning target...");

    window.setTimeout(function () {
      button.disabled = false;
      target.classList.remove("is-rescanning");
      target.dataset.lastScan = "complete";
      setStatus("Scan " + scanCount + " complete");
      publishRescan();
    }, 650);
  });
})();
