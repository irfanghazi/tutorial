#include<iostream>
using namespace std;

int getSum(int array[], int n){
    int sum = 0;
    for (int i = 0; i < n; i++){
        sum += array[i];
    }
    return sum;
}

int main(){
    int size;  
    cout << "Enter the size of the array" << endl;
    cin >> size;
    int array[10];
    cout << "Enter the element of the array" << endl;
    for(int i = 0; i < size; i++){
        cin >> array[i];
    }

    int sum = getSum(array, size);
    cout << "The sum is " << sum << endl;

}