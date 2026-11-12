class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefixArray: number[] = [];
        let suffixProduct: number = 1;
        const exceptSelfProductArray: number[] = new Array(nums.length).fill(1);

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefixArray.push(1);
            } else {
                prefixArray.push(nums[i - 1]! * prefixArray[i - 1]!);
            }
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                suffixProduct = 1;
            } else {
                suffixProduct = nums[i + 1]! * suffixProduct;
            }
            exceptSelfProductArray[i] = suffixProduct * prefixArray[i]!;
        }
        return exceptSelfProductArray;
    }
}
