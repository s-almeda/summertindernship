const request = async () => {
  const response = await fetch('https://5dff3b17.ngrok.io', {mode: 'cors'});
  const applicantsJson = await response.json();
  console.log(applicantsJson);
  return applicantsJson
}
request();