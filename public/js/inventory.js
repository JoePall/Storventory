$(document).ready(() => {
  // eslint-disable-next-line prettier/prettier
  $("[data-toggle=\"tooltip\"]").tooltip();
  // Append table with add inventory row on add new button click
  $(".submit").click(event => {
    event.preventDefault();
    const name = $("#name");
    // const description = $("#description");
    const quantity = $("#quantity");
    const stockAmount = $("#stockAmount");
    const stockNumber = $("#stockNumber");
    const restautantid = $("#restautantid");
    if (!name || !quantity || !stockAmount || !stockNumber) {
      return;
    }
    $.post("/api/inventory", {
      name: name.val().trim(),
      // description: description.val().trim(),
      quantity: quantity.val().trim(),
      stockAmount: stockAmount.val().trim(),
      stockNumber: stockNumber.val().trim(),
      restaurantid: restautantid.val().trim()
    })
      .then(() => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  });
  // Edit row on edit button click
  $(document).on("click", ".edit", function() {
    $(this)
      .parents("tr")
      .find("td:not(:last-child)")
      .each(function() {
        $(this).html(
          // eslint-disable-next-line prettier/prettier
          "<input type=\"text\" class=\"form-control\" value=\"" +
            $(this).text() +
            // eslint-disable-next-line prettier/prettier
            "\">"
        );
      });
    $(this)
      .parents("tr")
      .find(".add, .edit")
      .toggle();
    $(".add-new").attr("disabled", "disabled");
  });

  // Delete row on delete button click
  $(document).on("click", ".delete", handleDeleteItem);

  function deleteItem(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/inventory/" + id
    }).then(() => {
      console.log(".then");
      window.location.reload();
    });
  }

  function handleDeleteItem() {
    deleteItem($(this).attr("data-id"));
  }
  $(".search").click(event => {
    event.preventDefault();
    const search = $("#searchinput");
    console.log(".search");
    if (!search) {
      return;
    }
    //&filter.locationId={{LOCATION_ID}}
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://cors-anywhere.herokuapp.com/https://api.kroger.com/v1/products?filter.term=" +
        search.val().trim(),
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer:storventory-8e29a856ecb3dd5b7bf7496f65dedfc63168613925626176871"
      }
    };
    $.ajax(settings).done(response => {
      console.log(response);
    });
  });
});
