#include<iostream>
using namespace std;

int binarySearch(int arr[], int n, int key){
    int i = 0;
    int j = n-1;
    int mid = (i + j) / 2;
    while(i <= j){
        if(key == arr[mid]){
            return i;
        }

        if(key > arr[mid] ){
            i = mid + 1;
        }
        if(key < arr[mid]){
            j = mid - 1;
        }
        mid = (i + j) / 2;
    }
    return -1;
}

int main(){
    cout << "Enter the size of the array"<<endl;
    int size;
    cin>>size;
    cout << "Enter the elements of the array" << endl;
    int arr[10];
    for(int i = 0; i < size; i++){
        cin >> arr[i];
    }

    cout << "Enter the element to search" << endl;
    int key;
    cin>> key;
    int index = binarySearch( arr, size, key);
    if(index){
    cout << key << " found at index " << index << endl;
    } else{
    cout << key << " is not present in the array" << endl;
    }

}