#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter value"<<endl;
    cin>>n;
    int i = 1;
    while(i <= n){
        char val = 'A' + i - 1;
        int j = 1;
        while(j <= i){
            cout << val <<" ";
            j++;
        }
        cout <<endl;
        i++;
    }
}

// A 
// B B 
// C C C