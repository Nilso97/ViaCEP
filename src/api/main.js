const zipCode = document.querySelector("#cep");

const showData = (result) => {
  for (const field in result) {
    if (document.querySelector("#" + field)) {
      document.querySelector("#" + field).value = result[field];
    }
  }
};

zipCode.addEventListener("blur", (e) => {
  let search = zipCode.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    })
    .catch((err) => {
      console.log({ error: err.message });
    });
});
