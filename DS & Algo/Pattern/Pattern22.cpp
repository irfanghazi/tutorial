#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter value" << endl;
    cin >> n;
    int i = 1;
    while(i <= n){
        int space = i-1;
        while(space){
            cout << "  ";
            space--;
        }
        int count = i;
        int end = n - i + 1;
        int j = 1;
        while(j <= end){
            cout << count <<" ";
            count++;
            j++;
        }
        cout << endl;
        i++;
    }
}

// 1 2 3 4 
//   2 3 4 
//     3 4 
//       4