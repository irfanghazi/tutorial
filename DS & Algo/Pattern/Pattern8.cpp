#include<iostream>
using namespace std;
int main(){
    int n;
    cin >> n;
    int i = 1;
    
    while (i <= n){
       int count = i;
        int j = 1;
        while (j <= i){
            cout << count << " ";
            count++;
            j++;
        }
        cout << endl; 
        i++;
    }

}

// 1
// 2 3 
// 3 4 5
// 4 5 6 7 