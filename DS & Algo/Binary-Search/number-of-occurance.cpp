#include <iostream>
#include<vector>
using namespace std;

int getFirstIndex(int arr[],int n, int key){
 int i = 0;
 int j = n-1;
 int mid = (i+j)/2;
 int ans = -1;
 while(i <= j){
    if(arr[mid] == key){
        ans = mid;
        mid = mid - 1;
    }
    if(arr[i] > key){
        j = mid-1;
    }
    if(arr[i] < key){
        i = mid + 1;
    }
    mid = (i+j)/2;
 }
 return ans; 
}
int main() {
  cout << "Enter the size"<<endl;
  int size;
  cin >> size;
  cout << "Enter the array elements" << endl;
  int arr[10];
  for(int i = 0; i < size; i++){
    cin >> arr[i];
  }
  cout << "Enter the number" << endl;
  int key;
  cin >> key;
 int firstIndex =  getFirstIndex(arr,size, key);
 cout << key << " first index is " << firstIndex;
 
 
}
/*
[1,3,5,5,5,5,7]
5 --->> 4 times
*/