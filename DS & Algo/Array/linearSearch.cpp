#include<iostream>
using namespace std;

bool searchNumber(int array[], int n, int key){
    for(int i = 0; i < n; i++){
        if(array[i] == key){
            return 1;
        }
    }
     return 0;
}
int main(){
    int array[5] = {1, 3 , 5, 6, 4};
    int size = sizeof(array) / sizeof(int);
    cout << "Enter the number to search in an array"<<endl;
    int key;
    cin >> key;
    bool found = searchNumber(array, size, key);
    if(found){
        cout << "Number is present";
    }else{
        cout << "Number is not present";
    }
}