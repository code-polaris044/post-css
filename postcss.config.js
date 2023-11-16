module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default",
    }),
    require("postcss-import"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      browsers: "last 2 versions, > 1%",
    }),
    require("postcss-dart-sass"),
  ],
  // ソースマップの設定を追加
  map: {
    inline: false, // インラインでなく、別ファイルとして保存
    annotation: true, // CSSファイルの末尾にソースマップへのリンクを追加
  },
};
