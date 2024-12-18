#include<iostream>
using namespace std;

int getUnique(int arr[], int n){
    int freq[n];
    for(int i = 0; i < n; i++){
        int count = 1;
        for(int j = i+1; j < n; j++){
           if(arr[i] == arr[j]){
            count ++;
            arr[j] = -1;
           }
        }
        freq[i] = count; 
    }

    for(int i = 0; i < n; i++){
        if(arr[i] != -1){
            cout << arr[i] << " occurs " << freq[i] << " times " << endl;
        }
    }

}

int main(){
    cout << "Enter the size of the array" << endl;
    int size;
    cin >> size;
    int arr[10];

    // Entering the elements in an array
    cout << "Enter the elements of an array"<<endl;
    for(int i = 0; i <size; i++){
        cin >> arr[i];
    }
    getUnique(arr, size);

}
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
/*
{1, 2, 3, 2, 3, 3}
1 occur 1 times
2 occur 2 times
3 occur 3 times
*/