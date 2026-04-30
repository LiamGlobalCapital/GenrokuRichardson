/* =========================================================
   Genroku Grill: partial includes
   Loads shared header, info band, and footer into every page.

   How it works:
   - Every page has these placeholders in the HTML:
       <div data-include="header"></div>
       <div data-include="info-band"></div>
       <div data-include="footer"></div>
   - This script finds those placeholders and replaces each one
     with the contents of the matching matching .html file in this folder.
   - The body's data-page attribute (e.g. <body data-page="catering">)
     decides which nav link gets highlighted.

   To add a new partial: drop a new .html matching .html file in this folder, then
   reference it with <div data-include="filename"></div> in any page.
   ========================================================= */

(function () {
  'use strict';

  // Find all include placeholders on the page and load each one.
  function loadIncludes() {
    var placeholders = document.querySelectorAll('[data-include]');
    var promises = [];

    placeholders.forEach(function (el) {
      var name = el.getAttribute('data-include');
      promises.push(
        fetch(name + '.html')
          .then(function (response) {
            if (!response.ok) {
              throw new Error('Could not load ' + name + '.html');
            }
            return response.text();
          })
          .then(function (html) {
            el.outerHTML = html;
          })
          .catch(function (err) {
            console.error('Include error:', err);
          })
      );
    });

    return Promise.all(promises);
  }

  // Highlight the current page's nav link, based on <body data-page="...">.
  function highlightActiveNav() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;
    var link = document.querySelector('.nav-links a[data-nav="' + page + '"]');
    if (link) link.classList.add('active');
  }

  // Run on page load: load partials first, then highlight the right nav link
  // (since the nav doesn't exist until after the header partial is loaded).
  document.addEventListener('DOMContentLoaded', function () {
    loadIncludes().then(highlightActiveNav);
  });
})();
