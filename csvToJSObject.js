import fs from 'fs'

const data = await fs.promises.readFile('./test.csv', 'utf8')

const rows = data.split('\r\n')

const headers = rows[0].split(',')

const output = []

for (let i = 1; i < rows.length; i++) {
    const [saiNum, ...flags] = rows[i].split(',')

    const record = {
        saiNum,
        flags,
    }

    output.push(record)
}

console.log(output)
