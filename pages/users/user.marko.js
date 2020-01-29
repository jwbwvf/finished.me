// Compiled using marko@4.18.29 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/finished.me$0.0.0/pages/users/user.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>" +
    marko_escapeXml(data.name) +
    "'s Books</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>" +
    marko_escapeXml(data.name) +
    "'s Books</h1>");

  if (data.isAllowedToModify) {
    out.w("<form" +
      marko_attr("action", ("/users/" + data.id) + "/books") +
      " method=\"post\">Book: <input type=\"text\" name=\"title\"><button type=\"submit\">Add</button></form>");
  }

  out.w("<ul>");

  var $for$0 = 0;

  marko_forOf(data.books, function(book) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li>" +
      marko_escapeXml(book.title));

    if (data.isAllowedToModify) {
      out.w("<form" +
        marko_attr("action", ((("/users/" + data.id) + "/books/") + book.id) + "/delete") +
        " method=\"post\"><button type=\"submit\">X</button></form>");
    }

    out.w("</li>");
  });

  out.w("</ul>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "13");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/finished.me$0.0.0/pages/users/user.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
