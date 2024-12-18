// #include<iostream>
// using namespace std;
// int reverseArray(int arr[], int n){
//     int start = 0;
//     int end = n-1;
//     while(start <= end){
//         swap(arr[start], arr[end]);
//         start++;
//         end--;
//     }
// }

// void printArray(int arr[], int n){
//     for(int i = 0; i < n; i++){
//         cout << arr[i] << " ";
//     }
// }
// int main(){
//     cout << "Enter size of an array" <<endl;
//     int size;
//     cin >> size;
//     int array[10];

//     // Assigning values into an array
//     cout << "Enter element of an array"<<endl;
//     for(int i = 0; i < size; i++){
//         cin >> array[i];
//     }
//     reverseArray(array, size);
//     printArray(array, size);    
// }

/*
[1, 2, 3, 4, 5, 6]
*/

#include<iostream>
using namespace std;

int reverseArray(int arr[], int n){
    int start = 0;
    int end = n - 1;
    while(start <= end){
            swap(arr[start], arr[end]);
            start++;
            end--;
    }
}

void printArray(int arr[], int n){
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
}

int main(){
    cout <<"Enter the size of the array" <<endl;
    int size;
    cin >> size;
    
    int array[10];
    cout << "Enter the element of the array" <<endl;
    for(int i = 0; i < size; i++){
        cin >> array[i];
    }
    
    reverseArray(array, size);
    printArray(array, size);
}