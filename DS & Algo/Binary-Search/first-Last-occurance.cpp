#include <iostream>
using namespace std;

int getFirstOccurance(int arr[], int n, int key)
{
    int i = 0;
    int j = n - 1;
    int mid = (i + j) / 2;
    int ans = -1;
    while (i <= j)
    {
        if (arr[mid] == key)
        {
            ans = mid;
            j = mid - 1;
        }
        if (arr[mid] > key)
        {
            j = mid - 1;
        }
        if (arr[mid] < key)
        {
            i = mid + 1;
        }
         mid = i +(j - i) / 2;
    }
    return ans;
}

int getLastOccurance(int arr[], int n, int key)
{
    int i = 0;
    int j = n - 1;
    int mid = (i + j) / 2;
    int ans = -1;
    while (i <= j)
    {
        if (arr[mid] == key)
        {
            ans = mid;
            i = mid + 1;
        }
        if (arr[mid] > key)
        {
            j = mid - 1;
        }
        if (arr[mid] < key)
        {
            i = mid + 1;
        }
         mid = i +(j - i) / 2;
    }
    return ans;
}
int main()
{
    cout << "Enter the size" << endl;
    int n;
    cin >> n;
    cout << "Enter the elements" << endl;
    int arr[10];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    cout << "Enter the key to search" << endl;
    int key;
    cin >> key;
    int first = getFirstOccurance(arr, n, key);
    cout << key << " first" << " index " << first << endl;
    int second = getLastOccurance(arr, n, key);
    cout << key << " last" << " index " << second << endl;
}
/*
First and Last Position of an Element In Sorted Array --->> code studio
https://www.codingninjas.com/codestudio/problems/first-and-last-position-of-an-element-in-sorted-array_1082549
key = 2
0 0 1 1 2 2 2 2
4 7
*/