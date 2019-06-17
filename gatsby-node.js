/* 
  the destructured argument ({ actions: { createPage }})
  is the same as 
  exports.createPages = (argument) => {
    const createPage = argument.actions.createPage
*/
exports.createPages = ({ actions: { createPage } }) => {
  const meetups = [
    {
      group: "WordPress-Orlando",
      title: "Tool Time! Showcasing the Tools That Make Us Work",
    },
    { group: "ONETUG", title: "Intro to C# for the JS Dev" },
  ]
  meetups.forEach(meetup => {
    createPage({
      path: `/meetups/${meetup.group.toLowerCase()}`,
      component: require.resolve("./src/templates/meetup"),
      context: { meetup },
    })
  })
}
