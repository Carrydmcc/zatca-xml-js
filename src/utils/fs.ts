import fs from "fs/promises";
import path from "path";

export const writeFile = async (filePath: string, content: string) => {
    try {
        await fs.writeFile(filePath, content)
    } catch (err: any) {
        if (err.code === 'ENOENT') {
            await fs.mkdir(path.dirname(filePath), {recursive: true})

            return fs.writeFile(filePath, content)
        }

        throw err
    }
}