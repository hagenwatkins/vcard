let section =document.querySelector('#section');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/hagenwatkins");
req.addEventListener("load", reqListener);
req.send();

function reqListener (response) {
  let data = JSON.parse(this.responseText);
  let html = `
  <section class ="section1">
  <h2> The Basics </h2>
    <p>Name: ${data.name}</p>
    <p>Github URL ${data.html_url}</p>
    <p>Company ${data.company}</p>
    <p>Website: ${data.blog}</p>
    <hr id ="line" width="1" size="130">
    </section>
    <section class = "section2">
      <h2> The Story </h2>
      <p>Bacon ipsum dolor amet filet mignon drumstick pig ball tip pancetta, porchetta pork loin salami kielbasa. T-bone pastrami salami boudin ground round cupim swine chuck venison. Turducken biltong tri-tip leberkas jowl venison cow chuck pork belly pork loin shank fatback beef sirloin brisket. Hamburger ground round meatball burgdoggen ham filet mignon. Boudin pork drumstick, ham hock biltong short ribs spare ribs venison strip steak ribeye brisket prosciutto burgdoggen salami. </p>
      <img src = "${data.avatar_url}" style="width:304px;height:228px;border-radius:50%;">
    </section>

    `;

  section.innerHTML = html;
  }
