const jsonData = '{"name": "sadegh", "email": "sadegh.source.code@gmail.com"}';

const jsonObject = JSON.parse(jsonData);

console.log(jsonObject.name, jsonObject.email);


const objectUser = {
    name: 'sadegh',
    email: 'sadegh.source.code@gmail.com'
}

const jsonString = JSON.stringify(objectUser);

console.log(jsonString);