#include<iostream>
using namespace std;

//Using For loop
// int main(){
//     int n;
//     cout <<"Enter Number" << " ";
//     cin >> n;
//     for(int i = 1; i <= n; i++ ){
//         for(int j = 1; j <=n; j++){
//             cout << j << " ";
//         }
//         cout << endl;
//     }

// }

// using while Loop
int main(){
    int n;
    cin >> n;
    int i  = 1;
    while(i <= n){
    int j = 1;
        while(j <= n){
            cout << j << " ";
            j++;
        }
        cout << endl;
        i++;
    }

}

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4