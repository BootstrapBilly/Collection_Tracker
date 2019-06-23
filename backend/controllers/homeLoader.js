exports.getHomePage = (request, response) => {

    response.render("home.ejs", {pageTitle : "home"});

}

exports.postRequestHandler = (request, response) => {

    console.log(request.body);

    response.redirect("/");

}