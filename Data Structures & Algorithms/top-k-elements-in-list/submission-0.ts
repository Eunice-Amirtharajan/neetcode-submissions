class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number, number>();
        for (const num of nums) {
            if (countMap.has(num)) {
                let count: number = countMap.get(num) ?? 0;
                countMap.set(num, count + 1);
            } else {
                countMap.set(num, 1);
            }
        }
        const sortedCount = new Map<number, number>(
            [...countMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k),
        );

        return [...sortedCount.keys()];
    }
}
