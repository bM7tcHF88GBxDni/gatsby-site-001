const fetch = require(`node-fetch`);
//do all our API fetching in here
// and then "supply data to the createPage action within the createPages API"
//have to use CommonJS here...
exports.createPages = async ({ actions: { createPage } }) => {
  //fetch in here
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/gengar");
  let data = await response.json();

  data = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
  };
  console.log(data);

  //use Gatsby's built in createPage function
  //create a page that lists all the pokemon using the data we have fetched from the api
  createPage({
    path: "/pokemon",
    component: require.resolve("./src/templates/gengar.js"),
    context: { data },
  });
};
