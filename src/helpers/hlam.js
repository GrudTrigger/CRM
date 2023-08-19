// import { serverPath } from "./variables";
//
// const editApplications = (event) => {
//   event.preventDefault();
//   setData(() => {
//     return {
//       ...data,
//       [event.target.email]: event.target.value,
//       [event.target.name]: event.target.value,
//       [event.target.phone]: event.target.value,
//       [event.target.product]: event.target.value,
//       [event.target.status]: event.target.value,
//     };
//   });
// };
//
// const submitForm = (event) => {
//   event.preventDefault();
//   console.log(data);
//   fetch(serverPath + "applications/" + id, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   }).then(() => {
//     console.log("edit app");
//     navigate("/table");
//   });
// };
//
// const deleteApplications = (event) => {
//   event.preventDefault();
//   fetch(serverPath + "applications/" + id, {
//     method: "DELETE",
//   }).then(() => {
//     navigate("/table");
//   });
// };
