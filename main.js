!function () {
  if (Math.random() < 1) {
    var request = new XMLHttpRequest();

    request.addEventListener('load', function (e) {
      console.log(this.response);
    });

    request.addEventListener('error', function (e) {
      console.dir(e);
      console.dir(this);
    });

    request.open('GET', 'http://127.0.0.1:3001/api/describe');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();

  }
}();
