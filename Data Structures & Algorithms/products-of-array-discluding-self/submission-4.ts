class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefixArray: number[] = [];
        let suffixArray: number[] = new Array(nums.length).fill(1);
        let exceptSelfProductArray: number[] = new Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefixArray.push(1);
            } else {
                prefixArray.push((nums[i - 1] ?? 1) * (prefixArray[i - 1] ?? 1));
            }
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                suffixArray[i] = 1;
            } else {
                suffixArray[i] = (nums[i + 1] ?? 1) * (suffixArray[i + 1] ?? 1);
            }
            exceptSelfProductArray[i] = suffixArray[i]! * prefixArray[i]!;
        }
        return exceptSelfProductArray;
    }
}
