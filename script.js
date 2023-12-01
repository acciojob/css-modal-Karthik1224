//your JS code here. If required.
 var openModal = document.getElementById("openModal");
           var closeModal = document.getElementsByClassName("close-modal")[0];
           var modal = document.getElementsByClassName("modal")[0];
           openModal.onclick = function()
           {
              modal.style.display = "block";
           }
           closeModal.onclick = function()
           {
              modal.style.display = "none";
           }
           