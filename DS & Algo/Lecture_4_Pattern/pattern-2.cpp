#include<iostream>
using namespace std;
int main(){
int n;
cout << "Enter Number" << " ";
cin >> n;
int i = 1;
while(i <=n){
  int star = n-i+1;
  int j=1;
  while(j <= i){
    cout << "*" << " ";
    j++;
  }
   cout << endl;
  i++;
}
}

/*
4 
3 4 
2 3 4
1 2 3 4 
*/
