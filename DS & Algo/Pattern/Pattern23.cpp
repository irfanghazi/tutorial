#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter value"<<endl;
    cin >> n;
    int i = 1;
     int count = i;
    while(i <= n){
        int space = n - i;
        while(space){
            cout << "  ";
            space --;
        }
       
        int end = i;
        int j = 1;
        while(j <= end){
            cout << count <<" ";
            count ++;
            j ++; 
        }
        cout << endl;
        i ++;
    }
}
//       1
//     2 3
//   4 5 6
// 7 8 9 10