class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        let magazineMap = new Map<string, number>();
        for (let magazineChar of magazine) {
            magazineMap.set(magazineChar, (magazineMap.get(magazineChar) ?? 0) + 1);
        }
        for (const ransomNoteChar of ransomNote) {
            const ransomNoteCountCheck = magazineMap.get(ransomNoteChar);
            if (!ransomNoteCountCheck) return false;
            magazineMap.set(ransomNoteChar, ransomNoteCountCheck - 1);
        }
        return true;
    }
}
