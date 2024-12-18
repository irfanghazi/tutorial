#include<iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this -> data = data;
        this -> next = NULL;
    }
};

void insertAtTail(Node* &tail, int data){
    Node* temp = new Node(data);
    tail -> next = temp;
    tail = temp;
}

void insertAtHead (Node* &head, int data){
    Node* temp = new Node(data);
    temp -> next = head;
    head = temp;
}
void insertAtPostion(Node* &head,Node* &tail, int position, int data){
    //create Node
    Node* nodeToInsert = new Node(data);
    Node* temp = head;

    if(position == 1){
        insertAtHead(head, data);
        return;
    }
    // iterate to the postion after whichj node will be inserted.
    int count  = 1;
    while(count < position - 1){
        temp = temp -> next;
        count++;
    }

    // inserting at last node to fix the position of tail
    if(temp -> next == NULL){
       insertAtTail(tail, data);
       return;
    }

    nodeToInsert -> next = temp -> next;
    temp -> next = nodeToInsert;

}

void print(Node* &head){
    Node* temp = head;
    while(temp != NULL){
        cout << temp -> data << ' ';
        temp = temp -> next;
    }
    cout << endl;
}
int main(){
    Node* node1 = new Node(10);

    Node* head = node1;
    Node* tail = node1;
     
    insertAtTail(tail, 12);
    print(head);
    insertAtTail(tail, 14);
    print(head);
    insertAtTail(tail, 18);
    print(head);
    insertAtPostion(head,tail, 5, 22);
    print(head);

   cout  << "Head " << head -> data << endl;
    cout << "Tail " <<  tail -> data<< endl;
}