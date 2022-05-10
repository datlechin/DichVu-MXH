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
        {
            name: "swiper",
            assets: ["./node_modules/swiper/swiper-bundle.min.js", "./node_modules/swiper/swiper-bundle.min.css"],
        },
        { name: "particles.js", assets: ["./node_modules/particles.js/particles.js"] },
        { name: "feather-icons", assets: ["./node_modules/feather-icons/dist/feather.min.js"] },
        { name: "node-waves", assets: ["./node_modules/node-waves/dist/waves.min.js"] },
        { name: "toastify-js", assets: ["./node_modules/toastify-js/src/toastify.js", "./node_modules/toastify-js/src/toastify.css"] },
    ],
};

lodash(third_party_assets).forEach(function (assets, type) {
    if (type == "css_js") {
        lodash(assets).forEach(function (plugin) {
            var name = plugin["name"],
                assetlist = plugin["assets"],
                css = [],
                js = [];
            lodash(assetlist).forEach(function (asset) {
                var ass = asset.split(",");
                for (let i = 0; i < ass.length; ++i) {
                    if (ass[i].substr(ass[i].length - 3) == ".js") {
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
    js: [
            "resources/js/pages/animation-aos.init.js",
            "resources/js/pages/apexcharts-area.init.js",
            "resources/js/pages/apexcharts-bar.init.js",
            "resources/js/pages/apexcharts-boxplot.init.js",
            "resources/js/pages/apexcharts-bubble.init.js",
            "resources/js/pages/apexcharts-candlestick.init.js",
            "resources/js/pages/apexcharts-column.init.js",
            "resources/js/pages/apexcharts-heatmap.init.js",
            "resources/js/pages/apexcharts-line.init.js",
            "resources/js/pages/apexcharts-mixed.init.js",
            "resources/js/pages/apexcharts-pie.init.js",
            "resources/js/pages/apexcharts-polararea.init.js",
            "resources/js/pages/apexcharts-radar.init.js",
            "resources/js/pages/apexcharts-radialbar.init.js",
            "resources/js/pages/apexcharts-scatter.init.js",
            "resources/js/pages/apexcharts-timeline.init.js",
            "resources/js/pages/apexcharts-treemap.init.js",
            // "resources/js/pages/calendar.init.js",
            "resources/js/pages/card.init.js",
            "resources/js/pages/chartjs.init.js",
            "resources/js/pages/chat.init.js",
            "resources/js/pages/coming-soon.init.js",
            "resources/js/pages/crm-companies.init.js",
            "resources/js/pages/crm-contact.init.js",
            "resources/js/pages/crm-leads.init.js",
            "resources/js/pages/crypto-buy-sell.init.js",
            "resources/js/pages/crypto-kyc.init.js",
            "resources/js/pages/crypto-orders.init.js",
            "resources/js/pages/crypto-transactions.init.js",
            "resources/js/pages/crypto-wallet.init.js",
            "resources/js/pages/dashboard-analytics.init.js",
            "resources/js/pages/dashboard-crm.init.js",
            "resources/js/pages/dashboard-crypto.init.js",
            "resources/js/pages/dashboard-ecommerce.init.js",
            "resources/js/pages/dashboard-projects.init.js",
            "resources/js/pages/echarts.init.js",
            "resources/js/pages/ecommerce-cart.init.js",
            "resources/js/pages/ecommerce-order.init.js",
            "resources/js/pages/ecommerce-customer-list.init.js",
            "resources/js/pages/ecommerce-product-checkout.init.js",
            "resources/js/pages/ecommerce-product-create.init.js",
            "resources/js/pages/ecommerce-product-details.init.js",
            "resources/js/pages/ecommerce-product-list.init.js",
            "resources/js/pages/form-file-upload.init.js",
            "resources/js/pages/form-input-spin.init.js",
            "resources/js/pages/form-advanced.init.js",
            "resources/js/pages/form-editor.init.js",
            "resources/js/pages/form-masks.init.js",
            "resources/js/pages/form-pickers.init.js",
            "resources/js/pages/form-validation.init.js",
            "resources/js/pages/form-wizard.init.js",
            "resources/js/pages/gallery.init.js",
            "resources/js/pages/gmaps.init.js",
            "resources/js/pages/gridjs.init.js",
            "resources/js/pages/invoicecreate.init.js",
            "resources/js/pages/invoiceslist.init.js",
            "resources/js/pages/leaflet-map.init.js",
            "resources/js/pages/leaflet-us-states.js",
            "resources/js/pages/listjs.init.js",
            "resources/js/pages/mailbox.init.js",
            "resources/js/pages/modal.init.js",
            "resources/js/pages/materialdesign.list.js",
            "resources/js/pages/notifications.init.js",
            "resources/js/pages/nestable.init.js",
            "resources/js/pages/particles.app.js",
            "resources/js/pages/password-addon.init.js",
            "resources/js/pages/pricing.init.js",
            "resources/js/pages/profile-setting.init.js",
            "resources/js/pages/profile.init.js",
            "resources/js/pages/project-create.init.js",
            "resources/js/pages/project-list.init.js",
            "resources/js/pages/project-overview.init.js",
            "resources/js/pages/range-sliders.init.js",
            "resources/js/pages/rating.init.js",
            "resources/js/pages/remix-icons-listing.js",
            "resources/js/pages/search-result.init.js",
            "resources/js/pages/seller-details.init.js",
            "resources/js/pages/sellers.init.js",
            "resources/js/pages/sweetalerts.init.js",
            "resources/js/pages/swiper.init.js",
            "resources/js/pages/tasks-kanban.init.js",
            "resources/js/pages/tasks-list.init.js",
            "resources/js/pages/team.init.js",
            "resources/js/pages/ticketdetail.init.js",
            "resources/js/pages/ticketlist.init.js",
            "resources/js/pages/timeline.init.js",
            "resources/js/pages/tour.init.js",
            "resources/js/pages/two-step-verification.init.js",
            "resources/js/pages/vector-maps.init.js",
            "resources/js/pages/landing.init.js",
            "resources/js/pages/widgets.init.js"
    ]
};

lodash(app_pages_assets).forEach(function(assets, type) {
    for (let i = 0; i < assets.length; ++i) {
        mix.js(assets[i], "public/assets/js/pages");
    };
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
