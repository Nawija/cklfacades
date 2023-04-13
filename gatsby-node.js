const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryResults = await graphql(`
        {
            allDatoCmsAboutArticle {
                nodes {
                    slug
                    header
                    description
                    img {
                        gatsbyImageData
                        alt
                    }
                    date
                }
            }
        }
    `);
    {
    }

    const articleTemplate = path.resolve(`./src/templates/article.js`);

    queryResults.data.allDatoCmsAboutArticle.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: articleTemplate,
            context: {
                slug,
            },
        });
    });
};

exports.onPostBuild = async function ({ cache, graphql }, { query }) {
    const cacheKey = "some-key-name"
    const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000 // 86400000
    let obj = await cache.get(cacheKey)
  
    if (!obj) {
      obj = { created: Date.now() }
      const data = await graphql(query)
      obj.data = data
    } else if (Date.now() > obj.lastChecked + twentyFourHoursInMilliseconds) {
      /* Reload after a day */
      const data = await graphql(query)
      obj.data = data
    }
  
    obj.lastChecked = Date.now()
  
    await cache.set(cacheKey, obj)
  }
