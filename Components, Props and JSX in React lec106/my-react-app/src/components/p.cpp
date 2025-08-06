#include <iostream>
using namespace std;
#include <string>
int main()
{

    string str = "AKash";
    str.insert(0, 1, str[4]);
    str.erase(5, 1);
    cout << str;
}