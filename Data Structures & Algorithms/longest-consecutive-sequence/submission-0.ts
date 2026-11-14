class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let longestConsecutiveLength = 0;
        const numsSet = new Set<number>(nums);

        for (const num of numsSet) {
            if (!numsSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;
                while (numsSet.has(currentNum + 1)) {
                    currentStreak += 1;
                    currentNum += 1;
                }
                longestConsecutiveLength = Math.max(longestConsecutiveLength, currentStreak);
            }
        }
        return longestConsecutiveLength;
    }
}
