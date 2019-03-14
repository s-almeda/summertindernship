const request = async () => {
  const response = await fetch('https://a0810804.ngrok.io', {mode: 'cors'});
  const applicantsJson = await response.json();
  console.log(applicantsJson);
  return applicantsJson;

}