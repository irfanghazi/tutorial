#include<iostream>
using namespace std;

int mergeSorted(int arr1[], int n, int arr2[], int m, int sortedArr[]){ 
    int i = 0;
    int j = 0;
    int k = 0;
    while (i < n && j < m){
        if(arr1[i] < arr2[j]){
            sortedArr[k] = arr1[i];
            k++;
            i++;
        }else{
            sortedArr[k] = arr2[j];
            k++;
            j++;
        }
    }

    while(i < n){
        sortedArr[k] = arr1[i];
        k++;
        i++;

    }
    while(j < m){
        sortedArr[k] = arr1[j];
        k++;
        j++;

    }
}

void printArr(int arr[], int n){
    cout << endl;
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
}
int main(){
    cout << "Enter the size of first array"<< endl;
    int n;
    cin >> n;
    cout << "Enter the elements of first array" << endl;
    int arr1[100];
    for(int i = 0; i < n; i++){
        cin >> arr1[i];
    }

    cout << "Enter the size of second array"<< endl;
    int m;
    cin >> m;
    cout << "Enter the elements of second array" << endl;
    int arr2[100];
    for(int i = 0; i < m; i++){
        cin >> arr2[i];
    }
    int sortedArr[7] = {0};
    mergeSorted(arr1, n, arr2, m, sortedArr);
    printArr(sortedArr,7);
}

/*
arr1 = [1,4,7,9]
arr2 = [2,3,5,10]
sorted array = [1, 2, 3, 4, 5, 7, 9, 10]
*/