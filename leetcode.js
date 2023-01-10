function subsets(nums) {
  const result = [[]];

  function dfs(i0, cur) {
    for (let i = i0; i < nums.length; i++) {
      const res = [...cur, nums[i]];
      result.push(res);
      dfs(i + 1, res);
    }
  }

  dfs(0, []);
  return result;
}

function subsets(nums) {
  const result = [];
}

// subsets([1, 2, 3]);

function permute(str) {
  if (str.length <= 1) return str;

  let result = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingCharsPermuted = permute(remainingChars);
    for (let j = 0; j < remainingCharsPermuted.length; j++) {
      const permutation = currentChar + remainingCharsPermuted[j];
      result.push(permutation);
    }
  }
  return result;
}

// console.log(permute("ABCD"));

function permute(nums) {
  if (nums.length <= 1) return [nums];

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingPermuted = permute(remaining);
    for (let rp of remainingPermuted) {
      const permutation = [current, ...rp];
      result.push(permutation);
    }
  }

  return result;
}

// console.log(permute([1, 2, 3, 4]));

function lengthOfLongestSubstring(s) {
  let l = 0;
  let r = 0;
  let longest = 0;

  seen = {};

  while (r < s.length) {
    if (s[r] in seen) {
      l = Math.max(seen[s[r]] + 1, l);
    }

    seen[s[r]] = r;
    longest = Math.max(longest, r - l + 1);
    r += 1;
  }

  return longest;
}

// console.log(lengthOfLongestSubstring("pwwkew"));

const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  const visited = {};

  let maxCount = 0;
  let maxCharFreq = 0;
  while (right < s.length) {
    visited[s[right]] = (visited[s[right]] ?? 0) + 1;
    maxCharFreq = Math.max(maxCharFreq, visited[s[right]]);

    if (right - left + 1 - maxCharFreq > k) {
      visited[s[left]] = visited[s[left]] - 1;
      left++;
    }

    maxCount = Math.max(maxCount, right - left + 1);
    right++;
  }

  return maxCount;
};

// console.log(characterReplacement("AABABBA", 2));

var checkInclusion = function (s1, s2) {
  const len1 = s1.length,
    len2 = s2.length;
  if (len1 > len2) return false;

  const count = Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }
  if (!count.some((e) => e !== 0)) return true;

  for (let i = len1; i < len2; i++) {
    count[s2.charCodeAt(i) - 97]--;
    count[s2.charCodeAt(i - len1) - 97]++;
    if (!count.some((e) => e !== 0)) return true;
  }
  return false;
};

// console.log(checkInclusion("ab", "eidbaooo"));

var combinationSum = function (candidates, target) {
  const result = [];

  const sum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr);
  };

  const checkSum = (index, curr) => {
    for (let i = index; i < candidates.length; i++) {
      const newCombination = [candidates[i], ...curr];

      const total = sum(newCombination);
      if (total > target) continue;
      else if (total === target) result.push(newCombination);

      checkSum(i, newCombination);
    }
  };

  checkSum(0, []);

  return result;
};

// console.log(combinationSum([2,3,6,7], 7));

var subsetsWithDup = function (nums) {
  const result = [[]];

  const subset = (index, curr) => {
    for (let i = index; i < nums.length; i++) {
      if(i > index & (nums[i] == nums[i-1])) continue
      const newSubset = [...curr, nums[i]];
      result.push(newSubset);
      subset(i + 1, newSubset);
    }
  };

  nums = nums.sort((a,b) => a-b);
  subset(0, []);
  return result;
};
