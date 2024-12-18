#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter The value" <<endl;
    cin >> n;
    int i = 1;
    while(i <= n){
        // Printing Space
        int space = n - i;
        while(space){
            cout << " " << " ";
            space--;
        }
        // Printing Starscls
        int j = 1;
        while(j <= i){
            cout << "*" << " ";
            j++;
        }
        cout << endl;
        i++;
    }
}

//         *
//       * * 
//     * * *
//   * * * *