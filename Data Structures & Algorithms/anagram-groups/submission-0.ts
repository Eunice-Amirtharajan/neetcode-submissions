class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let response: string[][] = [];
        let labelMap = new Map<string, string[]>();
        for (const word of strs) {
            const sortedInput = word.split("").sort().join("");

            if (labelMap.has(sortedInput)) {
                const labelValues: string[] = labelMap.get(sortedInput) ?? [];
                labelValues.push(word);
                labelMap.set(sortedInput, labelValues);
            } else {
                labelMap.set(sortedInput, [word]);
            }
        }
        response = [...labelMap.values()];
        return response;
    }
}
