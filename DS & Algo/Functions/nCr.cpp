#include<iostream>
using namespace std;

int factorial(int num){
    int ans = 1;
    for(int i = 1; i<= num; i++){
        ans = ans * i;
    }
    return ans;
}
int nCr(int n, int r){
int numerator = factorial(n);
int denominator = factorial(r) * factorial(n-r);
int nCr = numerator / denominator;
return nCr;
}
int main(){
    int a, b;
    cout << "Enter two number:" << endl;
    cin >> a >> b;
    int answer = nCr(a,b);
    cout << "Answer is: " << answer;

}