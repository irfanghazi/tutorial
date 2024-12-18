#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter Number" << endl;
    cin >> n;
    int i =1;
    char val = 'A';
    while(i <= n){
        int j = 1;
        while(j <= n){
            cout << val <<" ";
            val++;
            j++;
        }
        cout << endl;
        i++;
    }
}

// A B C 
// D E F 
// G H I 
