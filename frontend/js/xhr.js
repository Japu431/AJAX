const xhr = new XMLHttpRequest();
var document;

xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document = xhr.response;
    document = JSON.parse(document);
    console.log(document);
  } else {
    console.log({ message: "Error not found API" });
  }
};

var method = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

if (xhr.statusText == method.GET) {
  console.log("METHOD GET");
}

xhr.send();
