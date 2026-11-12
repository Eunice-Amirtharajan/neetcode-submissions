class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixArray: number[] = [];
        let suffixArray: number[] = [];
        let exceptSelfProductArray: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefixArray.push(1);
            } else {
                prefixArray.push((nums[i - 1] ?? 0) * (prefixArray[i - 1] ?? 0));
            }
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                suffixArray[i] = 1;
            } else {
                suffixArray[i] = (nums[i + 1] ?? 0) * (suffixArray[i + 1] ?? 0);
            }
        }

        exceptSelfProductArray = prefixArray.map(
            (prefixItem, index) => (suffixArray[index] ?? 0) * prefixItem,
        );
        return exceptSelfProductArray;
    }
}
