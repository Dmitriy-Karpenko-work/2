const a = fetch(
  "api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

console.log(a);
