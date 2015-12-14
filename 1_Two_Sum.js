/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
	var result =  new Array([2]);
	for (var i = 0; i < len - 1; i ++) {
	    for (var j = i + 1; j < len; j ++) {
	        if (nums[i] + nums[j] == target){
	            result[0] = i + 1;
	            result[1] = j + 1;
	            return result;
	        }
	    }
	}
};