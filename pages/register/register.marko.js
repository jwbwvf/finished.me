// Compiled using marko@4.18.29 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/finished.me$0.0.0/pages/register/register.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>register</title></head><body>");

  component_globals_tag({}, out);

  if (data.error) {
    out.w("<span>" +
      marko_escapeXml(data.error) +
      "</span>");
  }

  out.w("<form name=\"register\" action=\"/register\" method=\"post\"><div class=\"input\"><span class=\"label\">Display Name:<input type=\"text\" name=\"name\"></span><br><span class=\"label\">Email:<input type=\"text\" name=\"email\"></span><br><span class=\"label\">Password:<input type=\"password\" name=\"password\"></span><br><div class=\"actions\"><input type=\"submit\"></div></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/finished.me$0.0.0/pages/register/register.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
