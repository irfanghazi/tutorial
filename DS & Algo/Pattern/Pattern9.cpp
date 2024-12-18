#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter Number:";
    cout << endl;
    cin >> n;
    int i = 1;
    while(i <= n){
        int j = 1;
        char Val = 'A' + i -1;
        while(j<=n){
            cout <<  Val << " ";
            j++;
        }
        cout << endl;
        i++;
    }

}

// A A A
// B B B
// C C C
