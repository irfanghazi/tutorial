#include<iostream>
using namespace std;

int getMax(int array[], int size){
//   for(int i = 0; i < size; i++){
//     cout << array[i] << " ";
//   }
  cout <<endl;
    int max = INT32_MIN;
    for(int i = 0; i < size; i++){
        if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

int getMIn(int array[], int size){
    int min  = INT32_MAX;
    for(int i = 0; i < size; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}

int main(){
 int size;
 cout << "Enter the size of aaray" <<endl;
 cin >> size;

 int array[100];
 // Giving array its size from user
 for(int i = 0; i < size; i++){
    cin >> array[i];
 }
 int max = getMax(array, size); 
 int min = getMIn(array, size);  
 cout << "Maximum Number: " << max <<endl;
 cout << "Minimum Number: " << min <<endl;
}