class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let leftPointer = 0;
        let rightPointer = 1;

        while (leftPointer < rightPointer && rightPointer < nums.length) {
            if (nums[rightPointer] !== 0 && nums[leftPointer] === 0) {
                [nums[leftPointer], nums[rightPointer]] = [nums[rightPointer]!, nums[leftPointer]!];
                rightPointer++;
                leftPointer++;
            } else if (nums[leftPointer] !== 0) {
                rightPointer++;
                leftPointer++;
            } else {
                rightPointer++;
            }
        }
    }
}
