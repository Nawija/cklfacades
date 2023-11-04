/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    siteMetadata: {
        title: ``,
        description: `Technical and design services to the building envelope and facade industry`,
        author: `Seovileo`,
        siteUrl: `https://seovileo.pl/`,
        titlePL: ``,
        descriptionPL: `Usługi techniczne i projektowe dla przemysłu przegród budowlanych i elewacji`,
        authorPL: `Seovileo`,
        siteUrlPL: `https://seovileo.pl/`,
        showSite: true,
    },
    plugins: [
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: `8e49b0a85e31a25874cd0ce5eb14f2`,
                environment: `main`,
                previewMode: false,
                disableLiveReload: false,
                pageSize: 500,
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Rajdhani`,
                        file: `https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap`,
                    },
                ],
            },
        },
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `CKL-Facades`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0C0904`,
                theme_color: `#0C0904`,
                display: `standalone`,
                icon: `src/assets/logoBrowser.png`,
            },
        },
    ],
};
