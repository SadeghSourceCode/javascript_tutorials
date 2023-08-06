
function displayData() {
    let user = getUser();
    // debugger;
    let nameEl = document.getElementById('name');
    let addressEl = document.getElementById('address');

    changeData(user);

    nameEl.innerHTML = user.name;
    addressEl.innerHTML = user.address.city + ' - ' + user.address.street;
}

function getUser() {
    let user = {
        name: 'John',
        age: 20,
        address: {
            city: 'New York',
            street: ''
        }
    }
    return user;
}

function changeData(user) {
    user.address.city = 'Tehran';
    user.address.street = 'Vali ahd'
}

displayData();