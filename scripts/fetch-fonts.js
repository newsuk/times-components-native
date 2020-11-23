/* eslint-disable no-console, import/no-extraneous-dependencies */

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);
const fetch = require("node-fetch");
const convert = require("../packages/typeset/lib/convert-fonts");

const fontBasePath = "https://nuk-times-fonts.s3-eu-west-1.amazonaws.com";
const fontDir = `${__dirname}/../dist/public/fonts`;

const fonts = [
  {
    fontName: "TimesModern-Bold",
    fileName: "TimesModern-Bold",
    fontFamily: "TimesModern-Bold",
    source: `${fontBasePath}/TimesModern-Bold.ttf`,
  },
  {
    fontName: "TimesModern-Regular",
    fileName: "TimesModern-Regular",
    fontFamily: "TimesModern-Regular",
    source: `${fontBasePath}/TimesModern-Regular.ttf`,
  },
  {
    fontName: "TimesDigitalW04-Regular",
    fileName: "TimesDigitalW04",
    fontFamily: "TimesDigitalW04",
    source: `${fontBasePath}/TimesDigitalW04-Regular.ttf`,
  },
  {
    fontName: "TimesDigitalW04-Regular",
    fileName: "TimesDigitalW04-Regular",
    fontFamily: "TimesDigitalW04-Regular",
    source: `${fontBasePath}/TimesDigitalW04-Regular.ttf`,
  },
  {
    fontName: "TimesDigitalW04-Italic",
    fileName: "TimesDigitalW04_italic",
    fontFamily: "TimesDigitalW04",
    source: `${fontBasePath}/TimesDigitalW04-Italic.ttf`,
  },
  {
    fontName: "TimesDigitalW04-Bold",
    fileName: "TimesDigitalW04_bold",
    fontFamily: "TimesDigitalW04",
    source: `${fontBasePath}/TimesDigitalW04-Bold.ttf`,
  },
  {
    fontName: "TimesDigitalW04-RegularSC",
    fileName: "TimesDigitalW04-RegularSC",
    fontFamily: "TimesDigitalW04-RegularSC",
    source: `${fontBasePath}/TimesDigitalW04-RegularSC.ttf`,
  },
  {
    fontName: "GillSansMTStd-Medium",
    fileName: "GillSansMTStd-Medium",
    fontFamily: "GillSansMTStd-Medium",
    source: `${fontBasePath}/GillSansMTStd-Medium.ttf`,
  },
  {
    fontName: "GillSansMTStd-Bold",
    fileName: "GillSansMTStd-Bold",
    fontFamily: "GillSansMTStd-Bold",
    source: `${fontBasePath}/GillSansMTStd-Bold.ttf`,
  },
  {
    fontName: "CenturyGothic-Bold",
    fileName: "CenturyGothic-Bold",
    fontFamily: "CenturyGothic-Bold",
    source: `${fontBasePath}/CenturyGothic-Bold.ttf`,
  },
  {
    fontName: "Flama-Bold",
    fileName: "Flama-Bold",
    fontFamily: "Flama-Bold",
    source: `${fontBasePath}/Flama-Bold.ttf`,
  },
  {
    fontName: "Tiempos-Headline-Bold",
    fileName: "Tiempos-Headline-Bold",
    fontFamily: "Tiempos-Headline-Bold",
    source: `${fontBasePath}/Tiempos-Headline-Bold.ttf`,
  },
];

const download = (source, dest) =>
  fetch(source).then(
    (res) =>
      new Promise((resolve, reject) => {
        const stream = fs.createWriteStream(dest);

        stream.on("finish", resolve);
        stream.on("error", reject);

        res.body.pipe(stream);
      }),
  );

const generate = (file, fontName, fontFamily) =>
  exec(
    `fontforge -lang=ff -c 'Open($1); SetFondName("${fontFamily}"); SetFontNames("${fontName}", "${fontFamily}", "${fontName}"); Generate("${file}");' ${file}`,
  ).catch((e) => console.error(e)); // eslint-disable-line no-console

fs.promises.mkdir(fontDir, { recursive: true }).then(() =>
  Promise.all(
    fonts.map(({ fontName, fontFamily, source, fileName }) => {
      const extension = path.extname(source);
      const dest = `${fontDir}/${fileName}${extension}`;
      if (!fs.existsSync(dest)) {
        return download(source, dest).then(() => {
          try {
            generate(dest, fontName, fontFamily).then(() => {
              convert(dest, `${fontDir}/${fileName}.js`);
            });
          } catch (e) {
            console.error(e);
          }
          return null;
        });
      }
      return Promise.resolve();
    }),
  ),
);
