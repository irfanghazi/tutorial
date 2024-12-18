#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter Number:"<<endl;
    cin >> n;
    int i = 1;
    while(i <= n){
        char val = 'A' + i - 1;
        int j = 1;
        while(j <= i){
            cout << val << " ";
            val++;
            j++;
        }
        cout << endl;
        i++;
    }

}

// A 
// B C 
// C D E 
// D E F G 
