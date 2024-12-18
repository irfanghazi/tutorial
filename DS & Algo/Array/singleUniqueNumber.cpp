#include<iostream>
using namespace std;

void getSingleNumber(int arr[], int n){
    int ans = 0;
    for(int i = 0; i < n; i++){
        ans = ans ^ arr[i];
    }
    cout << "unique number is: " << ans << endl;
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

    getSingleNumber(arr, size);
}

/*
[1,2,3,5,4,5,3,2,1]
output---4
*/