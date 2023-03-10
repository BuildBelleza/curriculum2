// fetch("https://dog.ceo/api/breeds/list/all")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
const getAllBreeds = async () => {
  const x = await fetch("https://dog.ceo/api/breeds/list/all");
  const response = await x.json(); //is this the interpolation?
  const data = response.message;
  // console.log(data);
  return data;
};

async function readBreedData() {
  //you said you chose the async & await approach rather than the what_____approach, yesterday?
  const data = await getAllBreeds();
  // console.log(listOfBreedsObject);
  const breeds = Object.keys(data); //this is when the breed and square bracket are created from the data? what we see in the console window...
  // console.log(breeds);

  let emptyArray = [];

  breeds.forEach((breed) => {
    // console.log(data[breed]);
    // console.log(data[breed].length);
    if (data[breed].length < 1) {
      emptyArray.push(`${breed} - 1`);
    } else {
      emptyArray.push(`${breed} - ${data[breed].length}`);
    }
  });

  console.log(emptyArray);
}

readBreedData(); //this is calling the function? when you tell it to 'read', we are doing what...calling it?