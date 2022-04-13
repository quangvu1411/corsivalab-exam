(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[4],{476:function(e,t,o){"use strict";var c=o(0),m=o(8),n=Object(c.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(m.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}));t.a=n},528:function(e,t,o){"use strict";var c=o(0),m=o(6),n=o.n(m),r=o(1),i=o.n(r),a=o(17),u=o(21);o(529);class s extends c.Component{render(){const{className:e,menu:t,subtitle:o,title:m,unreadMessages:r}=this.props,i=n()({"woocommerce-layout__inbox-panel-header":o,"woocommerce-layout__activity-panel-header":!o},e),u=r||0;return Object(c.createElement)("div",{className:i},Object(c.createElement)("div",{className:"woocommerce-layout__inbox-title"},Object(c.createElement)(a.Text,{size:16,weight:600,color:"#23282d"},m),Object(c.createElement)(a.Text,{variant:"button",weight:"600",size:"14",lineHeight:"20px"},u>0&&Object(c.createElement)("span",{className:"woocommerce-layout__inbox-badge"},r))),Object(c.createElement)("div",{className:"woocommerce-layout__inbox-subtitle"},o&&Object(c.createElement)(a.Text,{variant:"body.small",size:"14",lineHeight:"20px"},o)),t&&Object(c.createElement)("div",{className:"woocommerce-layout__activity-panel-header-menu"},t))}}s.propTypes={className:i.a.string,unreadMessages:i.a.number,title:i.a.string.isRequired,subtitle:i.a.string,menu:i.a.shape({type:i.a.oneOf([u.EllipsisMenu])})},t.a=s},529:function(e,t,o){},603:function(e,t,o){"use strict";(function(e,c){var m,n=o(605);m="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:c;var r=Object(n.a)(m);t.a=r}).call(this,o(81),o(604)(e))},604:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},605:function(e,t,o){"use strict";function c(e){var t,o=e.Symbol;return"function"==typeof o?o.observable?t=o.observable:(t=o("observable"),o.observable=t):t="@@observable",t}o.d(t,"a",(function(){return c}))},638:function(e,t,o){"use strict";o.r(t),o.d(t,"SETUP_TASK_HELP_ITEMS_FILTER",(function(){return O})),o.d(t,"HelpPanel",(function(){return y}));var c=o(0),m=o(2),n=o(17),r=o(7),i=o(28),a=o(118),u=o(502),s=o(476),l=o(4),p=o(21),d=o(11),_=(o(603),function(){return Math.random().toString(36).substring(7).split("").join(".")});_(),_();function w(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}var h=o(16),g=o(528),b=o(65);const O="woocommerce_admin_setup_task_help_items";function f(e){const{taskName:t}=e;switch(t){case"products":return[{title:Object(m.__)("Adding and Managing Products",'woocommerce'),link:"https://woocommerce.com/document/managing-products/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Import products using the CSV Importer and Exporter",'woocommerce'),link:"https://woocommerce.com/document/product-csv-importer-exporter/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Migrate products using Cart2Cart",'woocommerce'),link:"https://woocommerce.com/products/cart2cart/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Learn more about setting up products",'woocommerce'),link:"https://woocommerce.com/documentation/plugins/woocommerce/getting-started/setup-products/?utm_source=help_panel&utm_medium=product"}];case"appearance":return[{title:Object(m.__)("Showcase your products and tailor your shopping experience using Blocks",'woocommerce'),link:"https://woocommerce.com/document/woocommerce-blocks/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Manage Store Notice, Catalog View and Product Images",'woocommerce'),link:"https://woocommerce.com/document/woocommerce-customizer/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("How to choose and change a theme",'woocommerce'),link:"https://woocommerce.com/document/choose-change-theme/?utm_source=help_panel&utm_medium=product"}];case"shipping":return function({activePlugins:e,countryCode:t}){const o="US"===t&&!e.includes("woocommerce-services");return[{title:Object(m.__)("Setting up Shipping Zones",'woocommerce'),link:"https://woocommerce.com/document/setting-up-shipping-zones/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Core Shipping Options",'woocommerce'),link:"https://woocommerce.com/documentation/plugins/woocommerce/getting-started/shipping/core-shipping-options/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Product Shipping Classes",'woocommerce'),link:"https://woocommerce.com/document/product-shipping-classes/?utm_source=help_panel&utm_medium=product"},o&&{title:Object(m.__)("WooCommerce Shipping setup and configuration",'woocommerce'),link:"https://woocommerce.com/document/woocommerce-shipping-and-tax/?utm_source=help_panel&utm_medium=product#section-3"},{title:Object(m.__)("Learn more about configuring your shipping settings",'woocommerce'),link:"https://woocommerce.com/document/plugins/woocommerce/getting-started/shipping/?utm_source=help_panel&utm_medium=product"}].filter(Boolean)}(e);case"tax":return function(e){const{countryCode:t,taskLists:o}=e,c=o.reduce((e,t)=>[...e,...t.tasks],[]).find(e=>"tax"===e.id);if(!c)return;const{additionalData:n}=c,{woocommerceTaxCountries:r=[],taxJarActivated:i}=n,a=!i&&r.includes(t);return[{title:Object(m.__)("Setting up Taxes in WooCommerce",'woocommerce'),link:"https://woocommerce.com/document/setting-up-taxes-in-woocommerce/?utm_source=help_panel&utm_medium=product"},a&&{title:Object(m.__)("Automated Tax calculation using WooCommerce Tax",'woocommerce'),link:"https://woocommerce.com/document/woocommerce-services/?utm_source=help_panel&utm_medium=product#section-10"}].filter(Boolean)}(e);case"payments":return function(e){const{paymentGatewaySuggestions:t}=e;return[{title:Object(m.__)("Which Payment Option is Right for Me?",'woocommerce'),link:"https://woocommerce.com/document/premium-payment-gateway-extensions/?utm_source=help_panel&utm_medium=product"},t.woocommerce_payments&&{title:Object(m.__)("WooCommerce Payments Start Up Guide",'woocommerce'),link:"https://woocommerce.com/document/payments/?utm_source=help_panel&utm_medium=product"},t.woocommerce_payments&&{title:Object(m.__)("WooCommerce Payments FAQs",'woocommerce'),link:"https://woocommerce.com/documentation/woocommerce-payments/woocommerce-payments-faqs/?utm_source=help_panel&utm_medium=product"},t.stripe&&{title:Object(m.__)("Stripe Setup and Configuration",'woocommerce'),link:"https://woocommerce.com/document/stripe/?utm_source=help_panel&utm_medium=product"},t["ppcp-gateway"]&&{title:Object(m.__)("PayPal Checkout Setup and Configuration",'woocommerce'),link:"https://woocommerce.com/document/2-0/woocommerce-paypal-payments/?utm_medium=product#section-3"},t.square_credit_card&&{title:Object(m.__)("Square - Get started",'woocommerce'),link:"https://woocommerce.com/document/woocommerce-square/?utm_source=help_panel&utm_medium=product"},t.kco&&{title:Object(m.__)("Klarna - Introduction",'woocommerce'),link:"https://woocommerce.com/document/klarna-checkout/?utm_source=help_panel&utm_medium=product"},t.klarna_payments&&{title:Object(m.__)("Klarna - Introduction",'woocommerce'),link:"https://woocommerce.com/document/klarna-payments/?utm_source=help_panel&utm_medium=product"},t.payfast&&{title:Object(m.__)("PayFast Setup and Configuration",'woocommerce'),link:"https://woocommerce.com/document/payfast-payment-gateway/?utm_source=help_panel&utm_medium=product"},t.eway&&{title:Object(m.__)("Eway Setup and Configuration",'woocommerce'),link:"https://woocommerce.com/document/eway/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Direct Bank Transfer (BACS)",'woocommerce'),link:"https://woocommerce.com/document/bacs/?utm_source=help_panel&utm_medium=product"},{title:Object(m.__)("Cash on Delivery",'woocommerce'),link:"https://woocommerce.com/document/cash-on-delivery/?utm_source=help_panel&utm_medium=product"}].filter(Boolean)}(e);case"marketing":return function(e){const{activePlugins:t}=e;return[t.includes("mailpoet")&&{title:Object(m.__)("Get started with Mailpoet",'woocommerce'),link:"https://kb.mailpoet.com/category/114-getting-started"},t.includes("google-listings-and-ads")&&{title:Object(m.__)("Set up Google Listing & Ads",'woocommerce'),link:"https://woocommerce.com/document/google-listings-and-ads/?utm_medium=product#get-started"},t.includes("mailchimp-for-woocommerce")&&{title:Object(m.__)("Connect Mailchimp for WooCommerce",'woocommerce'),link:"https://mailchimp.com/help/connect-or-disconnect-mailchimp-for-woocommerce/"},t.includes("creative-mail-by-constant-contact")&&{title:Object(m.__)("Set up Creative Mail for WooCommerce",'woocommerce'),link:"https://app.creativemail.com/kb/help/WooCommerce"}].filter(Boolean)}(e);default:return[{title:Object(m.__)("Get Support",'woocommerce'),link:"https://woocommerce.com/my-account/create-a-ticket/?utm_medium=product"},{title:Object(m.__)("Home Screen",'woocommerce'),link:"https://woocommerce.com/document/home-screen/?utm_medium=product"},{title:Object(m.__)("Inbox",'woocommerce'),link:"https://woocommerce.com/document/home-screen/?utm_medium=product#section-2"},{title:Object(m.__)("Stats Overview",'woocommerce'),link:"https://woocommerce.com/document/home-screen/?utm_medium=product#section-4"},{title:Object(m.__)("Store Management",'woocommerce'),link:"https://woocommerce.com/document/home-screen/?utm_medium=product#section-5"},{title:Object(m.__)("Store Setup Checklist",'woocommerce'),link:"https://woocommerce.com/document/woocommerce-setup-wizard?utm_medium=product#store-setup-checklist"}]}}function k(e,t){const{taskName:o}=e;t&&e.recordEvent("help_panel_click",{task_name:o||"homescreen",link:t.currentTarget.href})}const y=e=>{const{taskName:t}=e;Object(c.useEffect)(()=>{e.recordEvent("help_panel_open",{task_name:t||"homescreen"})},[t]);const o=function(e){const t=f(e),o={title:Object(m.__)("WooCommerce Docs",'woocommerce'),link:"https://woocommerce.com/documentation/?utm_source=help_panel&utm_medium=product"};t.push(o);const r=Object(i.applyFilters)(O,t,e.taskName,e);let p=Array.isArray(r)?r.filter(e=>e instanceof Object&&e.title&&e.link):[];p.length||(p=[o]);const d=Object(l.partial)(k,e);return p.map(e=>({title:Object(c.createElement)(n.Text,{as:"div",variant:"button",weight:"600",size:"14",lineHeight:"20px"},e.title),before:Object(c.createElement)(a.a,{icon:u.a}),after:Object(c.createElement)(a.a,{icon:s.a}),linkType:"external",target:"_blank",href:e.link,onClick:d}))}(e);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(g.a,{title:Object(m.__)("Documentation",'woocommerce')}),Object(c.createElement)(p.Section,null,Object(c.createElement)(p.List,{items:o,className:"woocommerce-quick-links__list"})))};y.defaultProps={recordEvent:h.recordEvent};t.default=w(Object(r.withSelect)(e=>{const{getSettings:t}=e(d.SETTINGS_STORE_NAME),{getActivePlugins:o}=e(d.PLUGINS_STORE_NAME),{general:c={}}=t("general"),m=o(),n=e(d.ONBOARDING_STORE_NAME).getPaymentGatewaySuggestions().reduce((e,t)=>{const{id:o}=t;return e[o]=!0,e},{}),r=e(d.ONBOARDING_STORE_NAME).getTaskLists();return{activePlugins:m,countryCode:Object(b.b)(c.woocommerce_default_country),paymentGatewaySuggestions:n,taskLists:r}}))(y)}}]);