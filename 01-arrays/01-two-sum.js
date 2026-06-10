/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 *
 * Given an array `nums` and a number `target`, return the INDEXES of the two
 * numbers that add up to target. Exactly one solution exists; can't reuse same element.
 *
 * Example:
 *   nums = [2, 7, 11, 15], target = 9
 *   2 + 7 = 9  ->  return [0, 1]
 */

// ---------------------------------------------------------------------------
// APPROACH 1: Brute force — try every pair.
// For each number, look at every number after it.
// Time: O(n^2)  | Space: O(1)
// ---------------------------------------------------------------------------
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // no pair found
}

// ---------------------------------------------------------------------------
// APPROACH 2: Hash Map (the optimal, interview-expected answer).
// Idea: as we scan, for each number `n` we ask "have I already seen
// the number I NEED (target - n)?" A hash map gives that answer in O(1).
// Time: O(n)  | Space: O(n)
// ---------------------------------------------------------------------------
function twoSum(nums, target) {
  const seen = new Map(); // value -> index where we saw it

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]; // the partner that would complete the pair
    if (seen.has(need)) {
      return [seen.get(need), i]; // found it
    }
    seen.set(nums[i], i); // remember current number for future lookups
  }
  return [];
}

// ---- quick self-tests (run: node 01-two-sum.js) ----
console.log(twoSum([2, 7, 11, 15], 9));   // [0, 1]
console.log(twoSum([3, 2, 4], 6));        // [1, 2]
console.log(twoSum([3, 3], 6));           // [0, 1]
console.log(twoSumBrute([2, 7, 11, 15], 9)); // [0, 1]

module.exports = { twoSum, twoSumBrute };
