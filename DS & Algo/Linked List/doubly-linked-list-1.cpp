#include<iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* prev;
    Node* next;

    Node(int data){
        this -> data = data;
        this -> prev = NULL;
        this -> next = NULL;
    }
};

void insertAtHead(Node* &head, int data){
    Node* temp = new Node(data);
    temp -> next = head;
    head -> prev = temp;
    head = temp;
}

void insertAtTail(Node* &tail, int data){
    Node* temp = new Node(data);
    tail -> next = temp;
    temp -> prev = tail;
    tail = temp;
}

void insertAtAnyPosition(Node* &head, Node* &tail, int position, int data){
    // craete the node
    Node* nodeToInsert = new Node(data);
    Node* temp = head;

    // inserting at begning
    if(position == 1){
        insertAtHead(head, data);
        return;
    }
    

    int count = 1;
    while(count < position - 1){
        temp = temp -> next;
        count++;
    }

    if(temp -> next == NULL){
        insertAtTail(tail, data);
        return;
    }
    nodeToInsert -> next = temp -> next;
    temp -> next -> prev = nodeToInsert;

    temp -> next = nodeToInsert;
    nodeToInsert -> prev = temp;
}
void print(Node* head){
    while(head != NULL){
        cout << head -> data << " ";
        head = head -> next;
    }
    cout << endl;
}
int main(){
    Node* node1 = new Node(10);

    Node* head = node1;
    Node* tail = node1;
    print(head);
    insertAtHead(head, 13);
    print(head);
    insertAtTail(tail, 14);
    print(head);
    insertAtTail(tail, 24);
    print(head);
    insertAtHead(head, 33);
    print(head);
    insertAtAnyPosition(head, tail, 1, 69);
    print(head);
    insertAtAnyPosition(head, tail, 7, 449);
    print(head);
}