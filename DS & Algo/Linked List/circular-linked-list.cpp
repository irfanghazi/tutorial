#include<iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this ->data = data;
        this ->next = NULL;
    }
};

void insertNode(Node* &tail, int element, int data){
    // agar empty hai to create karo
    Node* temp = tail;
    if(tail == NULL){
        Node* newNode  = new Node(data);
        tail = newNode;
        newNode -> next = newNode;
    } else{
        // jis element k aage lagana hai us element tak traverse karo
        Node* current = tail;
        while(current -> data != element){
            current = current -> next;
        }

        // us node tak pahunch jane k baad node create karo
        Node* temp = new Node(data);
        temp -> next = current -> next;
        current -> next = temp;
        tail = temp;

    }
}

void print(Node* &tail){
    Node* head = tail;
    do{
        cout << tail -> data << " ";
        tail  = tail -> next;
    }while(head != tail -> next);
    cout << endl;
}
int main(){
    Node* tail = NULL;
    insertNode(tail, 5, 3); // 5 ke aage 3 laga do.
    print(tail);
    insertNode(tail, 3, 10);
    print(tail);
     insertNode(tail, 10, 20);
    print(tail);


}