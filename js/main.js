function get() {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  const request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  const url = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&key=AIzaSyAOJey2cpa5GdTXRfU73ocrmeW188soOv8';
  request.open('GET', url, true);

  request.onload = function () {
      const data = JSON.parse(this.response);
      console.log(data);
  };

  // Send request
  request.send();
}
