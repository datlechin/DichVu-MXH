const mix = require("laravel-mix");
const lodash = require("lodash");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const third_party_assets = {
    css_js: [
        { name: "bootstrap", assets: ["./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"] },
        {
            name: "flatpickr",
            assets: ["./node_modules/flatpickr/dist/flatpickr.min.js", "./node_modules/flatpickr/dist/flatpickr.min.css"],
        },
        {
            name: "choices.js",
            assets: ["./node_modules/choices.js/public/assets/scripts/choices.min.js", "./node_modules/choices.js/public/assets/styles/choices.min.css"],
        },
        { name: "simplebar", assets: ["./node_modules/simplebar/dist/simplebar.min.js"] },
        {
            name: "sweetalert2",
            assets: ["./node_modules/sweetalert2/dist/sweetalert2.min.js", "./node_modules/sweetalert2/dist/sweetalert2.min.css"],
        },
        { name: "feather-icons", assets: ["./node_modules/feather-icons/dist/feather.min.js"] },
        { name: "node-waves", assets: ["./node_modules/node-waves/dist/waves.min.js"] },
        { name: "toastify-js", assets: ["./node_modules/toastify-js/src/toastify.js", "./node_modules/toastify-js/src/toastify.css"] },
    ],
};

lodash(third_party_assets).forEach(function (assets, type) {
    if (type === "css_js") {
        lodash(assets).forEach(function (plugin) {
            let name = plugin["name"],
                assetlist = plugin["assets"],
                css = [],
                js = [];
            lodash(assetlist).forEach(function (asset) {
                let ass = asset.split(",");
                for (let i = 0; i < ass.length; ++i) {
                    if (ass[i].substr(ass[i].length - 3) === ".js") {
                        js.push(ass[i]);
                    } else {
                        css.push(ass[i]);
                    }
                }
            });
            if (js.length > 0) {
                mix.combine(js, "public/assets" + "/libs/" + name + "/" + name + ".min.js");
            }
            if (css.length > 0) {
                mix.combine(css, "public/assets" + "/libs/" + name + "/" + name + ".min.css");
            }
        });
    }
});

const app_pages_assets = {
    js: []
};

lodash(app_pages_assets).forEach(function(assets, type) {
    for (let i = 0; i < assets.length; ++i) {
        mix.js(assets[i], "public/assets/js/pages");
    }
});

mix.copyDirectory("resources/fonts", "public/assets/fonts");
mix.copyDirectory("resources/images", "public/assets/images");
mix.sass("resources/sass/bootstrap.scss", "public/assets/css").minify("public/assets/css/bootstrap.css");
mix.sass("resources/sass/icons.scss", "public/assets/css").options({ processCssUrls: false }).minify("public/assets/css/icons.css");
mix.sass("resources/sass/app.scss", "public/assets/css").options({ processCssUrls: false }).minify("public/assets/css/app.css");
mix.sass("resources/sass/custom.scss", "public/assets/css").options({ processCssUrls: false }).minify("public/assets/css/custom.css");

mix.combine("resources/js/plugins.js", "public/assets/js/plugins.min.js");
mix.combine("resources/js/layout.js", "public/assets/js/layout.js");
mix.combine("resources/js/bootstrap.js", "public/assets/js/bootstrap.min.js");
mix.combine("resources/js/app.js", "public/assets/js/app.min.js");
mix.combine("resources/js/pages/plugins/lord-icon-2.1.0.js", "public/assets/js/pages/plugins/lord-icon-2.1.0.min.js");
