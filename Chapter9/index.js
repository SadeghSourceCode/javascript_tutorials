let data;

function fetchData(callBack) {
    setTimeout(() => {
        data = {
            message: "Data Fetched!"
        }
        callBack(data)
    }, 2000);
}

function displayData(data) {
    console.log(data.message);
}

fetchData(displayData);