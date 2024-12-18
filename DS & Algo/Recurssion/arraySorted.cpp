#include <iostream>
#include <vector>
using namespace std;

bool isSortedArr(int arr[], int n) {
  if (n == 0 || n == 1) {
    return true;
  }

  if (arr[0] > arr[1]) {
    return false;
  }
  bool isArraySorted = isSortedArr(arr + 1, n - 1);
  return isArraySorted;
}
int main() {
  vector<int> arr;
  cout << "Enter the size of array" << endl;
  int n;
  cin >> n;
  cout << "Enter elements of an array" << endl;
  for (int i = 0; i < n; i++) {
    int ele;
    cin >> ele;
    arr.push_back(ele);
  }
  int size = arr.size();
  isSortedArr(arr, size);
}