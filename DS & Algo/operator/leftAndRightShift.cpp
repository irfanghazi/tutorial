#include<iostream>
using namespace std;

int main(){
    // cout <<(17>>1) << endl;      
    // cout <<(17>>2) << endl;
    // cout <<(17<<1) << endl;     // Left shift by 1 make the number double ,generally for small number whose left most digits are 1 as it will make the number negative 
    // cout <<(17<<2) << endl;

    // Ques. 1
    // int a, b = 1;
    // a = 10;
    // if(++a){
    //     cout <<"Inside If: "<< b <<endl;
    // }else{
    //     cout << ++b << endl;
    // }

    // Ques. 2
    int a  = 1;
    int b = 2;
    cout <<"post-increment of a:" << a++<<endl;
    cout <<"pre-increment of b:" << --b <<endl;
    if(a-- > 0 && ++b  > 2){
        cout << "Inside If" <<" " <<"a:"<<a << " " <<"b:"<<b <<endl;
    }else{
        cout << "Inside else"<<endl;
    }
    cout << "a:"<<a << " " <<"b:" <<b <<endl;

    // Ques. 3 
    int num = 3;
    cout <<"The value is:" << (25 * (++num)) <<endl;

    // Ques.4 
    int x = 1;
    int y = ++x;
    int z = ++x;
    cout <<"y:"<<y <<endl;
    cout << "z:" << z;
}