class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let suffixProduct: number = 1;
        let prefixProduct: number = 1;
        const exceptSelfProductArray: number[] = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            prefixProduct = nums[i - 1]! * prefixProduct;
            exceptSelfProductArray[i] = prefixProduct;
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            suffixProduct = nums[i + 1]! * suffixProduct;
            exceptSelfProductArray[i] = suffixProduct * exceptSelfProductArray[i]!;
        }
        return exceptSelfProductArray;
    }
}
