let blogs = [];

function addBlog(event) {
  event.preventDefault();
  let project = document.getElementById("input-project").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;
  let nodejs = document.getElementById("nodejs").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let vuejs = document.getElementById("vuejs").checked;
  let python = document.getElementById("python").checked;
  let start_date = document.getElementById("input-startdate").value;
  let end_date = document.getElementById("input-enddate").value;

  validation(project, description, image);
  image = URL.createObjectURL(image[0]);
  if (nodejs == true) {
    nodejs = document.getElementById("nodejs").value;
  } else {
    nodejs = "";
  }
  if (reactjs == true) {
    reactjs = document.getElementById("reactjs").value;
  } else {
    reactjs = "";
  }
  if (vuejs == true) {
    vuejs = document.getElementById("vuejs").value;
  } else {
    vuejs = "";
  }
  if (python == true) {
    python = document.getElementById("python").value;
  } else {
    python = "";
  }
  let blog = {
    project: project,
    description: description,
    image: image,
    nodejs: nodejs,
    reactjs: reactjs,
    vuejs: vuejs,
    python: python,
    start_date: start_date,
    end_date: end_date,
  };
  blogs.push(blog);
  renderBlog();
}

function validation(project, description, image) {
  if (project == "") {
    return alert("isikan form Project");
  } else if (description == "") {
    return alert("isikan deskripsi");
  } else if (image.length == 0) {
    return alert("isikan gambar");
  }
}

function renderBlog() {
  document.getElementById("blogs").innerHTML = `
  <div class="box-blog1">
    <img
      src="./assets/img/orang.jfif"
      class="image"
      alt=""
    /> 
    <a href="./detail.html">
    <h3>Judul</h3>
    </a>
    <h3>durasi: 3 Bulan</h3>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, non.
      Dolores molestias pariatur, nobis consequatur quis qui? Illo, sed
      possimus?
    </p>
    <i class="fa-brands fa-node-js icon-size"></i>
    <i class="fa-brands fa-react icon-size"></i>
    <div class="button-group">
      <div class="button-child">
        <button class="button-edit">Edit</button>
      </div>
      <div class="button-child">
        <button class="button-delete">Delete</button>
      </div>
    </div>
  </div>`;

  for (let i in blogs) {
    document.getElementById("blogs").innerHTML += `
    <div class="box-blog1">
      <img
        src="${blogs[i].image}"
        class="image"
        alt=""
      /> 
      <a href="./detail.html">
      <h3>${blogs[i].project}</h3>
      </a>
      <p>posted: ${getDate(blogs[i].start_date, blogs[i].end_date)}</p>
      <p>
        ${blogs[i].description}
      </p>
      <i class="${blogs[i].nodejs}"></i>
      <i class="${blogs[i].reactjs}"></i>
      <i class="${blogs[i].vuejs}"></i>
      <i class="${blogs[i].python}"></i>
      <div class="button-group">
        <div class="button-child">
          <button class="button-edit">Edit</button>
        </div>
        <div class="button-child">
          <button class="button-delete">Delete</button>
        </div>
      </div>
    </div>
        `;
  }
}

function getDate(star_date, end_date){
  let stardate= new Date(star_date);
  let enddate = new Date(end_date);
  let posted = enddate - stardate;
  let millisecond = 1000; // hitungan 1000 milliSecond dalam 1 detik
  let second = 3600; // Hitungan 1 jam sama dengan 3600 detik 
  let hour =24; // Hitungan jam dalam 1 hari 
  let day= Math.floor(posted/(millisecond * second * hour));
  let week = Math.floor(day/7);
  let month = Math.floor(day/30);

  if (day > 0) {
    return `${day} day ago`;
  }else if (week > 0){
    return `${minggu} week ago`;
  }else if (month > 0) {
    return `${month} month ago`;
  }
}