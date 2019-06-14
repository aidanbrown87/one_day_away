const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPosts = new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const regionPage = path.resolve('./src/templates/region-page.js')
    const countryPage = path.resolve('./src/templates/country-page.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    region
                    country
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        const locationsMap = posts.reduce((countryMap, post) => {
          const { region, country } = post.node.frontmatter
          const countryRegions = countryMap[country]

          if (countryRegions) {
            return {
              ...countryMap,
              [country]: [...new Set([...countryRegions, region])],
            }
          }

          return {
            ...countryMap,
            [country]: [region],
          }
        }, {})

        Object.entries(locationsMap).forEach(([country, regions]) => {
          const countryPathWithoutSpaces = country.replace(' ', '')
          console.log(`creating country page for ${countryPathWithoutSpaces}`)

          createPage({
            path: countryPathWithoutSpaces,
            component: countryPage,
            context: { country, regions },
          })

          regions.forEach(region => {
            const regionPathWithoutSpaces = `${country}/${region}`.replace(
              ' ',
              ''
            )
            console.log(`creating region page for ${regionPathWithoutSpaces}`)

            createPage({
              path: regionPathWithoutSpaces,
              component: regionPage,
              context: { region, country },
            })
          })
        })
      })
    )
  })

  return Promise.all([blogPosts])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
