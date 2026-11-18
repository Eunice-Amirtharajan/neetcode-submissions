class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;

        while (leftPointer < rightPointer) {
            const sum = numbers[leftPointer]! + numbers[rightPointer]!;
            if (sum === target) {
                return [leftPointer + 1, rightPointer + 1];
            } else if (sum > target) {
                rightPointer--;
            } else {
                leftPointer++;
            }
        }
        return [0, 0];
    }
}
