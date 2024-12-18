#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter value";
    cin >> n;
    int i = 1;
    while(i <= n){
        // printing space
        int space = n - i;
        while(space){
            cout <<"  ";
            space --;
        }
        // printing left first triangle
        int j = 1;
        int end = i;
        int count = 1;
        while(j <= end){
            cout << count << " ";
            count ++;
            j ++;
        }

        // Printing right 2nd triangle
        int start = i - 1;
        while(start){
            cout << start << " ";
            start --;
        }
        cout <<endl;
        i++;
    }
}

//       1
//     1 2 1 
//   1 2 3 2 1 
// 1 2 3 4 3 2 1 