#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter Number";
     cout << endl;
    cin >> n;
    int i = 1;
    while(i <= n){
        int j = 1;
        while(j <= n){
            char val = 'A' + j -1;
            cout << val << " ";
            j++;
        }
        cout << endl;
        i++;
    }

}

// A B C 
// A B C 
// A B C