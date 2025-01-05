import * as fs from 'fs';
import * as path from 'path';

class JsonUtils {
    /**
     * Reads and parses the JSON file.
     * @param filePath The path to the JSON file.
     * @returns The parsed JSON content | undefined.
     * @throws Error if the file cannot be read or parsed.
     */
    static read(filePath) {
        try {
            const resolvedPath = path.resolve(filePath);
            const fileContent = fs.readFileSync(resolvedPath, 'utf-8');
            return JSON.parse(fileContent);
        } catch (error) {
            console.log(`Failed to read or parse JSON file: ${error.message}`)
            return undefined;
        }
    }

    /**
     * Writes content to the JSON file.
     * @param filePath The path to the JSON file.
     * @param data The content to write.
     * @returns 1 (Success) | 0 (Fail).
     * @throws Error if the file cannot be written.
     */
    static write(filePath, data) {
        try {
            const resolvedPath = path.resolve(filePath);
            const previousData = this.read(filePath);
            fs.writeFileSync(resolvedPath, JSON.stringify({...previousData, ...data}, null, 2), 'utf-8');
            return true;
        } catch (error) {
            console.log(`Failed to write JSON file: ${error.message}`)
            return false;
        }
    }
}

export default JsonUtils;