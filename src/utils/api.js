export async function getData() {
  //fetch recuperation données dans data.json
  const response = await fetch("/data/data.json");
  //transforme reponse en json
  const data = await response.json();
  //retourne les datas
  return data;
}
