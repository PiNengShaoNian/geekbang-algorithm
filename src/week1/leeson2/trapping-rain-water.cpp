/**
 * 单调栈做法
 */

class Solution {
   public:
    int trap(vector<int>& height) {
        stack<int> s;

        int ans = 0;
        for (int i = 0; i < height.size(); ++i) {
            while (!s.empty() && height[i] > height[s.top()]) {
                int top = s.top();
                s.pop();

                if (s.empty()) break;

                int left = s.top();
                int width = i - left - 1;

                int currentHeight = min(height[i], height[left]) - height[top];

                ans += width * currentHeight;
            }

            s.push(i);
        }

        return ans;
    }
};