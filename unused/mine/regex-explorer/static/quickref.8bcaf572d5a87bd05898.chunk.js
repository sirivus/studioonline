"use strict";
(("undefined" !== typeof self ? self : this).webpackChunkregex101 =
  ("undefined" !== typeof self ? self : this).webpackChunkregex101 || []).push([
  [653],
  {
    12948: (e, a, s) => {
      s.r(a), s.d(a, { default: () => W });
      var n = s(70885),
        t = s(67294),
        r = s(93942),
        i = s(79352),
        l = s(53854),
        c = s(49581),
        o = s(53808),
        d = s(54430),
        h = s(43406),
        p = s(27582),
        x = s(63101),
        m = "ALL_TOKENS",
        g = "COMMON_TOKENS",
        u = "GENERAL_TOKENS",
        f = "ANCHORS",
        v = "META_SEQUENCES",
        j = "QUANTIFIERS",
        b = "GROUP_CONSTRUCTS",
        y = "CHARACTER_CLASSES",
        R = "FLAGS_MODIFIERS",
        k = "SUBSTITUTION",
        w = s(4942),
        P = s(81370),
        C = s.n(P),
        N = s(1947);
      const A = "vBshH",
        E = "h8bCK",
        Z = "JmxiQ",
        T = "WpbzR",
        V = "O6SK0",
        O = "Gnt0e",
        I = "SjF0L";
      var G = s(85893);
      function S(e) {
        return (0, G.jsx)("span", { className: N.Z.tokenSample, children: e });
      }
      function F(e) {
        return (0, G.jsx)("span", { className: A, children: e });
      }
      const J = function () {
        var e,
          a =
            ((e = {}),
            (0, w.Z)(e, u, [
              {
                token: "\\n",
                desc: (0, o.Z)("Newline"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Matches a newline character"),
                }),
                example: (0, G.jsxs)("div", {
                  children: [
                    "First line",
                    (0, G.jsx)("br", {}),
                    (0, G.jsx)("span", {}),
                    (0, G.jsx)("br", {}),
                    "Third line",
                    (0, G.jsx)("br", {}),
                  ],
                }),
                keywords: [
                  "enter",
                  "new paragraph",
                  "paragraph break",
                  "line break",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\r",
                desc: (0, o.Z)("Carriage return"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches a carriage return, unicode character U+2185."
                  ),
                }),
                keywords: ["13", "&carr;", "U+21B5", "u21B5"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\t",
                desc: (0, o.Z)("Tab"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches a tab character. Historically, tab stops happen every 8 characters."
                  ),
                }),
                example: (0, G.jsx)(x.vV, {
                  tag: "div",
                  text: "Here comes a {1} tab character.",
                  ph1: "<span className={styles.group0}>        </span>",
                }),
                keywords: ["indent"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\0",
                desc: (0, o.Z)("Null character"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches a null character, most often visually represented in unicode using U+2400."
                  ),
                }),
                keywords: ["U+2400", "u2400", "U+0000", "u0000", "^@"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                ],
              },
            ]),
            (0, w.Z)(e, y, [
              {
                token: "[abc]",
                basic: !0,
                desc: (0, o.Z)("A single character of: a, b or c"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "bb" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "ccc" }),
                  ],
                }),
                exampleRegex: "[abc]+",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Matches either an a, b or c character"),
                }),
                keywords: ["specific", "letters", "alphabet"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "[[ab][cd]]",
                basic: !0,
                desc: (0, o.Z)("A single character of: a, b, c or d"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "ab" }),
                    "123",
                    (0, G.jsx)("span", { className: T, children: "cd" }),
                  ],
                }),
                exampleRegex: "[[abc][def]]",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Nested character classes act as boolean OR, equivalent to simply using {1}",
                  ph1: S("[abcd]"),
                }),
                keywords: [
                  "letter range",
                  "letters",
                  "alphabet",
                  "uppercase",
                  "lowercase",
                ],
                flavors: [C().JAVA],
              },
              {
                token: "[^abc]",
                basic: !0,
                desc: (0, o.Z)("A character except: a, b or c"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "Anything " }),
                    "b",
                    (0, G.jsx)("span", { className: T, children: "ut " }),
                    "abc",
                    (0, G.jsx)("span", { className: T, children: "." }),
                  ],
                }),
                exampleRegex: "[^abc]+",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches any character except for an a, b or c"
                  ),
                }),
                keywords: [
                  "anything except",
                  "anything but",
                  "letter range",
                  "letters",
                  "alphabet",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "[a-z]",
                basic: !0,
                desc: (0, o.Z)("A character in the range: a-z"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "O",
                    (0, G.jsx)("span", { className: T, children: "nly" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    "-",
                    (0, G.jsx)("span", { className: T, children: "z" }),
                  ],
                }),
                exampleRegex: "[a-z]+",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches any characters between a and z, including a and z."
                  ),
                }),
                keywords: ["letter range", "letters", "alphabet"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "[^a-z]",
                basic: !0,
                desc: (0, o.Z)("A character not in the range: a-z"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "A" }),
                    "nything",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "but",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "a",
                    (0, G.jsx)("span", { className: T, children: "-" }),
                    "z",
                    (0, G.jsx)("span", { className: T, children: "." }),
                  ],
                }),
                exampleRegex: "[^a-z]+",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches any characters except those in the range a-z."
                  ),
                }),
                keywords: ["letter range", "letters", "alphabet"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "[a-zA-Z]",
                basic: !0,
                desc: (0, o.Z)("A character in the range: a-z or A-Z"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "abc" }),
                    "123",
                    (0, G.jsx)("span", { className: T, children: "DEF" }),
                  ],
                }),
                exampleRegex: "[a-zA-Z]+",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches any characters between a-z or A-Z. You can combine as much as you please."
                  ),
                }),
                keywords: [
                  "letter range",
                  "letters",
                  "alphabet",
                  "uppercase",
                  "lowercase",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "[\\w&&[^\\d]]",
                basic: !0,
                desc: (0, o.Z)("Character class intersection"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "ab" }),
                    "123",
                    (0, G.jsx)("span", { className: T, children: "cd_ef" }),
                  ],
                }),
                exampleRegex: "[\\w&&[^\\d]]+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches the intersection between the two character classes. Useful if you want to white or blacklist certain characters from a broader class.",
                }),
                keywords: [
                  "letter range",
                  "letters",
                  "alphabet",
                  "uppercase",
                  "lowercase",
                ],
                flavors: [C().JAVA],
              },
              {
                token: "[[:alnum:]]",
                desc: (0, o.Z)("Letters and digits"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "1st" }),
                    ",",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "2nd" }),
                    ",",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "and" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "3rd" }),
                    ".",
                  ],
                }),
                exampleRegex: "[[:alnum:]]+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "An alternate way to match any letter or digit. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[A-Za-z0-9]"),
                }),
                keywords: [
                  "posix",
                  "numbers",
                  "digits",
                  "letter range",
                  "letters",
                  "alphabet",
                  "uppercase",
                  "lowercase",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:alpha:]]",
                desc: (0, o.Z)("Letters"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "hello" }),
                    ",",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "there" }),
                    "!",
                  ],
                }),
                exampleRegex: "[[:alpha:]]+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "An alternate way to match alphabet letters. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[A-Za-z]"),
                }),
                keywords: [
                  "posix",
                  "letter range",
                  "letters",
                  "alphabet",
                  "uppercase",
                  "lowercase",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:ascii:]]",
                desc: (0, o.Z)("ASCII codes 0-127"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches any character in the valid ASCII range. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[\\x00-\\x7F]"),
                }),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children: "Any basic latin character. ",
                    }),
                    "\xe9",
                    (0, G.jsx)("span", {
                      className: T,
                      children: " is not one of them.",
                    }),
                  ],
                }),
                exampleRegex: "[[:ascii:]]+",
                regexFlags: "g",
                keywords: [
                  "posix",
                  "ascii",
                  "numbers",
                  "digits",
                  "letter range",
                  "letters",
                  "alphabet",
                  "uppercase",
                  "lowercase",
                  "latin",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:blank:]]",
                desc: (0, o.Z)("Space or tab only"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "b",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "c",
                  ],
                }),
                exampleRegex: "[[:blank:]]",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches spaces and tabs (but not newlines). Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[ \\t]"),
                }),
                keywords: ["posix", "spaces", "tabs"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:cntrl:]]",
                desc: (0, o.Z)("Control characters"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches characters that are often used to control text presentation, including newlines, null characters, tabs and the escape character. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[\\x00-\\x1F\\x7F]"),
                }),
                keywords: [
                  "posix",
                  "\\t",
                  "\\n",
                  "newlines",
                  "tabs",
                  "escape",
                  "esc",
                  "sequence",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:digit:]]",
                desc: (0, o.Z)("Decimal digits"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "one: ",
                    (0, G.jsx)("span", { className: T, children: "1" }),
                    ", two:",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "2" }),
                  ],
                }),
                exampleRegex: "[[:digit:]]",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches decimal digits. Equivalent to {1} or {2}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[0-9]"),
                  ph2: S("\\d"),
                }),
                keywords: ["posix", "numbers", "digits", "numeric"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:graph:]]",
                desc: (0, o.Z)("Visible characters (not space)"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches printable, non-whitespace, non-control characters only. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[\\x21-\\x7E]"),
                }),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "A|m0st" }),
                    " \xe9",
                    (0, G.jsx)("span", { className: T, children: "verything" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "goes." }),
                  ],
                }),
                exampleRegex: "[[:graph:]]+",
                regexFlags: "g",
                keywords: [
                  "punctuation",
                  "posix",
                  "visible",
                  "printable",
                  "letters",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:lower:]]",
                desc: (0, o.Z)("Lowercase letters"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "abc" }),
                    "DEF",
                    (0, G.jsx)("span", { className: T, children: "ghi" }),
                  ],
                }),
                exampleRegex: "[[:lower:]]+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches lowercase letters. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[a-z]"),
                }),
                keywords: ["posix", "alphabet", "small", "non-capitals"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:print:]]",
                desc: (0, o.Z)("Visible characters"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches printable characters, part of the basic latin set, such as letters and spaces, without including control characters. The double square brackets is not a typo, POSIX notation demands it."
                  ),
                }),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "A|m0st " }),
                    "\xe9",
                    (0, G.jsx)("span", {
                      className: T,
                      children: "verything goes.",
                    }),
                  ],
                }),
                exampleRegex: "[[:print:]]+",
                regexFlags: "g",
                keywords: ["posix", "visible", "printable", "normal", "common"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:punct:]]",
                desc: (0, o.Z)("Visible punctuation characters"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "hello",
                    (0, G.jsx)("span", { className: T, children: "," }),
                    " regex user",
                    (0, G.jsx)("span", { className: T, children: "!" }),
                  ],
                }),
                exampleRegex: "[[:punct:]]",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches characters that are not whitespace, letters or numbers. The double square brackets is not a typo, POSIX notation demands it."
                  ),
                }),
                keywords: ["posix", "punctuation", "period", "fullstop"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:space:]]",
                desc: (0, o.Z)("Whitespace"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "any",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "whitespace",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "character",
                  ],
                }),
                exampleRegex: "[[:space:]]",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches whitespace characters. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("\\s"),
                }),
                keywords: ["posix", "space", "spacebar", "blank"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:upper:]]",
                desc: (0, o.Z)("Uppercase letters"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "ABC" }),
                    "abc",
                    (0, G.jsx)("span", { className: T, children: "DEF" }),
                  ],
                }),
                exampleRegex: "[[:upper:]]+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches uppercase letters. Equivalent to {1}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("[A-Z]"),
                }),
                keywords: ["posix", "capitals"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:word:]]",
                desc: (0, o.Z)("Word characters"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "any" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "word_" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "character" }),
                  ],
                }),
                exampleRegex: "[[:word:]]+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches letters, numbers and underscores. Equivalent to {1} or {2}. The double square brackets is not a typo, POSIX notation demands it.",
                  ph1: S("\\w"),
                  ph2: S("[a-zA-Z0-9_]"),
                }),
                keywords: ["posix", "letters", "numbers", "underscore"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:xdigit:]]",
                desc: (0, o.Z)("Hexadecimal digits"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "h",
                    (0, G.jsx)("span", { className: T, children: "e" }),
                    "x",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "123" }),
                    "! n",
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    "vy ",
                    (0, G.jsx)("span", { className: T, children: "b" }),
                    "lue ",
                    (0, G.jsx)("span", { className: T, children: "f" }),
                    "or ",
                    (0, G.jsx)("span", { className: T, children: "c" }),
                    "ss: #",
                    (0, G.jsx)("span", { className: T, children: "0A0AB5" }),
                  ],
                }),
                exampleRegex: "[[:xdigit:]]+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches hexadecimal digits, case insensitive. Equivalent to {1}.",
                  ph1: S("[0-9a-fA-F]"),
                }),
                keywords: ["posix", "numbers", "css", "color"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:<:]]",
                desc: (0, o.Z)("Start of word"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "d" }),
                    "ot end",
                  ],
                }),
                exampleRegex: "[[:<:]]d",
                info: (0, G.jsx)(x.vV, {
                  tag: "div",
                  text: "This POSIX equivalent of the {1} (word boundary) is interpreted as {2}",
                  ph1: S("\\b"),
                  ph2: S("\\b(?=\\w)"),
                }),
                keywords: ["posix", "word", "boundary", "beginning"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "[[:>:]]",
                desc: (0, o.Z)("End of word"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "dot en",
                    (0, G.jsx)("span", { className: T, children: "d" }),
                  ],
                }),
                exampleRegex: "d[[:>:]]",
                regexFlags: "g",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      'This POSIX equivalent of the "\\b" word boundary is interpreted as'
                    ),
                    " ",
                    (0, G.jsx)("span", {
                      className: N.Z.tokenSample,
                      children: "\\\\b(?<=\\\\w)",
                    }),
                  ],
                }),
                keywords: ["posix", "word", "boundary", "end"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
            ]),
            (0, w.Z)(e, v, [
              {
                token: ".",
                basic: !0,
                desc: (0, o.Z)("Any single character"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", {
                    className: T,
                    children: "a b c",
                  }),
                }),
                exampleRegex: ".+",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches any character other than newline (or including line terminators with the {1} flag)",
                  ph1: F("/s"),
                }),
                keywords: ["line", "dot"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a|b",
                basic: !0,
                desc: (0, o.Z)("Alternate - match either a or b"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    " or ",
                    (0, G.jsx)("span", { className: T, children: "b" }),
                    ", pick one!",
                  ],
                }),
                exampleRegex: "a|b",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches either what is before the {1} or what is after it - in this case `a` or `b`.",
                      ph1: S("|"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "You can use alternates locally as part of a capturing/non-capturing group. For example: {1}",
                      ph1: F("/I love (?:cats|dogs) but hate snakes/"),
                    }),
                  ],
                }),
                keywords: [
                  "either",
                  "or",
                  "alternatively",
                  "alternate",
                  "capture",
                  "isolate",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\s",
                basic: !0,
                desc: (0, o.Z)("Any whitespace character"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "any",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "whitespace",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "character",
                  ],
                }),
                exampleRegex: "\\s",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches any space, tab or newline character."
                  ),
                }),
                keywords: ["space", "spacebar", "blank"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\S",
                basic: !0,
                desc: (0, o.Z)("Any non-whitespace character"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "any" }),
                    " ",
                    (0, G.jsx)("span", {
                      className: T,
                      children: "non-whitespace",
                    }),
                  ],
                }),
                exampleRegex: "\\S+",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches anything other than a space, tab or newline."
                  ),
                }),
                keywords: [
                  "no",
                  "space",
                  "spacebar",
                  "tab",
                  "newline",
                  "new paragraph",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\d",
                basic: !0,
                desc: (0, o.Z)("Any digit"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "one: ",
                    (0, G.jsx)("span", { className: T, children: "1" }),
                    ", two:",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "2" }),
                  ],
                }),
                exampleRegex: "\\d",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches any decimal digit. Equivalent to {1}.",
                  ph1: S("[0-9]"),
                }),
                keywords: ["number", "numeric"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\D",
                basic: !0,
                desc: (0, o.Z)("Any non-digit"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "one: " }),
                    "1",
                    (0, G.jsx)("span", { className: T, children: ", two: " }),
                    "2",
                  ],
                }),
                exampleRegex: "\\D+",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches anything other than a decimal/digit."
                  ),
                }),
                keywords: ["no", "number", "except"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\w",
                basic: !0,
                desc: (0, o.Z)("Any word character"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "any" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "word" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "character" }),
                  ],
                }),
                exampleRegex: "\\w+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches any letter, digit or underscore. Equivalent to {1}.",
                  ph1: S("[a-zA-Z0-9_]"),
                }),
                keywords: ["letter", "digit", "number", "underscore"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\W",
                basic: !0,
                desc: (0, o.Z)("Any non-word character"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "not",
                    (0, G.jsx)("span", { className: T, children: "." }),
                    "a",
                    (0, G.jsx)("span", { className: T, children: "@" }),
                    "word",
                    (0, G.jsx)("span", { className: T, children: "%" }),
                    "character",
                  ],
                }),
                exampleRegex: "\\W+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches anything other than a letter, digit or underscore. Equivalent to {1}",
                  ph1: S("[^a-zA-Z0-9_]"),
                }),
                keywords: ["space", "punctuation", "symbol", "tab"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\X",
                desc: (0, o.Z)("Any Unicode sequences, linebreaks included"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", {
                    className: T,
                    children: "\xe4ny \xfanic\xf8d3 character",
                  }),
                }),
                exampleRegex: "\\X+",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches any valid Unicode sequence, including line breaks. Equivalent to {1}.",
                  ph1: S("(?s:.)"),
                }),
                keywords: [
                  "any",
                  "character",
                  "number",
                  "digit",
                  "symbol",
                  "dos",
                  "newline",
                  "line break",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\C",
                desc: (0, o.Z)("Match one data unit"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "1" }),
                    " unit",
                  ],
                }),
                exampleRegex: "\\C",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches exactly one data unit of input. Can match individual bytes in UTF-8 mode, leading to undefined behaviour if a search starts inside a character."
                  ),
                }),
                keywords: ["one", "anything", "unicode", "ascii", "utf"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\R",
                desc: (0, o.Z)("Unicode newlines"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {}),
                    (0, G.jsx)("br", {}),
                    "newline above captured",
                  ],
                }),
                exampleRegex: "(\\R)",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches any Unicode newline sequence. Equivalent to (?>\\r\\n|\\n|\\x0b|\\f|\\r|\\x85)."
                    ),
                    ";",
                  ],
                }),
                keywords: [
                  "newline",
                  "new",
                  "linefeed",
                  "carriage",
                  "return",
                  "sequence",
                ],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "\\N",
                desc: (0, o.Z)("Match anything but a newline"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children: "non-newline text here",
                    }),
                    (0, G.jsx)("br", {}),
                    (0, G.jsx)("br", {}),
                    (0, G.jsx)("span", { className: T, children: "and here" }),
                  ],
                }),
                exampleRegex: "\\N+",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches any character that is not a newline, the opposite of {1}. Not affected by the single line {2} flag.",
                      ph1: S("\\n"),
                      ph2: F("/s"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Equivalent to {1}",
                      ph1: F("(?-s:.)"),
                    }),
                  ],
                }),
                keywords: [
                  "newline",
                  "new",
                  "linefeed",
                  "carriage",
                  "return",
                  "sequence",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\v",
                desc: (0, o.Z)("Vertical whitespace character"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "line one",
                    (0, G.jsxs)("span", {
                      className: T,
                      children: ["&vellip;", (0, G.jsx)("br", {})],
                    }),
                    "line two",
                  ],
                }),
                exampleRegex: "(\\v)",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches unicode vertical whitespace, considered a character class by the PCRE engine: {1}.",
                      ph1: F("[\\x{2028}\\n\\r\\x{000B}\\f\\x{2029}\\x{0085}]"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Golang/RE2, Python, and Javascript consider {1} to be just vertical tab (ascii {2}).",
                      ph1: S("\\v"),
                      ph2: S("\\x{000B}"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "{1} is a line separator which can stand for {2}, {3}, {4}, or {5}.",
                      ph1: S("\\x{2028}"),
                      ph2: S("\\r"),
                      ph3: S("\\n"),
                      ph4: S("\\r\\n"),
                      ph5: S("\\x{0085}"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "{1} is a paragraph separator (PS) character.",
                      ph1: S("\\x{2029}"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "{1} is NEL, next line character.",
                      ph1: S("\\x{0085}"),
                    }),
                  ],
                }),
                keywords: [
                  "newline",
                  "VT",
                  "new",
                  "linefeed",
                  "carriage",
                  "return",
                  "ascii",
                  "11",
                  "control+K",
                  "^K",
                  "U+000B",
                  "U+240B",
                ],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\V",
                desc: (0, o.Z)("Negation of \\v"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "line one" }),
                    (0, G.jsx)("br", {}),
                    (0, G.jsx)("br", {}),
                    (0, G.jsx)("span", {
                      className: T,
                      children: "line three",
                    }),
                  ],
                }),
                exampleRegex: "(\\V+)",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches anything not matched by {1}.",
                      ph1: S("\\v"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "PCRE equivalent is {1}.",
                      ph1: S(
                        "[^\\x{2028}\\n\\r\\x{000B}\\f\\x{2029}\\x{0085}]"
                      ),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Golang/RE2, Python, and Javascript equivalent is {1}.",
                      ph1: S("[^\\x{000B}]"),
                    }),
                  ],
                }),
                keywords: [
                  "not",
                  "VT",
                  "newline",
                  "new",
                  "linefeed",
                  "carriage",
                  "return",
                  "ascii",
                  "11",
                  "control+K",
                  "^K",
                  "U+000B",
                  "U+240B",
                ],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "\\h",
                desc: (0, o.Z)("Horizontal whitespace character"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "b",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "c",
                    (0, G.jsx)("span", { className: T, children: "    " }),
                    "d",
                  ],
                }),
                exampleRegex: "\\h",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches spaces, tabs, non-breaking/mathematical/ideographic spaces, and so on. Works with Unicode.",
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Equivalent to {1}.",
                      ph1: S(
                        "[ \\t\\x{00A0}\\x{1680}\\x{180E}\\x{2000}\\x{2001}\\x{2002}\\x{2003}\\x{2004}\\x{2005}\\x{2006}\\x{2007}\\x{2008}\\x{2009}\\x{200A}\\x{202F}\\x{205F}\\x{3000}]"
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "space",
                  "blank",
                  "spacebar",
                  "tab",
                  "en",
                  "em",
                  "thin",
                  "hair",
                  "narrow",
                  "mathematical",
                  "ideographic",
                  "medium",
                  "three-per-em",
                  "four-per-em",
                  "six-per-em",
                  "punctuation",
                  "mongolian",
                  "ogham",
                ],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "\\H",
                desc: (0, o.Z)("Negation of \\h"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "b" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "c" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "d" }),
                  ],
                }),
                exampleRegex: "\\H+",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches any character that is not horizontal whitespace {1}.",
                      ph1: S("\\h"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Equivalent to {1}.",
                      ph1: S(
                        "[^ \\t\\x{00A0}\\x{1680}\\x{180E}\\x{2000}\\x{2001}\\x{2002}\\x{2003}\\x{2004}\\x{2005}\\x{2006}\\x{2007}\\x{2008}\\x{2009}\\x{200A}\\x{202F}\\x{205F}\\x{3000}]"
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "not",
                  "space",
                  "blank",
                  "spacebar",
                  "tab",
                  "en",
                  "em",
                  "thin",
                  "hair",
                  "narrow",
                  "mathematical",
                  "ideographic",
                  "medium",
                  "three-per-em",
                  "four-per-em",
                  "six-per-em",
                  "punctuation",
                  "mongolian",
                  "ogham",
                ],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "\\K",
                desc: (0, o.Z)("Reset match"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Sets the given position in the regex as the new start of the match. Nothing preceding {1} will be returned as part of the full match.",
                  ph1: S("\\K"),
                }),
                example: (0, G.jsxs)("div", {
                  children: [
                    "123",
                    (0, G.jsx)("span", { className: T, children: ",456,789" }),
                  ],
                }),
                exampleRegex: "[\\d]+\\K[\\d,]+",
                keywords: [
                  "match",
                  "position",
                  "ignore",
                  "start",
                  "point",
                  "over",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\#",
                desc: (0, o.Z)("Match subpattern number #"),
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Usually referred to as a `backreference`, this will match a repeat of the text matched and captured by the capture group # (number) specified.",
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "To reduce ambiguity one may also use {1}, or {2} where `#` is a digit.",
                      ph1: S("\\g#"),
                      ph2: S("\\g{#}"),
                    }),
                  ],
                }),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Repeat le",
                    (0, G.jsx)("span", { className: V, children: "t" }),
                    (0, G.jsx)("span", { className: T, children: "t" }),
                    "ers",
                  ],
                }),
                exampleRegex: "(.)\\1",
                keywords: [
                  "repeated",
                  "duplicates",
                  "same",
                  "backreference",
                  "reference",
                ],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().PYTHON,
                  C().JAVASCRIPT,
                  C().JAVA,
                ],
              },
              {
                token: "\\pX",
                desc: (0, o.Z)("Unicode property X"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "\xa3" }),
                    " or",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "$" }),
                    " or even",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "\xae" }),
                  ],
                }),
                exampleRegex: "\\pS",
                regexFlags: "g",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches a unicode character with the given property:"
                    ),
                    " ",
                    (0, G.jsx)(x.rU, {
                      target: "_blank",
                      to: "//www.fileformat.info/info/unicode/category/index.htm",
                      absolute: !0,
                      children:
                        "http://www.fileformat.info/info/unicode/category/index.htm",
                    }),
                  ],
                }),
                keywords: [
                  "category",
                  "latin",
                  "uppercase",
                  "lowercase",
                  "language",
                  "any",
                  "alphabets",
                  "symbols",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "\\p{...}",
                desc: (0, o.Z)("Unicode property or script category"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children:
                        "\u0566\u057e\u0561\u0580\u0573\u0561\u0576\u0584",
                    }),
                    ' is the word "fun" in Armenian',
                  ],
                }),
                exampleRegex: "\\p{Armenian}+",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches a unicode character with the given group of properties or categories:"
                    ),
                    (0, G.jsxs)("div", {
                      children: [
                        (0, G.jsx)(x.rU, {
                          target: "_blank",
                          to: "//www.fileformat.info/info/unicode/category/index.htm",
                          absolute: !0,
                          children:
                            "http://www.fileformat.info/info/unicode/category/index.htm",
                        }),
                        (0, G.jsx)("br", {}),
                        (0, G.jsx)(x.rU, {
                          target: "_blank",
                          to: "http://www.regular-expressions.info/unicode.html#category",
                          absolute: !0,
                          children:
                            "http://www.regular-expressions.info/unicode.html#category",
                        }),
                      ],
                    }),
                  ],
                }),
                keywords: [
                  "category",
                  "latin",
                  "uppercase",
                  "lowercase",
                  "language",
                  "any",
                  "alphabets",
                  "foreign",
                ],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVASCRIPT,
                  C().JAVA,
                ],
              },
              {
                token: "\\PX",
                desc: (0, o.Z)("Negation of \\pX"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "\xa3",
                    (0, G.jsx)("span", { className: T, children: " or " }),
                    "$",
                    (0, G.jsx)("span", { className: T, children: " or even " }),
                    "\xae",
                  ],
                }),
                exampleRegex: "\\PS+",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches a unicode character outside of the given property."
                  ),
                }),
                keywords: [
                  "category",
                  "latin",
                  "uppercase",
                  "lowercase",
                  "language",
                  "any",
                  "alphabets",
                  "symbols",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "\\P{...}",
                desc: (0, o.Z)("Negation of \\p"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "\u0566\u057e\u0561\u0580\u0573\u0561\u0576\u0584",
                    (0, G.jsxs)("span", {
                      className: T,
                      children: [" ", 'is the word "fun" in Armenian'],
                    }),
                  ],
                }),
                exampleRegex: "\\P{Armenian}+",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches a unicode character that doesn't have any of the given properties."
                  ),
                }),
                keywords: [
                  "category",
                  "latin",
                  "uppercase",
                  "lowercase",
                  "language",
                  "any",
                  "alphabets",
                  "foreign",
                ],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVASCRIPT,
                  C().JAVA,
                ],
              },
              {
                token: "\\Q...\\E",
                desc: (0, o.Z)("Quote; treat as literals"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", {
                    className: T,
                    children: "everything \\w is ^ literal",
                  }),
                }),
                exampleRegex: "\\Qeverything \\w is ^ literal\\E",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Any characters between {1} and {2}, including metacharacters, will be treated as literals.",
                  ph1: S("\\Q"),
                  ph2: S("\\E"),
                }),
                keywords: ["escape", "meta", "match", "characters"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "\\k{name}",
                desc: (0, o.Z)("Match subpattern `name`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "aaaa" }),
                    (0, G.jsx)("span", {
                      className: T,
                      children: " and again ",
                    }),
                    (0, G.jsx)("span", { className: O, children: "aaaa" }),
                  ],
                }),
                exampleRegex: "(?'first'a+) and again (\\k{first})",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches the same text a capture group called `name` matched and captured. Alternate notations are {1} and {2}. Valid for .NET.",
                  ph1: S("\\k<name>"),
                  ph2: S("\\k'name'"),
                }),
                keywords: [
                  "capture",
                  "group",
                  "by",
                  "name",
                  "recall",
                  "match",
                  "again",
                ],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "\\k<name>",
                desc: (0, o.Z)("Match subpattern `name`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "aaaa" }),
                    (0, G.jsx)("span", {
                      className: T,
                      children: " and again ",
                    }),
                    (0, G.jsx)("span", { className: O, children: "aaaa" }),
                  ],
                }),
                exampleRegex: "(?<first>a+) and again (\\k<first>)",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches the same text matched and captured by a previously named capture group."
                  ),
                }),
                keywords: [
                  "capture",
                  "group",
                  "by",
                  "name",
                  "recall",
                  "match",
                  "again",
                ],
                flavors: [C().PCRE, C().PCRE2, C().JAVASCRIPT, C().JAVA],
              },
              {
                token: "\\k'name'",
                desc: (0, o.Z)("Match subpattern `name`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "aaaa" }),
                    (0, G.jsx)("span", {
                      className: T,
                      children: " and again ",
                    }),
                    (0, G.jsx)("span", { className: O, children: "aaaa" }),
                  ],
                }),
                exampleRegex: "(?'first'a+) and again (\\k'first')",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "This is an alternate syntax for {1} or {2}.",
                  ph1: S("\\k<name>"),
                  ph2: S("\\k{name}"),
                }),
                keywords: [
                  "capture",
                  "group",
                  "by",
                  "name",
                  "recall",
                  "match",
                  "again",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\gn",
                desc: (0, o.Z)("Match nth subpattern"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "aaaa" }),
                    (0, G.jsx)("span", { className: T, children: " and " }),
                    (0, G.jsx)("span", { className: O, children: "aaaa" }),
                    "aaa",
                  ],
                }),
                exampleRegex: "(a+) and (\\g1)",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("p", {
                      children: (0, o.Z)(
                        "Matches the text captured by the nth group. n can contain more than one digit, if necessary."
                      ),
                    }),
                    (0, G.jsx)("p", {
                      children: (0, o.Z)(
                        "This may be useful in order to avoid ambiguity with octal characters."
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "capture",
                  "group",
                  "by",
                  "number",
                  "recall",
                  "match",
                  "again",
                  "repeat",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g{n}",
                desc: (0, o.Z)("Match nth subpattern"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "aaa" }),
                    (0, G.jsx)("span", { className: O, children: " and " }),
                    (0, G.jsx)("span", { className: T, children: "aaa" }),
                    "aa",
                  ],
                }),
                exampleRegex: "(a+)( and )\\g{1}",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches text the nth group matched and captured. `n` represents the capture group number and can positionally refer to past capture groups as well.",
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "{1} would be the second previous capture group, for example. {2} would be the third capture group.",
                      ph1: S("\\g{-2}"),
                      ph2: S("\\g{3}"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "This notation is useful in avoiding ambiguity with octal characters, or when a literal number needs to be matched immediately after a {1} reference in the regex.",
                      ph1: S("\\gn"),
                    }),
                  ],
                }),
                keywords: [
                  "capture",
                  "group",
                  "by",
                  "name",
                  "recall",
                  "match",
                  "again",
                  "repeat",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g{-n}",
                desc: (0, o.Z)(
                  "Match text the nth relative previous subpattern matched"
                ),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "aaa" }),
                    (0, G.jsx)("span", { className: O, children: " and " }),
                    (0, G.jsx)("span", { className: T, children: "aaa" }),
                    "aa",
                  ],
                }),
                exampleRegex: "([a-z]+)( and )\\g{-2}",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Matches the same text the nth group prior to {1} matched and captured.",
                      ph1: S("\\g{-n}"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "{1} can be used to match the same text the third preceding capture group matched and captured.",
                      ph1: F("\\g{-3}"),
                    }),
                  ],
                }),
                keywords: [
                  "capture",
                  "reference",
                  "group",
                  "by",
                  "number",
                  "recall",
                  "match",
                  "again",
                  "repeat",
                  "previous",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g<n>",
                desc: (0, o.Z)("Recurse nth capture group"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: T, children: " and " }),
                    (0, G.jsx)("span", { className: O, children: "abc" }),
                  ],
                }),
                exampleRegex: "([a-z]+) and (\\g<1>)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Recurse nth capture group. `n` can be positional as well. For example, {1} stands for the previous capture group, while {2} would be the third next capture group. Equivalent to {3}",
                  ph1: S("\\g<-1>"),
                  ph2: S("\\g<+3>"),
                  ph3: S("\\g'n'"),
                }),
                keywords: [
                  "capture",
                  "group",
                  "by",
                  "number",
                  "recall",
                  "match",
                  "again",
                  "repeat",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g<+n>",
                desc: (0, o.Z)("Recurse nth relative upcoming subpattern"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "extra ",
                    (0, G.jsx)("span", { className: T, children: "b" }),
                    (0, G.jsx)("span", { className: V, children: " and " }),
                    (0, G.jsx)("span", { className: O, children: "c" }),
                    " stuff",
                  ],
                }),
                exampleRegex: "\\g<+2>( and )([a-z])",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Recurse nth capture group ahead of the current position of {1}. For example, {2} is the second upcoming capture group.",
                  ph1: S("\\g<+n>"),
                  ph2: S("\\g<+2>"),
                }),
                keywords: [
                  "capture",
                  "reference",
                  "group",
                  "by",
                  "number",
                  "next",
                  "match",
                  "again",
                  "predict",
                  "after",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g'n'",
                desc: (0, o.Z)("Recurse nth capture group."),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: T, children: " and " }),
                    (0, G.jsx)("span", { className: O, children: "abc" }),
                  ],
                }),
                exampleRegex: "([a-z]+) and (\\g'1')",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Recurse nth capture group. `n` can be positional as well. For example, {1} stands for previous capture group, while {2} would be the third capture group. Equivalent to {3}.",
                  ph1: S("\\g'-1'"),
                  ph2: S("\\g'3'"),
                  ph3: S("\\g<n>"),
                }),
                keywords: [
                  "capture",
                  "reference",
                  "group",
                  "by",
                  "number",
                  "recall",
                  "match",
                  "again",
                  "repeat",
                  "previous",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g'+n'",
                desc: (0, o.Z)("Recurse nth relative upcoming subpattern"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "extra ",
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    (0, G.jsx)("span", { className: V, children: " and " }),
                    (0, G.jsx)("span", { className: O, children: "b" }),
                    " stuff",
                  ],
                }),
                exampleRegex: "\\g'+2'( and )([a-z])",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Recurse nth capture group ahead of the current position of {1}. For example {2} is the second previous capture group.",
                  ph1: S("\\g'+n'"),
                  ph2: S("\\g'-2'"),
                }),
                keywords: [
                  "capture",
                  "reference",
                  "group",
                  "by",
                  "number",
                  "next",
                  "match",
                  "again",
                  "predict",
                  "after",
                  "specific",
                  "recurse",
                  "recursion",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g{letter}",
                desc: (0, o.Z)("Match previously-named capture group `letter`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: T, children: " plus " }),
                    (0, G.jsx)("span", { className: O, children: "a" }),
                  ],
                }),
                exampleRegex: "(?'letter'a) plus (\\g{letter})",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches the same text capture group called `letter` matched and captured."
                  ),
                }),
                keywords: [
                  "capture",
                  "reference",
                  "group",
                  "by",
                  "name",
                  "recall",
                  "match",
                  "previous",
                  "before",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g<letter>",
                desc: (0, o.Z)("Recurse named capture group `letter`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: O, children: " and " }),
                    (0, G.jsx)("span", { className: I, children: "bcd" }),
                  ],
                }),
                exampleRegex: "(?<letter>[a-z]+)( and )(\\g<letter>)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: 'Recurse the capture group called "letter". This is an alternative notation for {1}',
                  ph1: S("\\g'letter'"),
                }),
                keywords: [
                  "capture",
                  "reference",
                  "group",
                  "by",
                  "name",
                  "recall",
                  "match",
                  "previous",
                  "before",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\g'letter'",
                desc: (0, o.Z)("Recurse named capture group `letter`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: O, children: " and " }),
                    (0, G.jsx)("span", { className: I, children: "bcd" }),
                  ],
                }),
                exampleRegex: "(?<letter>[a-z]+)( and )(\\g'letter')",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Recurse the capture group called `letter`."
                  ),
                }),
                keywords: [
                  "capture",
                  "reference",
                  "group",
                  "by",
                  "name",
                  "recall",
                  "match",
                  "previous",
                  "before",
                  "recurse",
                  "recursion",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\uYYYY",
                desc: (0, o.Z)("Hex character YYYY"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", { className: T, children: "%" }),
                }),
                exampleRegex: "\\u0025",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches the unicode character with the given hex value. When using the `/u` flag, 16-bit character (surrogate/supplementary characters included) syntax becomes `\\u{...}`."
                    ),
                    " ",
                    (0, G.jsx)(x.rU, {
                      target: "_blank",
                      to: "http://unicode-table.com/en/",
                      absolute: !0,
                      children: (0, o.Z)("Unicode Character Table"),
                    }),
                  ],
                }),
                keywords: [
                  "hex",
                  "unicode",
                  "map",
                  "symbols",
                  "codepoint",
                  "\\u{",
                  "surrogate",
                ],
                flavors: [C().JAVASCRIPT, C().JAVA],
              },
              {
                token: "\\xYY",
                desc: (0, o.Z)("Hex character YY"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "match",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "all",
                    (0, G.jsx)("span", { className: T, children: " " }),
                    "spaces",
                  ],
                }),
                exampleRegex: "\\x20",
                regexFlags: "g",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches the 8-bit character with the given hex value."
                    ),
                    " ",
                    (0, G.jsx)(x.rU, {
                      target: "_blank",
                      to: "http://unicode-table.com/en/",
                      absolute: !0,
                      children: (0, o.Z)("Unicode Character Table"),
                    }),
                  ],
                }),
                keywords: ["hex", "unicode", "map", "symbols", "codepoint"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\x{YYYY}",
                desc: (0, o.Z)("Hex character YYYY"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", { className: T, children: "%" }),
                }),
                exampleRegex: "\\x{0025}",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches the 16-bit character with the given hex value."
                    ),
                    " ",
                    (0, G.jsx)(x.rU, {
                      target: "_blank",
                      to: "http://unicode-table.com/en/",
                      absolute: !0,
                      children: (0, o.Z)("Unicode Character Table"),
                    }),
                  ],
                }),
                keywords: ["hex", "unicode", "map", "symbols", "codepoint"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG, C().JAVA],
              },
              {
                token: "\\ddd",
                desc: (0, o.Z)("Octal character ddd"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", { className: T, children: "%" }),
                }),
                exampleRegex: "\\045",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches the 8-bit character with the given octal value."
                    ),
                    " ",
                    (0, G.jsx)(x.rU, {
                      target: "_blank",
                      absolute: !0,
                      to: "http://www.utf8-chartable.de/unicode-utf8-table.pl?utf8=oct",
                      children: (0, o.Z)("Octal Character Table"),
                    }),
                  ],
                }),
                keywords: ["octal", "unicode", "map", "symbols", "codepoint"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\cY",
                desc: (0, o.Z)("Control character Y"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "horizontal",
                    (0, G.jsx)("span", { className: T, children: "        " }),
                    "tab",
                  ],
                }),
                exampleRegex: "\\cI",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Matches ASCII characters typically associated with Control+A through Control+Z: \\x01 through \\x1A."
                    ),
                    " ",
                    (0, G.jsx)(x.rU, {
                      target: "_blank",
                      to: "https://www.cs.tut.fi/~jkorpela/chars/c0.html",
                      absolute: !0,
                      children: (0, o.Z)("ASCII control characters"),
                    }),
                  ],
                }),
                keywords: ["control", "CTRL", "+", "ascii", "codes"],
                flavors: [C().JAVASCRIPT, C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "[\\b]",
                desc: (0, o.Z)("Backspace character"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches the backspace control character. {1} stands for `word boundary` when outside of a character class {2}.",
                  ph1: S("\\b"),
                  ph2: S("[...]"),
                }),
                keywords: ["CTRL+H", "^H"],
                flavors: [C().JAVASCRIPT, C().PYTHON, C().PCRE, C().PCRE2],
              },
              {
                token: "\\",
                desc: (0, o.Z)("Makes any character literal"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "match ",
                    (0, G.jsx)("span", { className: T, children: "\\w" }),
                    " literally",
                  ],
                }),
                exampleRegex: "\\\\w",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Converts metacharacters to literal characters, and also allows literal matching of the regex delimiter in use, like `/`."
                  ),
                }),
                keywords: ["literal", "escape", "special", "disable"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
            ]),
            (0, w.Z)(e, b, [
              {
                token: "(?:...)",
                basic: !0,
                desc: (0, o.Z)("Match everything enclosed"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", {
                    className: T,
                    children: "match this match that",
                  }),
                }),
                exampleRegex: "match this (?:match that)",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "A non-capturing group allows you to apply quantifiers to part of your regex but does not capture/assign an ID.",
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "For example, repeating 1-3 digits and a period 3 times can be done like this: {1}",
                      ph1: F("/(?:\\d{1,3}\\.){3}\\d{1,3}/"),
                    }),
                  ],
                }),
                keywords: [
                  "capture",
                  "group",
                  "repeat",
                  "name",
                  "id",
                  "refer",
                  "isolate",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "(...)",
                basic: !0,
                desc: (0, o.Z)("Capture everything enclosed"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children: "match and capture ",
                    }),
                    (0, G.jsx)("span", { className: V, children: "capture " }),
                    "?",
                  ],
                }),
                exampleRegex: "match and (capture )+",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Isolates part of the full match to be later referred to by ID within the regex or the matches array. IDs start at 1.",
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "A common misconception is that repeating a capture group would create separate IDs for each time it matches. If that functionality is needed, one has to rely on the global (/g) flag instead. For example: {1}",
                      ph1: F("/each (word)/g"),
                    }),
                  ],
                }),
                keywords: [
                  "capture",
                  "group",
                  "repeat",
                  "name",
                  "id",
                  "refer",
                  "isolate",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "(?>...)",
                desc: (0, o.Z)("Atomic group (non-capturing)"),
                example: (0, G.jsx)("div", {
                  children:
                    "this line is matched/consumed to the end by .+ and is not allowed to backtrack to find @",
                }),
                exampleRegex: "(?>.+)@",
                keywords: [
                  "match",
                  "most",
                  "backtracking",
                  "no",
                  "back",
                  "tracking",
                ],
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches the longest possible substring in the group and doesn't allow later backtracking to reevaluate the group. It is not a capturing group."
                  ),
                }),
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "(?|...)",
                desc: (0, o.Z)("Duplicate/reset subpattern group number"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "A ",
                    (0, G.jsx)("span", { className: V, children: "candy" }),
                    ",",
                    " ",
                    (0, G.jsx)("span", { className: V, children: "kiss" }),
                    ", or even a",
                    " ",
                    (0, G.jsx)("span", { className: V, children: "berry" }),
                    " is delicious.",
                  ],
                }),
                exampleRegex: "(?|(candy)|(kiss)|(berry))",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Does not allow the capture group ID to be incremented for all enclosed capture groups."
                  ),
                }),
                keywords: ["pattern", "same", "digit", "id", "order", "reset"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?#...)",
                desc: (0, o.Z)("Comment group"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "Not" }),
                    "hing else matches.",
                  ],
                }),
                exampleRegex: "Not(?# .* <-- that should match all)",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Any text appearing in this group is ignored in the regex.",
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Another option is enabling the x flag to allow `# comments` but it will also cause the regex engine to ignore space characters. To match space characters you have to escape them: {1}.",
                      ph1: F("/\\ /"),
                    }),
                  ],
                }),
                keywords: ["note", "ignore", "explain", "explanatory"],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON],
              },
              {
                token: "(?'name'...)",
                desc: (0, o.Z)("Named Capturing Group"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Call me ",
                    (0, G.jsx)("span", { className: V, children: "Sally" }),
                    ".",
                  ],
                }),
                exampleRegex: "(?'name'Sally)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "This capturing group can be referred to using the given name instead of a number. Alternative notation for {1} or {2}.",
                  ph1: S("(?<name>...)"),
                  ph2: S("(?P<name>...)"),
                }),
                keywords: ["recall", "by", "name", "tag", "label", "target"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?<name>...)",
                desc: (0, o.Z)("Named Capturing Group"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Call me ",
                    (0, G.jsx)("span", { className: V, children: "Sally" }),
                    ".",
                  ],
                }),
                exampleRegex: "(?<name>Sally)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "This capturing group can be referred to using the given name instead of a number. Alternative notation for {1} or {2}.",
                  ph1: S("(?'name'...)"),
                  ph2: S("(?P<name>...)"),
                }),
                keywords: ["recall", "by", "name", "tag", "label", "target"],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "(?<name>...)",
                desc: (0, o.Z)("Named Capturing Group"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Call me ",
                    (0, G.jsx)("span", { className: V, children: "Sally" }),
                    ".",
                  ],
                }),
                exampleRegex: "(?<name>Sally)",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "This capturing group can be referred to using the given name instead of a number."
                    ),
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Please note this feature is experimental in JavaScript and might not be supported by your browser."
                      ),
                    }),
                  ],
                }),
                keywords: ["recall", "by", "name", "tag", "label", "target"],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "(?P<name>...)",
                desc: (0, o.Z)("Named Capturing Group"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Call me ",
                    (0, G.jsx)("span", { className: V, children: "Sally" }),
                    ".",
                  ],
                }),
                exampleRegex: "(?P<name>Sally)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "This capturing group can be referred to using the given name instead of a number. Alternative notation for {1} and {2} when using a PCRE flavor.",
                  ph1: S("(?<name>...)"),
                  ph2: S("(?'name'...)"),
                }),
                keywords: ["recall", "by", "name", "tag", "label", "target"],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON, C().GOLANG],
              },
              {
                token: "(?imsxXU)",
                desc: (0, o.Z)("Inline modifiers"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "aA" }),
                    " Aa",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aa" }),
                    " AA",
                  ],
                }),
                exampleRegex: "a(?i)a",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "These flag modifiers act on the whole expression. You can also unset flags using a minus sign: {1}, and can combine setting and unsetting flags. {2} would set the single line flag and unset case insensitive.",
                  ph1: S("(?-i)"),
                  ph2: S("(?s-i)"),
                }),
                keywords: [
                  "fly",
                  "the",
                  "flags",
                  "partially",
                  "apply",
                  "isolate",
                  "set",
                  "unset",
                  "modify",
                  "inline",
                ],
                flavors: [C().PCRE, C().PYTHON],
              },
              {
                token: "(?imsxu)",
                desc: (0, o.Z)("Inline modifiers"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "aA" }),
                    " Aa",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aa" }),
                    " AA",
                  ],
                }),
                exampleRegex: "a(?i)a",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "These flag modifiers act on the whole expression. You can also unset flags using a minus sign: {1}, and can combine setting and unsetting flags. {2} would set the single line flag and unset case insensitive.",
                  ph1: S("(?-i)"),
                  ph2: S("(?s-i)"),
                }),
                keywords: [
                  "fly",
                  "the",
                  "flags",
                  "partially",
                  "apply",
                  "isolate",
                  "set",
                  "unset",
                  "modify",
                  "inline",
                ],
                flavors: [C().JAVA],
              },
              {
                token: "(?imsxUJnxx)",
                desc: (0, o.Z)("Inline modifiers"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "aA" }),
                    " Aa",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aa" }),
                    " AA",
                  ],
                }),
                exampleRegex: "a(?i)a",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "These flag modifiers act on the whole expression. You can also unset flags using a minus sign: {1}, and can combine setting and unsetting flags. {2} would set the single line flag and unset case insensitive.",
                  ph1: S("(?-i)"),
                  ph2: S("(?s-i)"),
                }),
                keywords: [
                  "fly",
                  "the",
                  "flags",
                  "partially",
                  "apply",
                  "isolate",
                  "set",
                  "unset",
                  "modify",
                  "inline",
                ],
                flavors: [C().PCRE2],
              },
              {
                token: "(?imsxXU:...)",
                desc: (0, o.Z)("Localized inline modifiers"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: T, children: "BbB" }),
                    (0, G.jsx)("span", { className: O, children: "c" }),
                  ],
                }),
                exampleRegex: "(a)(?i:b+)(c)",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "These flag modifiers act on the enclosed expression only. Equivalent to {1}",
                      ph1: S("(?:(?imsxXU)...)"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "You can also unset flags using a minus sign: {1}, and can combine enabling and disabling flags. For example: {2} would set enable single line and disable case insensitive.",
                      ph1: S("(?-i)"),
                      ph2: S("(?s-i)"),
                    }),
                  ],
                }),
                keywords: [
                  "fly",
                  "the",
                  "flags",
                  "partially",
                  "apply",
                  "isolate",
                  "set",
                  "unset",
                  "modify",
                  "inline",
                ],
                flavors: [C().PCRE, C().PYTHON],
              },
              {
                token: "(?imsxUJnxx:...)",
                desc: (0, o.Z)("Localized inline modifiers"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: T, children: "BbB" }),
                    (0, G.jsx)("span", { className: O, children: "c" }),
                  ],
                }),
                exampleRegex: "(a)(?i:b+)(c)",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "These flag modifiers act on the enclosed expression only. Equivalent to {1}",
                      ph1: S("(?:(?imsxUJnxx)...)"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "You can also unset flags using a minus sign: {1}, and can combine enabling and disabling flags. For example: {2} would set enable single line and disable case insensitive.",
                      ph1: S("(?-i)"),
                      ph2: S("(?s-i)"),
                    }),
                  ],
                }),
                keywords: [
                  "fly",
                  "the",
                  "flags",
                  "partially",
                  "apply",
                  "isolate",
                  "set",
                  "unset",
                  "modify",
                  "inline",
                ],
                flavors: [C().PCRE2],
              },
              {
                token: "(?imsxu:...)",
                desc: (0, o.Z)("Localized inline modifiers"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: T, children: "BbB" }),
                    (0, G.jsx)("span", { className: O, children: "c" }),
                  ],
                }),
                exampleRegex: "(a)(?i:b+)(c)",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "These flag modifiers act on the enclosed expression only. Equivalent to {1}",
                      ph1: S("(?:(?imsxu)...)"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "You can also unset flags using a minus sign: {1}, and can combine enabling and disabling flags. For example: {2} would set enable single line and disable case insensitive.",
                      ph1: S("(?-i)"),
                      ph2: S("(?s-i)"),
                    }),
                  ],
                }),
                keywords: [
                  "fly",
                  "the",
                  "flags",
                  "partially",
                  "apply",
                  "isolate",
                  "set",
                  "unset",
                  "modify",
                  "inline",
                ],
                flavors: [C().JAVA],
              },
              {
                token: "(?(1)yes|no)",
                desc: (0, o.Z)("Conditional statement"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "A candy" }),
                    (0, G.jsx)("span", { className: T, children: " is true" }),
                    " is false.",
                  ],
                }),
                exampleRegex: "(A candy)?(?(1) is true| is false)",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "If capturing group 1 returned a match, the pattern before the alternate {1} is matched. Otherwise, the pattern after the alternate {1} is matched.",
                      ph1: S("|"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "In PCRE a recursion test {1}, group name {2}, or a relative position {3} can be used as the conditional. Global flag breaks conditionals as the engine does a second pass over an already matched/consumed string.",
                      ph1: S("(R)"),
                      ph2: S("(name)"),
                      ph3: S("(-1)"),
                    }),
                  ],
                }),
                keywords: [
                  "if",
                  "else",
                  "true",
                  "false",
                  "match",
                  "no",
                  "then",
                ],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON],
              },
              {
                token: "(?(R)yes|no)",
                desc: (0, o.Z)("Conditional statement"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", {
                    className: T,
                    children: '<tag allows="for nested" <tag> />',
                  }),
                }),
                exampleRegex: "<(?:(?(R)\\w++|[^<>]*+)|(?R))*>",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "If recursion of the whole pattern is successful, match the pattern before the {1} otherwise match the pattern after the {1}.",
                  ph1: S("|"),
                }),
                keywords: [
                  "if",
                  "else",
                  "true",
                  "false",
                  "match",
                  "no",
                  "then",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?(R#)yes|no)",
                desc: (0, o.Z)("Recursive Conditional statement"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "funky" }),
                    (0, G.jsx)("span", { className: T, children: " function" }),
                  ],
                }),
                exampleRegex: "( *fun(?(R1)ction|ky))(?1)",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "`(?R1)` checks if a call to capture group 1 was made, which will return false the first time it is encountered because the regex engine is simply parsing capture group one."
                      ),
                    }),
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Once `(?1)` is called, `(?(R1)true|false)` will return true since capture group 1 was called, and will match `ction`"
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "if",
                  "else",
                  "true",
                  "false",
                  "match",
                  "no",
                  "then",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?(R&name)yes|no)",
                desc: (0, o.Z)("Conditional statement"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "funky" }),
                    (0, G.jsx)("span", { className: T, children: " function" }),
                  ],
                }),
                exampleRegex: "(?<sub1> *fun(?(R&sub1)ction|ky))(?&sub1)",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "In this case `(?(R&sub1)...|...)` checks if a call to `sub1` has been made. The first time the recursive conditional is parsed, the engine is in the process of matching what `sub1` requires, not yet finished. Conditional will return false and match `ky` instead."
                      ),
                    }),
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Once we recursively call `(?&sub1)` the conditional will return true as `(?<sub1>)` finished matching, thus `ction` will match."
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "if",
                  "else",
                  "true",
                  "false",
                  "match",
                  "no",
                  "then",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?(?=...)yes|no)",
                desc: (0, o.Z)("Lookahead conditional"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Candy ",
                    (0, G.jsx)("span", {
                      className: V,
                      children: "is delicious",
                    }),
                    " or disgusting.",
                  ],
                }),
                exampleRegex: "(?(?=is)(is delicious)|(disgusting))",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "If the lookahead succeeds, matches the pattern before the vertical bar. Otherwise, matches the pattern after the vertical bar. The lookaround can be negative also. Global flag breaks conditionals."
                  ),
                }),
                keywords: [
                  "if",
                  "else",
                  "true",
                  "false",
                  "match",
                  "no",
                  "then",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?(?<=...)yes|no)",
                desc: (0, o.Z)("Lookbehind conditional"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Is candy ",
                    (0, G.jsx)("span", { className: V, children: "delish" }),
                    " or ew?",
                  ],
                }),
                exampleRegex: "(?(?<=\\s)(delish)|(ew))",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "If the lookbehind succeeds, match the pattern before the vertical bar. Otherwise, matches the pattern after the vertical bar. The lookaround can be negative. Global flag, 'g', breaks conditionals."
                  ),
                }),
                keywords: [
                  "if",
                  "else",
                  "true",
                  "false",
                  "match",
                  "no",
                  "then",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?R)",
                desc: (0, o.Z)("Recurse entire pattern"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "(simple)" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "(and" }),
                    (0, G.jsx)("span", { className: V, children: "(nested)" }),
                    (0, G.jsx)("span", { className: T, children: ")" }),
                    " but (not here",
                  ],
                }),
                exampleRegex: "\\((?:[^()]|((?R)))+\\)",
                regexFlags: "g",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Recursively match the entire expression. Equivalent to {1} or {2}.",
                      ph1: S("(?0)"),
                      ph2: S("\\g<0>"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Note that {1} is wrapped in a superfluous capture group to help visually identify its match in the example string.",
                      ph1: S("(?R)"),
                    }),
                  ],
                }),
                keywords: [
                  "repeat",
                  "match",
                  "again",
                  "multiple",
                  "nth",
                  "n",
                  "times",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?1)",
                desc: (0, o.Z)("Recurse first subpattern"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "capture" }),
                    (0, G.jsx)("span", { className: T, children: " my " }),
                    (0, G.jsx)("span", { className: O, children: "capture" }),
                    " again",
                  ],
                }),
                exampleRegex: "(capture).+((?1))",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Recursively match the first capture group."
                  ),
                }),
                keywords: [
                  "repeat",
                  "match",
                  "again",
                  "multiple",
                  "nth",
                  "n",
                  "times",
                  "capture",
                  "group",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?+1)",
                desc: (0, o.Z)("Recurse first relative subpattern"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children: "match if I start with ",
                    }),
                    (0, G.jsx)("span", { className: O, children: "match" }),
                  ],
                }),
                exampleRegex: "(?+1).+(match)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Recurse the first capture group following the current position in the expression. {1} is the second capture group, {2} is the capture group immediately preceding the current position.",
                  ph1: S("(?+2)"),
                  ph2: S("(?-1)"),
                }),
                keywords: [
                  "repeat",
                  "match",
                  "again",
                  "multiple",
                  "nth",
                  "n",
                  "times",
                  "capture",
                  "group",
                  "by",
                  "id",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?&name)",
                desc: (0, o.Z)("Recurse subpattern `name`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children: "boys like ",
                    }),
                    (0, G.jsx)("span", { className: V, children: "toys" }),
                    ".",
                  ],
                }),
                exampleRegex: "(?&named_group) like (?'named_group'[tb]oys)",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Recursively matches the given capture group by name. It does not require that the capture group be defined beforehand."
                  ),
                }),
                keywords: [
                  "repeat",
                  "match",
                  "again",
                  "multiple",
                  "named",
                  "times",
                  "capture",
                  "group",
                  "by",
                  "recurse",
                  "recursion",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?P=name)",
                desc: (0, o.Z)("Match subpattern `name`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "cool" }),
                    (0, G.jsx)("span", { className: T, children: " cool" }),
                  ],
                }),
                exampleRegex: "(?P<named_group>cool) (?P=named_group)",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches the same text matched by a previously named capture group."
                  ),
                }),
                keywords: [
                  "repeat",
                  "match",
                  "again",
                  "multiple",
                  "named",
                  "times",
                  "capture",
                  "group",
                  "by",
                ],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON],
              },
              {
                token: "(?P>name)",
                desc: (0, o.Z)("Recurse subpattern called `name`"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "123" }),
                    (0, G.jsx)("span", { className: T, children: " or " }),
                    (0, G.jsx)("span", { className: O, children: "789" }),
                  ],
                }),
                exampleRegex: "((?P>who)) or (?<who>[a-z]+)",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Recursively matches the given named subpattern or capture group."
                  ),
                }),
                keywords: [
                  "repeat",
                  "match",
                  "again",
                  "multiple",
                  "named",
                  "times",
                  "capture",
                  "group",
                  "by",
                  "recurse",
                  "recursion",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?(DEFINE)...)",
                desc: (0, o.Z)("Pre-define patterns before using them"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "123 ",
                    (0, G.jsx)("span", { className: T, children: "letters" }),
                    " 123",
                  ],
                }),
                exampleRegex: "(?(DEFINE)(?'letters'[a-z]+))(?P>letters)",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      'The DEFINE group is completely ignored by regex. It gets treated as a var name="value", whereas you can recall the specific pattern for use via its name. Multiple patterns can be defined in the same DEFINE group.'
                    ),
                    (0, G.jsx)("div", {
                      className: N.Z.tokenSample,
                      children:
                        "(?(DEFINE)(?'numbers'\\d+)(?'lowercase'[a-z]+)(?'uppercase'[A-Z]+))",
                    }),
                  ],
                }),
                keywords: [
                  "store",
                  "define",
                  "variables",
                  "regexes",
                  "set",
                  "recall",
                  "name",
                  "pattern",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(?=...)",
                desc: (0, o.Z)("Positive Lookahead"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "foo" }),
                    "bar foobaz",
                  ],
                }),
                exampleRegex: "foo(?=bar)",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Asserts that the given subpattern can be matched here, without consuming characters"
                  ),
                }),
                keywords: [
                  "match",
                  "only",
                  "if",
                  "exists",
                  "string",
                  "word",
                  "character",
                  "next",
                  "coming",
                  "up",
                ],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().JAVA,
                ],
              },
              {
                token: "(?!...)",
                desc: (0, o.Z)("Negative Lookahead"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "foobar ",
                    (0, G.jsx)("span", { className: T, children: "foo" }),
                    "baz",
                  ],
                }),
                exampleRegex: "foo(?!bar)",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Starting at the current position in the expression, ensures that the given pattern will not match. Does not consume characters."
                  ),
                }),
                keywords: [
                  "match",
                  "only",
                  "if",
                  "not",
                  "is",
                  "exists",
                  "string",
                  "word",
                  "character",
                  "next",
                  "coming",
                  "up",
                ],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().JAVA,
                ],
              },
              {
                token: "(?<=...)",
                desc: (0, o.Z)("Positive Lookbehind"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "foo",
                    (0, G.jsx)("span", { className: T, children: "bar" }),
                    " fuubar",
                  ],
                }),
                exampleRegex: "(?<=foo)bar",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Ensures that the given pattern will match, ending at the current position in the expression. The pattern must have a fixed width. Does not consume any characters."
                  ),
                }),
                keywords: [
                  "look",
                  "behind",
                  "lookbehind",
                  "match",
                  "only",
                  "if",
                  "is",
                  "exists",
                  "string",
                  "word",
                  "character",
                  "previously",
                  "past",
                  "before",
                ],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON, C().JAVA],
              },
              {
                token: "(?<!...)",
                desc: (0, o.Z)("Negative Lookbehind"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "not foo but ",
                    (0, G.jsx)("span", { className: T, children: "foo" }),
                  ],
                }),
                exampleRegex: "(?<!not )foo",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Ensures that the given pattern would not match and end at the current position in the expression. The pattern must have a fixed width. Does not consume characters."
                  ),
                }),
                keywords: [
                  "look",
                  "behind",
                  "lookbehind",
                  "match",
                  "only",
                  "if",
                  "not",
                  "is",
                  "exists",
                  "string",
                  "word",
                  "character",
                  "previously",
                  "past",
                  "before",
                ],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON, C().JAVA],
              },
              {
                token: "(?<=...)",
                desc: (0, o.Z)("Positive Lookbehind"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "foo",
                    (0, G.jsx)("span", { className: T, children: "bar" }),
                    " fuubar",
                  ],
                }),
                exampleRegex: "(?<=foo)bar",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Ensures that the given pattern will match, ending at the current position in the expression. The pattern be of variable width. Does not consume any characters."
                      ),
                    }),
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Note that this feature is not yet supported on all browsers; use at your own discretion!"
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "look",
                  "behind",
                  "lookbehind",
                  "match",
                  "only",
                  "if",
                  "is",
                  "exists",
                  "string",
                  "word",
                  "character",
                  "previously",
                  "past",
                  "before",
                ],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "(?<!...)",
                desc: (0, o.Z)("Negative Lookbehind"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "not foo but ",
                    (0, G.jsx)("span", { className: T, children: "foo" }),
                  ],
                }),
                exampleRegex: "(?<!not )foo",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Ensures that the given pattern would not match and end at the current position in the expression. The pattern be of variable width. Does not consume characters."
                      ),
                    }),
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Note that this feature is not yet supported on all browsers; use at your own discretion!"
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "look",
                  "behind",
                  "lookbehind",
                  "match",
                  "only",
                  "if",
                  "not",
                  "is",
                  "exists",
                  "string",
                  "word",
                  "character",
                  "previously",
                  "past",
                  "before",
                ],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "(*ACCEPT)",
                desc: (0, o.Z)("Control verb"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children: "Candy tastes great",
                    }),
                    " but is bad for your teeth.",
                  ],
                }),
                exampleRegex: "Candy.+?great(*ACCEPT).+bad",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("p", {
                      children: (0, o.Z)(
                        "This causes the regex to end successfully, skipping the rest of the pattern."
                      ),
                    }),
                    (0, G.jsx)("p", {
                      children: (0, o.Z)(
                        "If this token is inside a capturing group, only that capturing group is ended successfully at that particular location, while the parent pattern continues to execute."
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "end",
                  "accept",
                  "recursion",
                  "early",
                  "capture",
                  "stop",
                  "partly",
                  "pattern",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*FAIL)",
                desc: (0, o.Z)("Control verb"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "Candy is bad",
                    (0, G.jsx)("br", {}),
                    (0, G.jsx)("span", {
                      className: T,
                      children: "Candy is good",
                    }),
                  ],
                }),
                exampleRegex: "Candy.+?(?:bad(*FAIL)|good)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Force a matching failure at a specific point in the regex. Equivalent to {1}, and a synonym of {2}.",
                  ph1: S("(*F)"),
                  ph2: S("(?!)"),
                }),
                keywords: [
                  "end",
                  "reject",
                  "recursion",
                  "early",
                  "capture",
                  "stop",
                  "partly",
                  "pattern",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*MARK:NAME)",
                desc: (0, o.Z)("Control verb"),
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, o.Z)(
                      "Used to mark internal engine backtracking. When used in conjunction with the /K modifier (show backtracking control names), pcretest can return the mark together with a successful match. Equivalent to (*:NAME). `NAME` does not need to be unique."
                    ),
                    (0, G.jsxs)("div", {
                      className: N.Z.tokenSample,
                      children: [
                        (0, G.jsx)("div", {
                          children: "re> /X(*MARK:A)Y|X(*MARK:B)Z/K",
                        }),
                        (0, G.jsx)("div", { children: "data> XY" }),
                        (0, G.jsx)("div", { children: "0: XY" }),
                        (0, G.jsx)("div", { children: "MK: A" }),
                        (0, G.jsx)("div", { children: "XZ" }),
                        (0, G.jsx)("div", { children: "0: XZ" }),
                        (0, G.jsx)("div", { children: "MK: B" }),
                      ],
                    }),
                  ],
                }),
                keywords: [
                  "end",
                  "reject",
                  "recursion",
                  "early",
                  "capture",
                  "stop",
                  "partly",
                  "pattern",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*COMMIT)",
                desc: (0, o.Z)("Control verb"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "woow" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "woow" }),
                    " woot woow",
                  ],
                }),
                exampleRegex: "wo+(*COMMIT)w",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This verb does not allow regex to continue parsing after a matching failure, even if there are other matching strings ahead, and regardless of how many successful matches are before the failure."
                  ),
                }),
                keywords: [
                  "no",
                  "backtracking",
                  "recursion",
                  "deny",
                  "stop",
                  "matching",
                  "failure",
                  "after",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*PRUNE)",
                desc: (0, o.Z)("Control verb"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "marketing dynamics,",
                    " ",
                    (0, G.jsx)("span", {
                      className: T,
                      children: "marketing strategy",
                    }),
                  ],
                }),
                exampleRegex: "(*PRUNE)\\w{4,9} strategy|\\w{4,9} dynamics",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Causes the regex to exit if it tries to backtrack past {1}'s position. This is useful when looking to cut down on backtracking at specific points in the regex. Equivalent to {2}.",
                  ph1: S("(*PRUNE)"),
                  ph2: S("(*PRUNE:NAME)"),
                }),
                keywords: [
                  "no",
                  "backtracking",
                  "recursion",
                  "deny",
                  "stop",
                  "matching",
                  "failure",
                  "after",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*SKIP)",
                desc: (0, o.Z)("Control verb"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "aaardvark" }),
                    " aaaardvark aa",
                    (0, G.jsx)("span", { className: T, children: "aaardvark" }),
                    " aaaaaardvark aaaa",
                    (0, G.jsx)("span", { className: T, children: "aaardvark" }),
                  ],
                }),
                exampleRegex: "aa(*SKIP)ard\\w+",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Causes the regex engine to give up on the current match if it tries to backtrack past {1}'s position. This is useful when looking to cut down on backtracking at specific points in the regex. Equivalent to {2}.",
                  ph1: S("(*SKIP)"),
                  ph2: S("(*SKIP:NAME)"),
                }),
                keywords: [
                  "no",
                  "backtracking",
                  "recursion",
                  "deny",
                  "stop",
                  "matching",
                  "failure",
                  "after",
                  "give",
                  "up",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*THEN)",
                desc: (0, o.Z)("Control verb"),
                example: (0, G.jsx)("div", { children: "35234" }),
                exampleRegex: "^.*?(?(?=2)2|3(*THEN)4)",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Disallows backtracking past {1}'s position, and gives up matching the current alternation if there's a failure. If instead {1} is used outside of an alternation, it will act like {3}. Equivalent to {2}.",
                  ph1: S("(*THEN)"),
                  ph2: S("(*THEN:NAME)"),
                  ph3: S("(*PRUNE)"),
                }),
                keywords: [
                  "no",
                  "backtracking",
                  "recursion",
                  "deny",
                  "stop",
                  "matching",
                  "failure",
                  "after",
                  "give",
                  "up",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*UTF)",
                desc: (0, o.Z)("Pattern modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This allows regex to treat the string as UTF, be it 8, 16, or 32."
                  ),
                }),
                keywords: ["utf", "string", "unicode", "\\x", "\\u"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*UTF8)",
                desc: (0, o.Z)("Pattern modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This allows regex to treat the string as UTF-8, specifically."
                  ),
                }),
                keywords: ["utf", "string", "unicode", "\\x", "\\u"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*UTF16)",
                desc: (0, o.Z)("Pattern modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This allows regex to treat the string as UTF-16, specifically."
                  ),
                }),
                keywords: ["utf", "string", "unicode", "\\x", "\\u"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*UTF32)",
                desc: (0, o.Z)("Pattern modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This allows regex to treat the string as UTF-32, specifically."
                  ),
                }),
                keywords: ["utf", "string", "unicode", "\\x", "\\u"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*UCP)",
                desc: (0, o.Z)("Pattern modifier"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", {
                      className: T,
                      children:
                        "0\u06601\u06612\u06623\u06634\u06645\u06656\u06667\u0668\u06689\u0669",
                    }),
                    (0, G.jsx)("span", { className: V, children: "h\u0629" }),
                  ],
                }),
                exampleRegex: "(*UCP)\\d+(\\w+)",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "UCP (Unicode Character Properties) makes the PCRE engine extend {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, and some POSIX character classes to include unicode characters as well, not just ASCII.",
                  ph1: S("\\B"),
                  ph2: S("\\b"),
                  ph3: S("\\D"),
                  ph4: S("\\d"),
                  ph5: S("\\S"),
                  ph6: S("\\s"),
                  ph7: S("\\W"),
                  ph8: S("\\w"),
                }),
                keywords: ["utf", "string", "unicode", "\\x", "\\u", "extend"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*CR)",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Makes it so that only a carriage return character is considered a line break."
                  ),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*LF)",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Makes it so that only a line feed character is considered a line break. Common in UNIX documents."
                  ),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*CRLF)",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Makes it so that only a carriage return character followed by a line feed character is considered a line break. Common in Windows documents."
                  ),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*ANYCRLF)",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Makes it so that either a carriage return character or a line feed character, or the two in sequence are considered a line break."
                  ),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*ANY)",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Makes it so that any unicode newline character or sequence thereof counts as a line break."
                  ),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                  "unicode",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\R",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "By default, {1} matches any unicode newline character or sequence thereof. Its behavior can be controlled by newline convention verbs like {2} or {3}.",
                  ph1: S("\\R"),
                  ph2: S("(*BSR_ANYCRLF)"),
                  ph3: S("(*BSR_UNICODE)"),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                  "unicode",
                ],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "(*BSR_ANYCRLF)",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Sets the convention for newline matching to {1}, {2}, or {3} for things like the {4} metacharacter.",
                  ph1: F("\\r\\n"),
                  ph2: F("\\r"),
                  ph3: F("\\n"),
                  ph4: S("\\R"),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                  "unicode",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*BSR_UNICODE)",
                desc: (0, o.Z)("Line break modifier"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "This sets the convention for newline matching to any unicode newline character or sequence thereof, for things like the {1} metacharacter.",
                  ph1: S("\\R"),
                }),
                keywords: [
                  "only",
                  "one",
                  "specific",
                  "return",
                  "carriage",
                  "newline",
                  "line",
                  "break",
                  "kind",
                  "type",
                  "feed",
                  "unicode",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*LIMIT_MATCH=x)",
                desc: (0, o.Z)("Regex engine modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Limits the number of times the regex engine is allowed to call `match()` to `x` times. This user set limit cannot be increased past the compile time value or the default, however it can be restricted."
                  ),
                }),
                keywords: [
                  "engine",
                  "optimization",
                  "specific",
                  "match",
                  "limits",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*LIMIT_RECURSION=d)",
                desc: (0, o.Z)("Regex engine modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Limits the number of recursions the engine is allowed to make to `d` times. This user set limit cannot be increased past the compile time value or the default, however it can be restricted."
                  ),
                }),
                keywords: [
                  "engine",
                  "optimization",
                  "specific",
                  "match",
                  "limits",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*NO_AUTO_POSSESS)",
                desc: (0, o.Z)("Regex engine modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "The PCRE regex engine automatically applies some internal optimizations to regexes to avoid unnecessary backtracking. This modifier will disable that behavior, and thus the engine will backtrack until the previously matching instruction fails to do so."
                  ),
                }),
                keywords: [
                  "engine",
                  "optimization",
                  "specific",
                  "match",
                  "limits",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "(*NO_START_OPT)",
                desc: (0, o.Z)("Regex engine modifier"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Before even attempting a match, the regex engine makes some checks, such as the length of the string. If it is not long enough to fit the pattern, it will automatically return a no match. This optimization can be disabled by using this modifier."
                  ),
                }),
                keywords: [
                  "engine",
                  "optimization",
                  "specific",
                  "match",
                  "limits",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
            ]),
            (0, w.Z)(e, j, [
              {
                token: "a?",
                basic: !0,
                desc: (0, o.Z)("Zero or one of a"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "ba" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "b" }),
                    " a",
                  ],
                }),
                exampleRegex: "ba?",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Matches an `a` character or nothing."),
                }),
                keywords: ["optional", "one", "once"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a*",
                basic: !0,
                desc: (0, o.Z)("Zero or more of a"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a ",
                    (0, G.jsx)("span", { className: T, children: "ba" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "baa" }),
                    " aaa",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "ba" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "b" }),
                  ],
                }),
                exampleRegex: "ba*",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches zero or more consecutive `a` characters."
                  ),
                }),
                keywords: ["zero", "optional", "none", "infinity"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a+",
                basic: !0,
                desc: (0, o.Z)("One or more of a"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aa" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aaa" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aaaa" }),
                    " b",
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    "b b",
                    (0, G.jsx)("span", { className: T, children: "aa" }),
                    "b",
                  ],
                }),
                exampleRegex: "a+",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches one or more consecutive `a` characters."
                  ),
                }),
                keywords: ["one", "more", "optional", "than", "infinity"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a{3}",
                basic: !0,
                desc: (0, o.Z)("Exactly 3 of a"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a aa ",
                    (0, G.jsx)("span", { className: T, children: "aaa" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aaa" }),
                    "a",
                  ],
                }),
                exampleRegex: "a{3}",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches exactly 3 consecutive `a` characters."
                  ),
                }),
                keywords: ["specific", "number", "amount", "times", "only"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a{3,}",
                basic: !0,
                desc: (0, o.Z)("3 or more of a"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a aa ",
                    (0, G.jsx)("span", { className: T, children: "aaa" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aaaa" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aaaaaa" }),
                  ],
                }),
                exampleRegex: "a{3,}",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches at least 3 consecutive `a` characters."
                  ),
                }),
                keywords: [
                  "at",
                  "least",
                  "minimum",
                  "specific",
                  "exactly",
                  "infinity",
                  "many",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a{3,6}",
                basic: !0,
                desc: (0, o.Z)("Between 3 and 6 of a"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a aa ",
                    (0, G.jsx)("span", { className: T, children: "aaa" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aaaa" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "aaaaaa" }),
                    (0, G.jsx)("span", { className: T, children: "aaaa" }),
                  ],
                }),
                exampleRegex: "a{3,6}",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches between 3 and 6 (inclusive) consecutive `a` characters."
                  ),
                }),
                keywords: ["specific", "number", "amount", ""],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a*",
                desc: (0, o.Z)("Greedy quantifier"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "greedy c",
                    (0, G.jsx)("span", {
                      className: T,
                      children: "an be dangerous a",
                    }),
                    "t times",
                  ],
                }),
                exampleRegex: "a.*a",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Matches as many characters as possible."),
                }),
                keywords: ["zero", "more", "infinity", "many"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "a*?",
                desc: (0, o.Z)("Lazy quantifier"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "r" }),
                    " ",
                    (0, G.jsx)("span", { className: T, children: "r" }),
                    "e",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "r" }),
                    "egex",
                  ],
                }),
                exampleRegex: "r\\w*?",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Matches as few characters as possible."),
                }),
                keywords: [
                  "zero",
                  "fewer",
                  "first",
                  "occurrence",
                  "least",
                  "less",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().JAVA,
                ],
              },
              {
                token: "a*+",
                desc: (0, o.Z)("Possessive quantifier"),
                example: (0, G.jsx)("div", { children: "123" }),
                exampleRegex: "\\d++.",
                info: (0, G.jsx)(x.vV, {
                  tag: "div",
                  text: "Matches as many characters as possible; backtracking can't reduce the number of characters matched. Because it is greedy, it will match all the way to the last digit, leaving nothing else for the {1} to match. Without backtracking, this regex fails to produce a match.",
                  ph1: S("."),
                }),
                keywords: ["no", "backtracking", "maximum", "most", "prevent"],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
            ]),
            (0, w.Z)(e, f, [
              {
                token: "\\G",
                desc: (0, o.Z)("Start of match"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "cats are " }),
                    (0, G.jsx)("span", {
                      className: V,
                      children: "silly cute ",
                    }),
                    "and cute",
                  ],
                }),
                exampleRegex: "(?: ?\\G|^cats are )((?:silly|cute)(?: |$))",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "This will match only at the starting point of the search or the position the previous successful match ended. Useful with the {1} flag, or when you are only trying to match after a certain point in a string.",
                  ph1: F("/g"),
                }),
                keywords: ["custom", "start", "after", "point", "specific"],
                flavors: [C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "^",
                basic: !0,
                desc: (0, o.Z)("Start of string"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "start" }),
                    " of string",
                  ],
                }),
                exampleRegex: "^\\w+",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches the start of a string without consuming any characters. If {1} multiline mode is used, this will also match immediately after a newline character.",
                  ph1: F("/m"),
                }),
                keywords: [
                  "begining",
                  "line",
                  "start",
                  "head",
                  "string",
                  "multi",
                  "text",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "$",
                basic: !0,
                desc: (0, o.Z)("End of string"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "end of ",
                    (0, G.jsx)("span", { className: T, children: "string" }),
                  ],
                }),
                exampleRegex: "\\w+$",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Matches the end of a string without consuming any characters. If multiline mode is used, this will also match immediately before a newline character."
                  ),
                }),
                keywords: ["last", "line", "tail", "very", "text"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\A",
                desc: (0, o.Z)("Start of string"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "start" }),
                    " of string",
                  ],
                }),
                exampleRegex: "\\A\\w+",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches the start of a string only. Unlike {1}, this is not affected by multiline mode.",
                  ph1: S("^"),
                }),
                keywords: [
                  "begining",
                  "text",
                  "start",
                  "head",
                  "string",
                  "multi",
                ],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().PYTHON,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\Z",
                desc: (0, o.Z)("End of string"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "end of ",
                    (0, G.jsx)("span", { className: T, children: "string" }),
                  ],
                }),
                exampleRegex: "\\w+\\Z",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches the end of a string only. Unlike {1}, this is not affected by multiline mode.",
                  ph1: S("$"),
                }),
                keywords: ["last", "line", "tail", "very", "text"],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON, C().JAVA],
              },
              {
                token: "\\z",
                desc: (0, o.Z)("Absolute end of string"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "absolute end of ",
                    (0, G.jsx)("span", { className: T, children: "string" }),
                  ],
                }),
                exampleRegex: "\\w+\\z",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches the end of a string only. Unlike {1}, this is not affected by multiline mode, and, in contrast to {2}, will not match before a trailing newline at the end of a string.",
                  ph1: S("$"),
                  ph2: S("\\Z"),
                }),
                keywords: ["last", "tail", "very", "text"],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG, C().JAVA],
              },
              {
                token: "\\b",
                basic: !0,
                desc: (0, o.Z)("A word boundary"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "wor",
                    (0, G.jsx)("span", { className: T, children: "d" }),
                    " boundaries are od",
                    (0, G.jsx)("span", { className: T, children: "d" }),
                  ],
                }),
                exampleRegex: "d\\b",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches, without consuming any characters, immediately between a character matched by {1} and a character not matched by {1} (in either order). It cannot be used to separate non words from words.",
                  ph1: S("\\w"),
                }),
                keywords: ["word", "real", "only", "start", "end"],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\B",
                basic: !0,
                desc: (0, o.Z)("Non-word boundary"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "r" }),
                    "egex is ",
                    (0, G.jsx)("span", { className: T, children: "r" }),
                    "eally cool",
                  ],
                }),
                exampleRegex: "r\\B",
                regexFlags: "g",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Matches, without consuming any characters, at the position between two characters matched by {1} or {2}.",
                  ph1: S("\\w"),
                  ph2: S("\\W"),
                }),
                keywords: [
                  "word",
                  "part",
                  "partially",
                  "extract",
                  "match",
                  "only",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
            ]),
            (0, w.Z)(e, R, [
              {
                token: "g",
                desc: (0, o.Z)("Global"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "match ",
                    (0, G.jsx)("span", { className: T, children: "this" }),
                    " and again",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "this" }),
                  ],
                }),
                exampleRegex: "this",
                regexFlags: "g",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Also known as global mode, it instruct the engine not to stop after the first match has been found, but rather to continue until no more matches can be found."
                  ),
                }),
                keywords: [
                  "more",
                  "multiple",
                  "stop",
                  "match",
                  "one",
                  "continue",
                  "after",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "m",
                desc: (0, o.Z)("Multiline"),
                example: (0, G.jsx)("div", {
                  children: (0, G.jsx)("span", {
                    className: T,
                    children: "digits coming up 443",
                  }),
                }),
                exampleRegex: "^d.+\\d{3}$",
                regexFlags: "m",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "The {1} and {2} anchors now match at the beginning/end of each line respectively, instead of beginning/end of the entire string or input.",
                  ph1: S("^"),
                  ph2: S("$"),
                }),
                keywords: [
                  "anchor",
                  "start",
                  "string",
                  "line",
                  "input",
                  "end",
                  "last",
                  "head",
                  "tail",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "i",
                desc: (0, o.Z)("Case insensitive"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "A" }),
                    " or",
                    " ",
                    (0, G.jsx)("span", { className: T, children: "a" }),
                  ],
                }),
                exampleRegex: "a",
                regexFlags: "gi",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "A case insensitive match is performed, meaning capital letters will be matched by non-capital letters and vice versa."
                  ),
                }),
                keywords: [
                  "upper",
                  "lower",
                  "regardless",
                  "case",
                  "letters",
                  "either",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "x",
                desc: (0, o.Z)("Ignore whitespace / verbose"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    "#comment here",
                  ],
                }),
                exampleRegex: "a#comment here",
                regexFlags: "x",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This flag tells the engine to ignore all whitespace and allow for comments in the regex; also called verbose. Comments are indicated by a starting \"#\"-character. If you need to include a space character in your regex, it must now be escaped '\\ '."
                  ),
                }),
                keywords: [
                  "comments",
                  "instructions",
                  "text",
                  "non",
                  "pattern",
                  "notes",
                  "extra",
                  "information",
                  "include",
                ],
                flavors: [C().PYTHON, C().PCRE, C().PCRE2, C().JAVA],
              },
              {
                token: "s",
                desc: (0, o.Z)("Single line"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "on",
                    (0, G.jsxs)("span", {
                      className: T,
                      children: [
                        "e",
                        (0, G.jsx)("br", {}),
                        "two",
                        (0, G.jsx)("br", {}),
                        "thr",
                      ],
                    }),
                    "ee",
                  ],
                }),
                exampleRegex: "e.*r",
                regexFlags: "s",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "This enables the dot metacharacter {1} to also match newlines. The whole string is treated as a single line input.",
                  ph1: S("."),
                }),
                keywords: [
                  "dotall",
                  "all",
                  "dot",
                  "newline",
                  "\\n",
                  "line",
                  "single",
                  "paragraph",
                ],
                flavors: [
                  C().PYTHON,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "u",
                desc: (0, o.Z)("Unicode"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "\xe7a" }),
                    " va?",
                  ],
                }),
                exampleRegex: "\\wa",
                regexFlags: "u",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Pattern strings will be treated as UTF-16, which means that unicode characters will also be included in {1} ranges, and in escape sequences like {2}.",
                  ph1: S("[a-z]"),
                  ph2: S("\\w"),
                }),
                keywords: [
                  "unicode",
                  "\\x",
                  "\\u",
                  "alphabet",
                  "foreign",
                  "characters",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "U",
                desc: (0, o.Z)("Unicode"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "\xe7a" }),
                    " va?",
                  ],
                }),
                exampleRegex: "\\wa",
                regexFlags: "U",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Escape sequences like {1} will also match unicode characters.",
                  ph1: S("\\w"),
                }),
                keywords: [
                  "unicode",
                  "\\x",
                  "\\u",
                  "alphabet",
                  "foreign",
                  "characters",
                ],
                flavors: [C().JAVA],
              },
              {
                token: "X",
                desc: (0, o.Z)("eXtra"),
                example: (0, G.jsx)("div", { children: "Boo." }),
                exampleRegex: "\\x42oo\\.",
                regexFlags: "X",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Any character following a {1} that is not a valid meta sequence will be faulted and raise an error. {2}, for example, will cause an error, and it will not match.",
                  ph1: F("\\"),
                  ph2: F("\\O"),
                }),
                keywords: ["meta", "only", "sequence", "no", "escaping"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "U",
                desc: (0, o.Z)("Ungreedy"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    "aaa",
                  ],
                }),
                exampleRegex: "a+",
                regexFlags: "U",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "The engine will per default do lazy matching, instead of greedy. This reverses the meaning of {1}, which will now make the previous quantifier greedy.",
                  ph1: S("?"),
                }),
                keywords: [
                  "lazy",
                  "non",
                  "greedy",
                  "swap",
                  "default",
                  "opposite",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "A",
                desc: (0, o.Z)("Anchor"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "aaaa" }),
                    " aaaa",
                  ],
                }),
                exampleRegex: "a+",
                regexFlags: "gA",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "The pattern is forced to become anchored at the start of the search or at the position of the last successful match, equivalent to a {1}.",
                  ph1: S("\\G"),
                }),
                keywords: [
                  "begining",
                  "text",
                  "start",
                  "head",
                  "string",
                  "multi",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "J",
                desc: (0, o.Z)("Duplicate group names"),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: V, children: "a" }),
                    (0, G.jsx)("span", { className: O, children: "b" }),
                  ],
                }),
                exampleRegex: "(?<letter>a)(?<letter>b)",
                regexFlags: "J",
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This allows regex to accept duplicate pattern names, however each capture group still has its own ID. Thus the two capture groups produce their own match instead of a single combined one."
                  ),
                }),
                keywords: [
                  "begining",
                  "text",
                  "start",
                  "head",
                  "string",
                  "multi",
                ],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "y",
                desc: (0, o.Z)(
                  "Sticky - searches in strings only from the index of the last match"
                ),
                example: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("span", { className: T, children: "a" }),
                    (0, G.jsx)("span", { className: T, children: "bc" }),
                    "Xabc",
                  ],
                }),
                exampleRegex: "a|bc",
                regexFlags: "gy",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Regex will continue parsing the string keeping in mind the last match location. If the next match is not located directly after the last, this next match is discarded."
                      ),
                    }),
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        'In the example below, the first alternate matched "a", and the second one matched "bc", however once it bumped into "X" none of the alternatives resulted in a match. Therefore the engine cannot return the next "a" as a match because "X" is not the last location where a match occurred.'
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "sticky",
                  "match",
                  "first",
                  "point",
                  "forward",
                  "after",
                  "only",
                ],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "u",
                desc: (0, o.Z)("Enable unicode support"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a",
                    (0, G.jsx)("span", {
                      className: T,
                      children: "\ud834\udf06",
                    }),
                    "b",
                  ],
                }),
                exampleRegex: "\ud834\udf06",
                regexFlags: "u",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Allows regex to match unicode characters via dotall and unicode escape sequences, as well as ES6 unicode code point escapes such as {1} which is made up of {2}.",
                  ph1: S("\\u{1D306}"),
                  ph2: S("\\uD834\\uDF06"),
                }),
                keywords: [
                  "unicode",
                  "special",
                  "alphabet",
                  "characters",
                  "foreign",
                  "symbols",
                  "strings",
                  "\\u{",
                  "\\u",
                ],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "u",
                desc: (0, o.Z)("Unicode case insensitive"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a",
                    (0, G.jsx)("span", { className: T, children: "\xc5" }),
                    "b",
                  ],
                }),
                exampleRegex: "\xe5",
                regexFlags: "u",
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Allows case insensitive matching of unicode characters, not only US-ASCII.",
                }),
                keywords: [
                  "unicode",
                  "special",
                  "alphabet",
                  "characters",
                  "foreign",
                  "symbols",
                  "strings",
                  "\\u{",
                  "\\u",
                ],
                flavors: [C().JAVA],
              },
              {
                token: "u",
                desc: (0, o.Z)("Enable unicode support"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "a",
                    (0, G.jsx)("span", { className: T, children: "\u03b1" }),
                    "beta",
                  ],
                }),
                exampleRegex: "\u03b1",
                regexFlags: "u",
                info: (0, G.jsxs)(G.Fragment, {
                  children: [
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Pattern strings will be treated as UTF-16, which means that unicode characters will also be included in {1} ranges, and in escape sequences like {2}.",
                      ph1: S("[a-z]"),
                      ph2: S("\\w"),
                    }),
                    (0, G.jsx)(x.vV, {
                      tag: "p",
                      text: "Keep in mind that Python 3 is going to treat your whole script as unicode by default, therefore using this flag would be redundant. See the {1} flag to limit matches to ASCII characters only. Python 2 requires this flag to turn on unicode support.",
                      ph1: F("/a"),
                    }),
                  ],
                }),
                keywords: [
                  "unicode",
                  "special",
                  "alphabet",
                  "characters",
                  "foreign",
                  "symbols",
                  "strings",
                ],
                flavors: [C().PYTHON],
              },
              {
                token: "a",
                desc: (0, o.Z)("Restrict matches to ASCII only"),
                example: (0, G.jsxs)("div", {
                  children: [
                    "\u03b1",
                    (0, G.jsx)("span", { className: T, children: "beta" }),
                  ],
                }),
                exampleRegex: "w+",
                regexFlags: "u",
                info: (0, G.jsxs)("div", {
                  children: [
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "Make regex perform ASCII-only matching instead of full Unicode matching. Applies to [a-z] ranges and escape sequences."
                      ),
                    }),
                    (0, G.jsx)("div", {
                      children: (0, o.Z)(
                        "This flag does not exist in Python2, as by default your script is parsed in ascii mode. In Python3 this will behave as described."
                      ),
                    }),
                  ],
                }),
                keywords: [
                  "unicode",
                  "ascii",
                  "alphabet",
                  "characters",
                  "normal",
                  "symbols",
                  "strings",
                  "english",
                ],
                flavors: [C().PYTHON],
              },
            ]),
            (0, w.Z)(e, k, [
              {
                token: "\\g<0>",
                desc: (0, o.Z)("Complete match contents"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "Returns a string with the full match result. `0` can be replaced with any desired capture group ID to return that part of the match instead."
                  ),
                }),
                keywords: [
                  "full",
                  "match",
                  "capture",
                  "group",
                  "particular",
                  "part",
                  "some",
                  "all",
                  "found",
                  "characters",
                  "strings",
                ],
                flavors: [C().PYTHON],
              },
              {
                token: "\\g<1>",
                desc: (0, o.Z)("Contents in capture group 1"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the contents from the first capture group. The number, in this case 1, can be any number as long as it corresponds to a valid capture group."
                  ),
                }),
                keywords: [
                  "group",
                  "capture",
                  "first",
                  "one",
                  "many",
                  "particular",
                ],
                flavors: [C().PYTHON],
              },
              {
                token: "\\g<foo>",
                desc: (0, o.Z)("Contents in capture group `foo`"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the contents from the capture group named `foo`. Any name can be used as long as it is defined in the regex. This syntax is made up and specific to only Regex101. If the J-flag is specified, content will be taken from the first capture group with the same name."
                  ),
                }),
                keywords: [
                  "recall",
                  "group",
                  "named",
                  "invoke",
                  "request",
                  "called",
                  "regex101",
                ],
                flavors: [C().PYTHON],
              },
              {
                token: "\\0",
                desc: (0, o.Z)("Complete match contents"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the complete match result from the regex."
                  ),
                }),
                keywords: [
                  "full",
                  "match",
                  "all",
                  "found",
                  "characters",
                  "strings",
                ],
                flavors: [C().PCRE, C().GOLANG],
              },
              {
                token: "\\0",
                desc: (0, o.Z)("Complete match contents"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the complete match result from the regex."
                  ),
                }),
                keywords: [
                  "full",
                  "match",
                  "all",
                  "found",
                  "characters",
                  "strings",
                ],
                flavors: [C().JAVA],
              },
              {
                token: "\\1",
                desc: (0, o.Z)("Contents in capture group 1"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the contents from the first capture group. The number, in this case 1, can be any number as long as it corresponds to a valid capture group."
                  ),
                }),
                keywords: [
                  "group",
                  "capture",
                  "first",
                  "one",
                  "many",
                  "particular",
                ],
                flavors: [C().PCRE, C().GOLANG],
              },
              {
                token: "$1",
                desc: (0, o.Z)("Contents in capture group 1"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the contents from the first capture group. The number, in this case 1, can be any number as long as it corresponds to a valid capture group."
                  ),
                }),
                keywords: [
                  "group",
                  "capture",
                  "first",
                  "one",
                  "many",
                  "particular",
                ],
                flavors: [
                  C().JAVASCRIPT,
                  C().PCRE,
                  C().PCRE2,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "$`",
                desc: (0, o.Z)("Contents before match"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a portion of the source string that precedes the match."
                  ),
                }),
                keywords: ["before", "leading", "up", "to", "ahead"],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "$'",
                desc: (0, o.Z)("Contents after match"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a portion of the source string that follows the match."
                  ),
                }),
                keywords: ["after", "following", "past", "behind"],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "$&",
                desc: (0, o.Z)("Complete match contents"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the complete match result from the regex."
                  ),
                }),
                keywords: ["all", "total", "including"],
                flavors: [C().JAVASCRIPT],
              },
              {
                token: "${foo}",
                desc: (0, o.Z)("Contents in capture group `foo`"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "This will return a string with the contents from the capture group named `foo`. Any name can be used as long as it is defined in the regex. This syntax is made up and specific to only Regex101. If the J-flag is specified, content will be taken from the first capture group with the same name."
                  ),
                }),
                keywords: [
                  "recall",
                  "group",
                  "named",
                  "invoke",
                  "request",
                  "called",
                  "regex101",
                ],
                flavors: [C().PCRE, C().PCRE2, C().GOLANG],
              },
              {
                token: "\\x20",
                desc: (0, o.Z)("Hexadecimal replacement values"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "You can use hexadecimals to insert any character into the replacement string using the standard syntax."
                  ),
                }),
                keywords: ["hexadecimal", "value", "custom", "characters"],
                flavors: [C().PCRE, C().PCRE2, C().PYTHON, C().JAVASCRIPT],
              },
              {
                token: "\\x{06fa}",
                desc: (0, o.Z)("Hexadecimal replacement values"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)(
                    "You can use hexadecimals to insert any character into the replacement string using the standard syntax."
                  ),
                }),
                keywords: ["hexadecimal", "value", "custom", "characters"],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().PYTHON,
                  C().JAVASCRIPT,
                  C().GOLANG,
                ],
              },
              {
                token: "\\t",
                desc: (0, o.Z)("Insert a tab"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Insert a tab character."),
                }),
                keywords: ["spaces", "four", "tab", "empty"],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().PYTHON,
                  C().JAVASCRIPT,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\r",
                desc: (0, o.Z)("Insert a carriage return"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Insert a carriage return character."),
                }),
                keywords: ["enter", "newline", "new", "skip", "line"],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().PYTHON,
                  C().JAVASCRIPT,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\n",
                desc: (0, o.Z)("Insert a newline"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Insert a newline character."),
                }),
                keywords: ["enter", "return", "newline", "new", "skip", "line"],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().PYTHON,
                  C().JAVASCRIPT,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\f",
                desc: (0, o.Z)("Insert a form-feed"),
                info: (0, G.jsx)("div", {
                  children: (0, o.Z)("Insert a form-feed character."),
                }),
                keywords: ["form", "feed", "new", "skip", "page"],
                flavors: [
                  C().PCRE,
                  C().PCRE2,
                  C().PYTHON,
                  C().JAVASCRIPT,
                  C().GOLANG,
                  C().JAVA,
                ],
              },
              {
                token: "\\U",
                desc: (0, o.Z)("Uppercase Transformation"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Transforms text to uppercase until either the end of string or a {1} token is encountered. This is a feature only available on regex101.com.",
                  ph1: S("\\E"),
                }),
                keywords: ["transform", "uppercase", "upper", "case"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\L",
                desc: (0, o.Z)("Lowercase Transformation"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Transforms text to lowercase until either end of string or a {1} token is encountered. This is a feature only available on regex101.com.",
                  ph1: S("\\E"),
                }),
                keywords: ["transform", "lowercase", "lower", "case"],
                flavors: [C().PCRE, C().PCRE2],
              },
              {
                token: "\\E",
                desc: (0, o.Z)("Terminate any Transformation"),
                info: (0, G.jsx)(x.vV, {
                  tag: "p",
                  text: "Terminates any of the previous {1} (uppercase) or {2} (lowercase) transformations. This is a feature only available on regex101.com.",
                  ph1: S("\\U"),
                  ph2: S("\\L"),
                }),
                keywords: ["transform", "terminate"],
                flavors: [C().PCRE, C().PCRE2],
              },
            ]),
            e);
        return (
          (a.COMMON_TOKENS = [].concat.apply(
            [],
            Object.keys(a).map(function (e) {
              return a[e].filter(function (e) {
                return e.basic;
              });
            })
          )),
          (a.ALL_TOKENS = [].concat.apply([], Object.values(a))),
          a
        );
      };
      var L = s(14850),
        M = s(25968),
        Y = s(70872),
        H = s(23543),
        U = s(11162),
        q = s(74387),
        z = s(41163),
        X = (0, Y.Z)(q.JL),
        D = parseInt(z.D6, 10),
        B = {
          appear: E,
          appearActive: Z,
          enter: E,
          enterActive: Z,
          exit: "Url5q",
          exitActive: "Z4TLl",
        };
      const _ = function (e) {
        var a = e.item,
          s = e.isOpen,
          n = e.target,
          l = e.onDetailsClose,
          c = (0, r.I0)(),
          d = (0, r.v9)(function (e) {
            return e.regexEditor.flavor;
          }),
          h = (0, t.useRef)(null),
          p = (0, t.useCallback)(
            function () {
              var e,
                s,
                n = a.exampleRegex,
                t = a.regexFlags,
                r =
                  (null === (e = h.current) || void 0 === e
                    ? void 0
                    : e.innerText) ||
                  (null === (s = h.current) || void 0 === s
                    ? void 0
                    : s.textContent);
              null != r &&
                (M.ZP.emit(M.$7),
                c((0, L.Iu)()),
                c((0, L.dL)("", t || "", d)),
                M.ZP.emit(M.fZ, n, r));
            },
            [a, c, d]
          );
        return (
          (0, t.useEffect)(
            function () {
              var e = function (e) {
                null === e || void 0 === e || e.stopPropagation(), l();
              };
              return (
                s && M.ZP.once("key:escape", e),
                function () {
                  return M.ZP.off("key:escape", e);
                }
              );
            },
            [s, l]
          ),
          (0, G.jsx)(x.h_, {
            isOpen: s,
            closeTimeout: X,
            portalTarget: n,
            children: (0, G.jsx)(x.uT, {
              className: "UDI84",
              classNames: B,
              timeout: X,
              in: s,
              children: (0, G.jsxs)("div", {
                className: "FHG1E",
                children: [
                  (0, G.jsx)(x.Po, {
                    text: a.desc,
                    className: "Xej5E",
                    children: (0, G.jsx)(x.lx, {
                      text: (0, o.Z)("Close details"),
                      direction:
                        window && window.innerWidth > D ? H.qF.NW : H.qF.W,
                      children: (0, G.jsx)(x.Yd, {
                        onClick: l,
                        className: "XEr8P",
                        children: (0, G.jsx)(i.eSQ, { size: 18 }),
                      }),
                    }),
                  }),
                  (0, G.jsxs)("div", {
                    className: "w7WwV",
                    children: [
                      (0, G.jsxs)("div", {
                        className: "rtoZ8",
                        children: [
                          (0, G.jsx)("div", {
                            className: "ZWIzy",
                            children: (0, G.jsx)("span", {
                              className: N.Z.tokenSample,
                              children: a.token,
                            }),
                          }),
                          (0, G.jsx)("div", {
                            className: "vqMnN",
                            children: a.info,
                          }),
                        ],
                      }),
                      !!a.exampleRegex &&
                        (0, G.jsxs)(U.Z, {
                          className: "tFlWF",
                          children: [
                            (0, G.jsxs)("div", {
                              className: A,
                              children: [
                                "/",
                                a.exampleRegex,
                                "/",
                                a.regexFlags,
                              ],
                            }),
                            (0, G.jsx)("div", {
                              className: "ycsEY",
                              ref: h,
                              children: a.example,
                            }),
                            (0, G.jsx)(x.hU, {
                              tooltip: (0, o.Z)("Load example in editor"),
                              tooltipDirection: H.qF.NW,
                              size: 24,
                              onClick: p,
                              className: "dS50b",
                              children: (0, G.jsx)(i.nzV, { size: 14 }),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      function K(e, a, s) {
        return e.filter(function (e) {
          var n = e.flavors.includes(s);
          if ("" !== a) {
            var t = (a = a.toLowerCase()).split(/\s+/),
              r =
                e.token.toLowerCase().includes(a) ||
                e.desc.toLowerCase().includes(a) ||
                (e.keywords &&
                  e.keywords.some(function (e) {
                    return t.includes(e);
                  }));
            return n && r;
          }
          return n;
        });
      }
      const W = function () {
        var e = (0, r.v9)(function (e) {
            return e.regexEditor.flavor;
          }),
          a = (0, t.useState)(g),
          s = (0, n.Z)(a, 2),
          w = s[0],
          P = s[1],
          C = (0, t.useState)(!1),
          N = (0, n.Z)(C, 2),
          A = N[0],
          E = N[1],
          Z = (0, t.useState)(""),
          T = (0, n.Z)(Z, 2),
          V = T[0],
          O = T[1],
          I = (0, t.useState)(null),
          S = (0, n.Z)(I, 2),
          F = S[0],
          L = S[1],
          M = (0, t.useCallback)(function (e) {
            L(e), E(!0);
          }, []),
          Y = (0, t.useCallback)(function (e) {
            return P(e);
          }, []),
          H = (0, t.useCallback)(function () {
            return E(!1);
          }, []),
          U = (0, c.Sf)(O, 300, "cancel"),
          q = (0, t.useMemo)(
            function () {
              var a = [
                {
                  string:
                    "" !== V
                      ? (0, o.Z)("Full Search Result")
                      : (0, o.Z)("All Tokens"),
                  id: m,
                  icon: "" !== V ? i.Qcu : l.CAn,
                },
                { string: (0, o.Z)("Common Tokens"), id: g, icon: i.fi0 },
                { string: (0, o.Z)("General Tokens"), id: u, icon: i.XBp },
                { string: (0, o.Z)("Anchors"), id: f, icon: i.lSs },
                { string: (0, o.Z)("Meta Sequences"), id: v, icon: i._gw },
                { string: (0, o.Z)("Quantifiers"), id: j, icon: i.a4s },
                { string: (0, o.Z)("Group Constructs"), id: b, icon: i.GH5 },
                { string: (0, o.Z)("Character Classes"), id: y, icon: i.Ztq },
                { string: (0, o.Z)("Flags/Modifiers"), id: R, icon: i.msm },
                { string: (0, o.Z)("Substitution"), id: k, icon: i.EgU },
              ];
              if ("" !== V) {
                var s = J();
                return a.filter(function (a) {
                  return K(s[a.id], V, e).length > 0;
                });
              }
              return a;
            },
            [V, e]
          );
        (0, t.useEffect)(
          function () {
            E(!1), L(null);
          },
          [e]
        );
        var z = q.find(function (e) {
            return e.id === w;
          })
            ? w
            : m,
          X = J()[z];
        return (0, G.jsxs)("div", {
          className: "yHczy",
          children: [
            (0, G.jsxs)("div", {
              className: "K3I6m",
              children: [
                (0, G.jsxs)("label", {
                  className: "QnmOe",
                  children: [
                    (0, G.jsx)("span", {
                      className: "zVWQk",
                      children: (0, o.Z)("Search reference"),
                    }),
                    (0, G.jsx)(x.oi, {
                      type: "text",
                      placeholder: (0, o.Z)("Search reference"),
                      onChange: U,
                      clearButton: !0,
                      spellCheck: "false",
                    }),
                  ],
                }),
                (0, G.jsx)(d.Z, {
                  children: q.map(function (e) {
                    var a = e.id,
                      s = e.string,
                      n = e.icon;
                    return (0, G.jsx)(
                      h.Z,
                      {
                        isActive: a === z,
                        icon: n,
                        onClick: function () {
                          return Y(a);
                        },
                        children: s,
                      },
                      "quickref-category-".concat(a)
                    );
                  }),
                }),
              ],
            }),
            (0, G.jsx)("div", { className: "Y8ney" }),
            (0, G.jsx)(d.Z, {
              className: "y8wXX",
              children: K(X, V, e).map(function (e, a) {
                return (0, G.jsx)(
                  p.Z,
                  {
                    onClick: function () {
                      return M(e);
                    },
                    rightElement: e.token,
                    children: e.desc,
                  },
                  "quickref-category-entry-".concat(a)
                );
              }),
            }),
            null != F &&
              (0, G.jsx)(_, {
                isOpen: A,
                onDetailsClose: H,
                item: F,
                target: document.getElementById("quickrefParent"),
              }),
          ],
        });
      };
    },
  },
]);
