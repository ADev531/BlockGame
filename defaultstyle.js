var style = '<nav class="navbar navbar-expand-lg bg-body-tertiary"> \
<div class="container-fluid"> \
  <a class="navbar-brand" href="#">BlockGame</a> \
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> \
    <span class="navbar-toggler-icon"></span> \
  </button> \
  <div class="collapse navbar-collapse" id="navbarNav">\
    <ul class="navbar-nav">\
      <li class="nav-item">\
        <a class="nav-link active" aria-current="page" href="#">Home</a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link" href="download.html">Downloads</a>\
      </li>\
      <li class="nav-item">\
        <a class="nav-link" href="buy.html">Pricing</a>\
      </li>\
    </ul>\
  </div>\
</div>\
</nav>'

var element = document.createElement("nav")
element.innerHTML = style
document.append(element)