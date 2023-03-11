import fs from 'fs'

export default async function convertCSVtoObject(filePath) {
    const data = await fs.promises.readFile(filePath, 'utf8')
    const rows = data.split('\r\n')
    const output = []
    for (let i = 1; i < rows.length; i++) {
        const [saiNum, ...flags] = rows[i].split(',')
        const record = {
            saiNum,
            flags,
        }
        output.push(record)
    }

    return output
}
