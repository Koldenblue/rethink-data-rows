const data = [];
const fs = require('fs');

const create = async () => {
   for (let i = 0; i < 1000; i++) {
    data.push('mockData' + i)
}
    fs.writeFile("mockData.json", JSON.stringify(data, null, 2), err => console.log(err || "Success!"))
}
create();