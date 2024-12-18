#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter Number" <<endl;
    cin >> n;
    int i = 1;
    while(i <= n){
        int space = i-1;
        while(space){
            cout << "  ";
            space--;
        }
        int count = n - i + 1;
        int j =1;
        while(j <= count){
            cout << i << " ";
            j++;
        }
        cout <<endl;
        i++;
    }
}

// 1 1 1 1 
//   2 2 2 
//     3 3 
//       4