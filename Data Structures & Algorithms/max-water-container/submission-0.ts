class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let bestArea = 0;
        let leftPointer = 0;
        let rightPointer = heights.length - 1;

        while (leftPointer < rightPointer) {
            const areaCheck =
                (rightPointer - leftPointer) *
                Math.min(heights[leftPointer]!, heights[rightPointer]!);
            bestArea = Math.max(bestArea, areaCheck);
            if (heights[leftPointer]! < heights[rightPointer]!) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
        return bestArea;
    }
}
