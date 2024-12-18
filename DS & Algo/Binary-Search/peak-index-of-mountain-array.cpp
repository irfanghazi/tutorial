#include <iostream>
#include<vector>
using namespace std;

   int peakIndexInMountainArray(vector<int> &arr) {
        int i = 0;
        int j = arr.size()-1;
      
        int ans = -1;
        while(i <= j){
            int mid = i + (j - i) / 2;
            if(arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]){
                ans = mid;
                return ans;
            } else if(arr[mid-1] < arr[mid] && arr[mid] < arr[mid+1]){
                i = mid + 1;
            } else {
                j = mid;
            }
        }
        return ans;
    }

int main(){

    // pass the array to get the result
    cout << "Enter the size of the array" << endl;
    int n;
    cin >> n;

    vector<int> arr;
    cout << "Enter the elements of the array" << endl;
    for(int i = 0; i < n; i++){
        int ele;
        cin >> ele;
        arr.push_back(ele);
    }
    int index = peakIndexInMountainArray(arr);
    cout << "Peak Index is " << index;

}

/*
Input: arr = [0,2,1,0]
Output: 1
https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
*/