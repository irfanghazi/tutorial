#include<iostream>
using namespace std;

int factorial(int num){
    int ans = 1;
    for(int i = 1; i <= num; i++){
        ans = ans * i;
    }
    return ans;
}
int main(){
    int n;
    cout <<"Enter number"<<endl;
    cin >> n;
  int answer = factorial(n);
  cout << "Answer is :" << answer;
}