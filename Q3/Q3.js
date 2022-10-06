const fs = require('fs')
const process = require('process');
const dir = './Logs'
if (!fs.existsSync(dir)) {
    fs.mkdir(dir, err => {
        if (err) {
            throw err
        }

        process.chdir(dir)
        for (let i = 0; i < 10; i++) {
            fs.writeFile(`log${i}.txt`, `Log file N${i + 1}`, function (err) {
                if (err) throw err;
                console.log(`log${i}.txt`);
            });
        }
    })
}
else {
    process.chdir(dir)
    for (let i=0; i<10;i++) {
        fs.unlink(`log${i}.txt`, (err) => {
                if (err) {
                    throw err;
                }
                console.log(`Delete Files...log${i}.txt`);
            }
        );}
    process.chdir('../')
    fs.rmdir(dir, (err) => {
        if (err) {
            return console.log("error occurred in deleting directory", err);
        }
        console.log("Directory deleted successfully");
    });
}