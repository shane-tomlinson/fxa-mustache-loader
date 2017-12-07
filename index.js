/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

module.exports = function (source) {
  return `
    var mustache = require('mustache');
    module.exports = function (view, partials) {
      partials = partials || {};
      var src = ${JSON.stringify(source)}
      return mustache.render(src, view, partials);
    };
  `;
};

