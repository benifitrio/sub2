const loader = {
  loaderTemplate() {
    return `<div class="loader">
        <span></span>
        <span></span>
        <span></span>
    </div>`;
  },

  OfflineTemplate() {
    return `
        <div class="content">
            <img src="./images/sad-emoji.png">
            <h2>It looks like you're offline or refresh this page.</h2>
        </div>`;
  },
};

export default loader;
