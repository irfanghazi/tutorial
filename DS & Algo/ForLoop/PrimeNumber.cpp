#include<iostream>
using namespace std;

int main(){
    // int n;
    // cout << "Enter Number:" << endl;
    // cin >> n;
    // bool isPrime = true;

    // for(int i = 2; i < n; i++){
    //     if(n % i == 0){
    //        isPrime = false;
    //        break; 
    //     }
    // }
    // if(isPrime){
    //     cout << "The given number is Prime Number";
    // }else{
    //     cout << "The given number is not a Prime Number";
    // }
    
    // Ques. 1

    // for(int i = 0; i <= 5; i--){
    //     cout << i <<" ";
    //     i++;
    // }

    // Ques.2
    // for(int i = 0; i <=15; i += 2){
    //     cout << i << endl ;
    //     // when if condition is true, continue will exexute and the flow will not go to update i++ value.
    //     if(i & 1){
    //         cout << "Hit"<<" ";
    //         continue;
    //     }
    //     i++;
    // }
    // cout <<"aa" << (6&1);


    // Ques. 3

    // for(int i = 0; i < 5; i++){
    //     for(int j = i; j <= 5; j++){
    //         cout << i << " " << j << endl;
    //     }
    //     cout << "*********************************" <<endl;
    // }
   int n;
   cout << "Enter Number:" << endl;
   cin >> n;
if(n & 1){
    cout << "********" << " " <<(n&1) <<endl;
}

}