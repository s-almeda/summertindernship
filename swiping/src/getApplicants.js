ApplicantData = fetch('http://localhost:5000/', {mode: 'cors'}).then(function(response) {
    return response.text();
  }).then(function(text) {
    console.log('req sucessful', text);
  }).catch(function(error) {
    log('req failed', error);
  })