let container = document.querySelector(".container");
let span = document.querySelector("span");
window.addEventListener("keypress", (event) => {
  console.log(event);
  span.style.display = "none";
  container.innerHTML = `
        <table class="table">
          <tr>
            <th>Key </th>
            <th>KeyCode </th>
            <th>Code</th>
          </tr>
          <tr>
            <td>${event.key === " "? 'Space':event.key}</td>
            <td>${event.keyCode}</td>
            <td>${event.code}</td>
          </tr>
</table>
    `;
});
