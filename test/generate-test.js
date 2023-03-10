// LICENSE : MIT
"use strict";
const assert = require("assert");
const fs = require("fs");
const path = require("path");
import { parse } from "../src/parser";
function trim(str) {
    return str.replace(/^\s+|\s+$/, "");
}

describe("generate test", () => {
    const fixturesDir = path.join(__dirname, "patterns");
    fs.readdirSync(fixturesDir).map((caseName) => {
        it(`should ${caseName.split("-").join(" ")}`, () => {
            const fixtureDir = path.join(fixturesDir, caseName);
            let actualPath = path.join(fixtureDir, "actual.md");
            let content = fs.readFileSync(actualPath, "utf-8");
            const bookjs = path.join(fixtureDir, "book.js");
            const options = {};
            try {
                const book = require(bookjs);
                Object.assign(options, book.pluginsConfig["include-codeblock"]);
            } catch (e) {
                // no book
            }
            const results = parse(content, fixtureDir, options);
            results.forEach((result) => {
                const { target, replaced } = result;
                content = content.replace(target, replaced);
            });
            if (path.sep === "\\") {
                // Specific case of windows, transformFileSync return code with '/'
                actualPath = actualPath.replace(/\\/g, "/");
            }

            const expected = fs
                .readFileSync(path.join(fixtureDir, "expected.md"))
                .toString()
                .replace(/%FIXTURE_PATH%/g, actualPath);
            assert.equal(trim(content), trim(expected));
            return true;
        });
        return true;
    });
});
