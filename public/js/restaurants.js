$(document).ready(() => {
  // eslint-disable-next-line prettier/prettier
  $("[data-toggle=\"tooltip\"]").tooltip();
  const actions = $("table td:last-child").html();
  // Append table with add row form on add new button click
  $(".add-new").click(function() {
    $(this).attr("disabled", "disabled");
    const index = $("table tbody tr:last-child").index();
    const row =
      "<tr>" +
      // eslint-disable-next-line quotes
      '<td><input type="text" class="form-control" name="name" id="name"></td>' +
      // eslint-disable-next-line prettier/prettier
      "<td><input type=\"text\" class=\"form-control\" name=\"department\" id=\"department\"></td>" +
      "<td>" +
      actions +
      "</td>" +
      "</tr>";
    $("table").append(row);
    $("table tbody tr")
      .eq(index + 1)
      .find(".add, .edit")
      .toggle();
    // eslint-disable-next-line prettier/prettier
    $("[data-toggle=\"tooltip\"]").tooltip();
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
  $(document).on("click", ".delete", function() {
    $(this)
      .parents("tr")
      .remove();
    $(".add-new").removeAttr("disabled");
  });
});
