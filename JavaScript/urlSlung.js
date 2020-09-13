function urlSlug(title) {
return title
        .split(/\W/)
        .filter(obj=> {
          return obj!== "";
        })
        .join("-")
        .toLowerCase();
}
