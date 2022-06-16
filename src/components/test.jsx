axios({
  method: "get",
  url: "http://localhost:3000/ownerPanel",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});

const handleOwnerPanelApartment = (e) => {
  e.preventDefault();
  axios
    .get("http://localhost:3001/ownerPanel")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
