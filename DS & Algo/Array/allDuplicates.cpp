#include<iostream>
using namespace std;

int getAllDuplicate(int arr[],int n){
    // sorting
    for(int i = 0; i < n; i++){
        for(int j = i+1; j < n; j++){
            if(arr[i] > arr[j]){
            swap(arr[i], arr[i+1]);
        }
        }
 
    }
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }

    int freq[n];
    for(int i = 0; i < n; i++){
        freq[i] = 0;
    }

    int i = 0;
    while(i < n){
        int count =1;
        for(int j = i+1; i < n; i++){
            if(arr[i] == arr[j]){
                count ++;
            }
        }
        freq[i]= count;
        i += count;
    }

    int size = sizeof(freq)/sizeof(freq[0]);
    for(int i = 0; i < size; i++){
        // cout << freq[i] << endl;
    }

}
int main(){
    cout << "Enter the size of the array" << endl;
    int size;
    cin >> size;

    cout << "Enter the elemets of the array" << endl;
    int arr[20];
    for(int i = 0; i < size; i++){
        cin >> arr[i];
    }

    getAllDuplicate(arr, size);
}

/*
442. Find All Duplicates in an Array
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice,
return an array of all the integers that appears twice.
Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
010
011

*/