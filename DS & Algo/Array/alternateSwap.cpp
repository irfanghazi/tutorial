#include<iostream>
using namespace std;

int swapFunction(int arr[],int n){
    for(int i = 0; i < n; i += 2){
        if(i+1 < n){
        swap(arr[i], arr[i+1]);
        }
    }
}

void printArray(int arr[],int n){
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
}

int main(){
    cout << "Enter the size of the array" <<endl;
    int size;
    cin >> size;

    int array[10];
    cout << "Enter the element of the array" <<endl;
    for(int i = 0; i < size; i++){
        cin >> array[i];
    }

    swapFunction(array, size);
    printArray(array, size);

    return 0;
}

/*
[1, 2, 4, 6, 7]
[2, 1, 6, 4, 7]
*/