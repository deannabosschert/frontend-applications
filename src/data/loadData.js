loadData(endpoint, query_IDs)

function loadData(endpoint, query_IDs) {
  const endpoint = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-19/sparql"
  const querySource_ID = endpoint + "?query=" + encodeURIComponent(query_IDs) + "&format=json"

  fetch(querySource_ID)
    .then(res => res.json())
    .then(json => {
      return json
      console.log(json.results.bindings)
    })
}


// runQuery(url, query)
//      function runQuery(url, query){
//          fetch(url+ "?query=" + encodeURIComponent(query) + "&format=json")
//          .then(res => res.json())
//          .then(json => {
//              console.log(json.results.bindings)
//              return json
//          })
//          .then(res => {
//              console.log(self);
//              self.items = res.results.bindings;
//
//              //code van Wiebe
//              self.forEach(function(i){
//                  i.img.value = i.img.value.replace("http", "https");
//              })
//          })
//          .catch(err => console.log(err));
//      }
