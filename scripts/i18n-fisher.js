const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const lex = require("pug-lexer");
const TRANSLATE_MARKER = 'L';
const TRANSLATE_MARKER_PUG = 'i18nStatic';
const translatables = {};
const files = [];

// get sourceDir and languageDir
const sourceDir = process.argv[2];
const langDir = process.argv[3];


function exportTranslatables(content) {
    // get object output with single quote
    const output = JSON.stringify(content, null, 2).replace(/"/g, '\'');
    // output the language file to languageDir
    fs.writeFile([langDir, 'en.ts'].join(path.sep), 'export default ' + output + ';\n\r');
  }


  function extractFromNode(node) {
    if (ts.SyntaxKind.StringLiteral === node.kind) {
      if (node.parent.expression && TRANSLATE_MARKER === node.parent.expression.text) {
        if (node.text) {
          translatables[node.text.trim()] = '';
        }
      }
    }
    ts.forEachChild(node, extractFromNode);
  }


  function extractTranslatables(sourceFile) {
    extractFromNode(sourceFile);
  }


  function walkDirectory(directory) {
    fs.readdirSync(directory).forEach(function (file) {
      const absPath = [directory, file].join(path.sep);
      if (fs.statSync(absPath).isDirectory()) {
        walkDirectory(absPath);
      }
      else if (file.endsWith('.ts')) {
        const sourceFile = ts.createSourceFile(
          absPath, fs.readFileSync(absPath).toString(), ts.ScriptTarget.ES2015, true);
        extractTranslatables(sourceFile);
        const jsFileName = sourceFile.fileName.replace('.ts', '.js');
        try {
          fs.statSync(jsFileName);
          fs.unlink(jsFileName);
        }
        catch (err) {
        }
      }
      else if (file.endsWith('.pug')) {
        const src = fs.readFileSync(absPath).toString();
        const tokens = lex(src, { filename: absPath });
        tokens.forEach(function (t) {
          if ('text' === t.type && -1 !== t.val.indexOf(TRANSLATE_MARKER_PUG)) {
            const text = t.val;
            translatables[text.replace(/[{}|"']|(i18nStatic)/g, '').trim()] = '';
          }
        });
      }
    });
  }


  walkDirectory(sourceDir);
  exportTranslatables(translatables);
