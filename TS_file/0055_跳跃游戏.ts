function canJump(nums: number[]): boolean {
    let restStepNum: number = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        if (!restStepNum) return false;
        restStepNum = Math.max(restStepNum - 1, nums[i]);
    }

    return true;
}