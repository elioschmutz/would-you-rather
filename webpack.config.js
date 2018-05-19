const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const appHtmlTitle = 'Kochwalter';

function generateHtmlPlugins (templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    });
  });
}

// We will call the function like this:
const htmlPlugins = generateHtmlPlugins('./app/templates/views');

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        vendor: [
            'lodash'
        ],
        bundle: path.join(dirApp, 'js/index')
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new webpack.ProvidePlugin({
            // lodash
            '_': 'lodash'
        })]
        .concat(htmlPlugins),
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },

            // EJS
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader'
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
