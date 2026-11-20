class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let leftPointer = 0;
        let rightPointer = 1;

        while (rightPointer < nums.length) {
            if (nums[leftPointer] === nums[rightPointer]) {
                rightPointer++;
            } else {
                nums[leftPointer + 1] = nums[rightPointer]!;
                leftPointer++;
                rightPointer++;
            }
        }
        return leftPointer + 1;
    }
}
