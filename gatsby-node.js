/* 
  the destructured argument ({ actions: { createPage }})
  is the same as 
  exports.createPages = (argument) => {
    const createPage = argument.actions.createPage
*/
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    query {
      allMeetupsJson {
        nodes {
          title
          group
        }
      }
    }
  `)
  data.allMeetupsJson.nodes.forEach(node => {
    const { group, title } = node
    createPage({
      path: `/meetups/${group.toLowerCase()}`,
      component: require.resolve("./src/templates/meetup"),
      context: { title },
    })
  })
}
