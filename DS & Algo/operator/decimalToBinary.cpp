#include<iostream>
using namespace std;

int main(){
    int n;
    cout << "Enter the number"<<endl;
    cin >> n;
    while (n != 0)
    {
       int digit = n & 1;
       
        n = n >> 1;
    }
    
}