#include<iostream>
using namespace std;

void countArray(int arr[], int n){
    for(int i =0; i < n; i++){
        int count=0;
        for(int j = 0; j < n; j++){
            if(arr[i]== arr[j]){

            count++;
            }
        }
        cout << arr[i] << " occurs " << count << " times" <<endl;
    }
}
int main(){
    int array[10] = {1, 1, 2, 3, 4, 5,3};
    int size = 7;
    countArray(array, size);
}
