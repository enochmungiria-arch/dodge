
const requestOptions = {
  method: "GET",
  redirect: "follow"
};
/*
fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));



  

  code without a promise
  */

  let flow="This flow";
  console.log("20:",flow)
  let result=fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
 console.log("25:",flow)

 console.log(result)