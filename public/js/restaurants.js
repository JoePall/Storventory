$(document).ready(() => {
  console.log("init");
  // eslint-disable-next-line prettier/prettier
  $("[data-toggle=\"tooltip\"]").tooltip();
  // Append table with add row form on add new button click
  $(".submit").click(event => {
    event.preventDefault();
    console.log("submit");
    const name = $("#name");
    const location = $("#location");
    if (!name || !location) {
      return;
    }
    console.log(name);
    console.log(location);
    $.post("/api/restaurant", {
      name: name.val().trim(),
      location: location.val().trim()
    })
      .then(() => {
        console.log(".then");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  });
  // Add row on add button click
  $(document).on("click", ".add", function() {
    let empty = false;
    const input = $(this)
      .parents("tr")
      // eslint-disable-next-line prettier/prettier
      .find("input[type=\"text\"]");
    input.each(function() {
      if (!$(this).val()) {
        $(this).addClass("error");
        empty = true;
      } else {
        $(this).removeClass("error");
      }
    });
    $(this)
      .parents("tr")
      .find(".error")
      .first()
      .focus();
    if (!empty) {
      input.each(function() {
        $(this)
          .parent("td")
          .html($(this).val());
      });
      $(this)
        .parents("tr")
        .find(".add, .edit")
        .toggle();
      $(".add-new").removeAttr("disabled");
    }
  });
  // Edit row on edit button click
  $(".submit-edit").click(event => {
    event.preventDefault();
    console.log("edit");
    const name = $("#name");
    const location = $("#location");
    if (!name || !location) {
      return;
    }
    console.log(name);
    console.log(location);
    $.ajax({
      method: "PUT",
      url: "/api/restaurant/",
      body: {
        name: name.val().trim(),
        location: location.val().trim()
      }
    }).then(() => {
      console.log(".then");
      window.location.reload();
    });
  });
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
$(document).on("click", ".delete", handleDeleteRestaurant);

function deleteRestaurant(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/restaurant/" + id
  }).then(() => {
    console.log(".then");
    window.location.reload();
  });
}

function handleDeleteRestaurant() {
  deleteRestaurant($(this).attr("data-id"));
}
