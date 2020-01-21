// Compiled using marko@4.18.29 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/finished.me$0.0.0/pages/home/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_styleAttr = require("marko/src/runtime/html/helpers/style-attr"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Express View Streaming Demo</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Express View Streaming Demo</h1> Hello " +
    marko_escapeXml(data.name) +
    "! <ul>");

  var $for$0 = 0;

  marko_forOf(data.colors, function(color) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li" +
      marko_styleAttr("color:" + color) +
      ">" +
      marko_escapeXml(color) +
      "</li>");
  });

  out.w("</ul>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "8");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/finished.me$0.0.0/pages/home/template.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
