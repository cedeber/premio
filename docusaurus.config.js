/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Premio",
    organizationName: "cedeber",
    projectName: "premio",
    url: "https://cedeber.github.io",
    baseUrl: "/premio/",
    trailingSlash: false,
    tagline: "Web startup with WebAssembly.",
    plugins: [
        "docusaurus-plugin-sass",
        [
            "@docusaurus/plugin-content-docs",
            {
                routeBasePath: "/",
            },
        ],
    ],
    themes: ["@docusaurus/theme-classic"],
    themeConfig: {
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: "Premio",
            items: [
                {
                    href: "https://cedeber.github.io/premio/",
                    label: "Example",
                    position: "right",
                },
                {
                    href: "https://github.com/cedeber/premio",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
    },
};
