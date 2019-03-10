const request = async () => {
  const response = await fetch('http://localhost:5000/', {mode: 'cors'});
  const applicantsJson = await response.json();
  console.log(applicantsJson);
  console.log();
  return applicantsJson[Symbol.iterator]();
}