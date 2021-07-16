const path = require("path");

module.exports = {
    watch: true,
    mode: "development",
    entry: path.join(__dirname, "js", "main.js"),
    output: {
        path: path.resolve(__dirname, "build", "js"),
        filename: "rat-library.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        // parserOpts: { allowReturnOutsideFunction: true }
                        // allowReturnOutsideFunction: true
                    }
                }
            }
        ]
    }
    // allowReturnOutsideFunction: true
};