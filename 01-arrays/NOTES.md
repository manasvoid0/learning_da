# Arrays 📦

## What is an Array?
An array is an ordered collection of values stored in a contiguous block of memory.
Each value has an **index** (position), starting at `0`.

```js
const nums = [10, 20, 30, 40];
//             0   1   2   3   <- indexes
nums[0]; // 10  (first element)
nums[3]; // 40  (last element)
nums.length; // 4
```

## Why Arrays Matter
They are the most fundamental data structure. Most other structures (stacks,
queues, heaps, hash maps) are built on top of arrays.

## Time Complexity (memorize these)
| Operation                  | Time  | Why |
|----------------------------|-------|-----|
| Access by index `nums[i]`  | O(1)  | Direct memory jump |
| Update `nums[i] = x`       | O(1)  | Direct memory jump |
| Search (unsorted)          | O(n)  | Must check each element |
| Push/pop at END            | O(1)  | No shifting needed |
| Shift/unshift at START     | O(n)  | Every element moves |
| Insert/delete in MIDDLE    | O(n)  | Elements shift over |

## Common JavaScript Array Methods
```js
const a = [1, 2, 3];
a.push(4);        // [1,2,3,4]   add to end
a.pop();          // [1,2,3]     remove from end
a.unshift(0);     // [0,1,2,3]   add to start (slow, O(n))
a.shift();        // [1,2,3]     remove from start (slow, O(n))
a.map(x => x*2);  // [2,4,6]     transform each
a.filter(x => x>1); // [2,3]     keep matching
a.reduce((s,x) => s+x, 0); // 6  combine into one value
a.indexOf(2);     // 1           find position
a.includes(2);    // true        does it exist?
a.slice(0, 2);    // [1,2]       copy a part (non-mutating)
a.splice(1, 1);   // removes 1 element at index 1 (mutating)
```

## Key Patterns You'll Use Constantly
1. **Two Pointers** — one pointer at each end, move toward middle.
2. **Sliding Window** — a moving range over the array (subarrays/substrings).
3. **Hash Map lookup** — trade memory for speed (O(n) -> O(1) lookups).
4. **Prefix Sum** — precompute running totals for fast range queries.

See the solved problems in this folder to see these in action.
