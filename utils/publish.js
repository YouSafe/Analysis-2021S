var ghpages = require("gh-pages");

ghpages.publish("docs/.vuepress/dist", { history: false, dotfiles: true }, (err) => {
  if (err) console.error(err);
  else console.log("Published to GitHub");
});