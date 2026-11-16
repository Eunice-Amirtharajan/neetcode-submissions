class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const formattedInput = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        let leftPointer = 0;
        let rightPointer = formattedInput.length - 1;

        while (leftPointer < rightPointer) {
            if (formattedInput[leftPointer] !== formattedInput[rightPointer]) {
                return false;
            }
            leftPointer++;
            rightPointer--;
        }

        return true;
    }
}
