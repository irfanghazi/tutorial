#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter Val:"<<endl;
    cin >> n;
    int i = 1;
    while(i <= n){
        int j = 1;
        char val = 'A' + i - 1; 
        while(j <=n){
            cout << val << " ";
            val++;
            j++;
        }
        cout << endl;
        i++;
    }
}

// A B C 
// B C D 
// C D E 