/*
$("#boton").click(() => {
  var list = $("#lista");

  $.ajax({
    url: "http://localhost:5000/amigos",
    type: "GET",
    success: (data) => {
      for (let i = 0; i < data.length; i++) {
        list.append(
          <li>
            ${data[i].id} ${data[i].name}
          </li>
        );
      }
    },
  });
});
*/

/*
$("#search").click(() => {
  var id = $("#input").val();

  $.ajax({
    url: "http://localhost:5000/amigos/${id}",
    type: "GET",
    success: (data) => {
      $("#amigo").text(data.name);
    },
    error: () => {
      alert("Amigo no encontrado");
    },
  });
});
*/

/*
// misma estrucutura
$("#delete").click(() => {
  var idDelete = $("#inputDelete").val();
  //console.log(id)
  $.ajax({
    url: "",
    type: "DELETE",
  });
});
*/
