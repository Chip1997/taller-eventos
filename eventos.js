const div = document.querySelector("#divBtn");

div.addEventListener("click", () => {alert("Hola! Soy el div");
});

document.getElementById('hiBtn').addEventListener('click', function(event) {
    event.stopPropagation();
    {alert('¡Hola!');
}
  });