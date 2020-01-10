// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      let id = $(this).data("id");
      let newDevour = $(this).data("newDevour");
  
      let newEatState = {
        devoured: newDevour
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed sleep to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        name: $("#burgerName").val().trim(),
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
            location.reload();

    
    });
  

  
  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      })
    

})

    })
})
  


  

 
  