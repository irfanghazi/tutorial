#include<iostream>
using namespace std;

void getDuplicateNumber(int arr[], int n){
     int ans = 0;
     for(int i = 0; i < n; i++){
        ans = ans ^ arr[i];
     }
   
   for(int i = 0; i < n; i++){
    ans = ans ^ i;
   }
   cout << "The repeated number is: " << ans << endl;
}

int main(){
    cout << "Enter the size of the array"<<endl;
    int size;
    cin >> size;

    int arr[10];
    cout << "Enter the elements of the array" << endl;
    for(int i = 0; i < size; i++){
        cin >> arr[i];
    }

    getDuplicateNumber(arr, size);
}

/*
[1,2,3,4,3]
find the repeated number
*/