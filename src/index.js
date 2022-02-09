// // Hot reloading
// //import * as _unused from "raw-loader!./index.ejs";
// // TODO: disable before publishing

// import Example from "./diagrams/svelte-example.svelte";

// // lazily initialize any diagram below the fold. E.G:
// const exampleTag = document.getElementById("svelte-example-dfigure");
// let example;
// exampleTag.addEventListener("ready", () => {
// 	const target = exampleTag.querySelector("#svelte-example-target");
// 	example = new Example({ target });
// });
// const PORT = process.env.PORT || 80;
// var server = app.listen(PORT, function() {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("server is listening at http://%s:%s", host, port);
// });
app.listen(process.env.PORT || 8000, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });