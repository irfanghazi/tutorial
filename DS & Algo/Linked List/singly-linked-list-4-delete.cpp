#include<iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    // constructor
    Node(int data){
        this -> data = data;
        this -> next = NULL;
    }

    // destructor
    ~Node(){
        int value = this -> data;
        //memory free
        if(this -> next != NULL){
            delete next;
            this -> next = NULL;
        }
        cout << "Memory is free for Node with data " << value << endl;
    }
};

void insertAtHead(Node* &head, int data){
    Node* temp = new Node(data);
    temp -> next = head;
    head = temp;
}

void deleteNode(Node* &head,int position){

    if(position == 1){
        Node* current  = head;
        head = current -> next;
        // remove the link of node which is going to delete.
        current -> next = NULL;
        delete current;
        return;

    } else {
        Node* current = head;
        Node* prev = NULL;
        int count = 1;
        while(count < position){
        prev = current;
        current = current -> next; 
        count++;
        }

        prev -> next = current -> next;
    }
}

void print(Node* &head){
    Node* temp = head;
    while(temp != NULL){
        cout << temp -> data << " ";
        temp = temp -> next;
    }
    cout << endl;
}
int main(){
    Node* node1 = new Node(10);

    Node* head = node1;
    print(head);
    insertAtHead(head, 12);
    print(head);
    insertAtHead(head, 14);
    print(head);
    insertAtHead(head, 16);
    print(head);
    deleteNode(head,1);
    print(head);
}