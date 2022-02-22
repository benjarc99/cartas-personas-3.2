const d = document;

const $template = d.querySelector("template").content,
  $fragment = d.createDocumentFragment(),
  $containerCards = d.querySelector(".container-cards");

console.log($template.querySelector(".img-card"));
fetch("https://reqres.in/api/users?per_page=12")
  .then((res) => (res.ok ? res.json() : Promise.reject(res)))
  .then((json) => {
    json.data.forEach((el) => {
      $template.querySelector(".img-card").setAttribute("src", `${el.avatar}`);
      $template.querySelector(
        "h4"
      ).textContent = `${el.first_name} ${el.last_name}`;
      $template.querySelector(".text-card").textContent = el.email;

      let aleatorio = Math.round(Math.random() * 4);
      if (aleatorio === 0) {
        $template.querySelector("button").innerHTML = `
        <i class="fa-solid fa-user-plus"></i> 
        Follow
        `;

        $template
          .querySelector("button")
          .style.setProperty("background-color", "rgb(40, 167, 71)");
      }
      if (aleatorio === 1) {
        $template.querySelector("button").innerHTML = `
        <i class="fa-solid fa-minus"></i>
        Unfollow
        `;

        $template
          .querySelector("button")
          .style.setProperty("background-color", "rgb(220, 53, 70)");
      }
      if (aleatorio === 2) {
        $template.querySelector("button").innerHTML = `
        <i class="fa-solid fa-user-plus"></i> 
        Add Friend
        `;

        $template
          .querySelector("button")
          .style.setProperty("background-color", "rgb(0, 122, 254)");
      }
      if (aleatorio === 3) {
        $template.querySelector("button").innerHTML = `
          <i class="fa-solid fa-plus"></i>
          Hire
        `;

        $template
          .querySelector("button")
          .style.setProperty("background-color", "rgb(50, 57, 63)");
      }
      if (aleatorio === 4) {
        $template.querySelector("button").innerHTML = `
        <i class="fa-solid fa-briefcase"></i>   
        View Proyect
        `;

        $template
          .querySelector("button")
          .style.setProperty("background-color", "rgb(0, 122, 254)");
      }

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $containerCards.appendChild($fragment);
  })
  .catch((err) => {
    let message = err.statusText || "Ocurrió un Error";
    $containerCards.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
  });
