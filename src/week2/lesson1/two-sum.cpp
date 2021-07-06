class Solution {
   public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> have;

        for (int i = 0; i < nums.size(); ++i) {
            auto it = have.find(target - nums[i]);
            if (it != have.cend()) {
                return vector<int>({it->second, i});
            }

            have[nums[i]] = i;
        }

        return vector<int>({-1, -1});
    }
};