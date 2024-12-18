#include<iostream>
using namespace std;

int getUnique(int arr[], int n){
    int ans = 0;
    for(int i = 0; i < n; i++){
        ans = ans ^ arr[i];
    }

    for(int i = 0; i < n; i++){
        ans = ans ^ i;
    }
    return ans;
}

int main(){
    cout << "Enter the size of the array" << endl;
    int size;
    cin >> size;

    int arr[10];
    cout << "Enter the elements of the array" << endl;
    for(int i = 0; i < size; i++){
        cin >> arr[i];
    }
   int ans = getUnique(arr, size);
   cout << "Unique number is: " << ans << endl;
}

/*
Leetcode 287
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
[1, 2, 3, 4, 3]
ans --> 4
*/