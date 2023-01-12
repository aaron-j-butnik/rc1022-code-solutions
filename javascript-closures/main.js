function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };

}

const medicalSchool = graduate('M.D');
const lawSchool = graduate('Esq.');

medicalSchool('Aaron Butnik');
lawSchool('Aaron Butnik');

console.log(medicalSchool('Aaron Butnik'));
console.log(lawSchool('Aaron Butnik'));
