function mylang(){
  let lang=document.getElementById("sel1").value;
  let editor=document.getElementById("editor").value;
  if(lang=='C++' && editor==''){
    document.getElementById("editor").value=`#include <iostream>
using namespace std;
int main() 
{
  cout << "Hello, World!";
  return 0;
}`
  } else if(lang=='Java' && editor==''){
    document.getElementById("editor").value=`// Main class should be Demo
     class Demo {
      public static void main(String args[]){
          System.out.println("Hello World");
      }
     }`

  } else if(lang=='C' && editor==''){
    document.getElementById("editor").value=`#include <stdio.h>
    int main()
    {
       // printf() displays the string inside quotation
       printf("Hello, World!");
       return 0;
    }`
  } else if(lang=='Python' && editor==''){
    document.getElementById("editor").value=`print("This line will be printed.")`
} 
};
var ready = function() {
    // set-number
    $("#editor").setNumber({
      activeLine: 0
    });
    // jquery-autosize (optional)
    $("#editor").autosize({
      callback: function(textarea) {
        $(textarea).scroll();
      }
    });
    $("#editor").focus();
  };
$(document).ready(ready);
