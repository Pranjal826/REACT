const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  if(age>=18){
    console.log("Eligible")
  }

}