#include<iostream>
using namespace std;
int main(){
int n;
cout << "Enter the value"<< endl;
cin >> n;
int i = 1;
while(i <= n){
    int j = 1;
    int starCount = n - i + 1;
    while(j <= starCount){
        cout << "*"<<" ";
        j++;
    }
    cout << endl;
    i++;
}
}

// * * * * 
// * * * 
// * * 
// *