//task1
// let fruits = ["Apple","Banana","Mango","Peach","Guava"];

// document.write("Here is the list of five fruits" + "<br>" + fruits.join("<br>"));
//************************************************* */
//task2
// let list = ["Maria","Ayesha","Hani","Hashim","Shahan"];
// document.write("The firts element of the list is : " + list.at(0) + "</br>");
// document.write("The last element of the list is : " + list.at(-1) )

//*************************************************** */
//task3
// let list = ["apple","banana","mango"]
// //if we want to add at random index
// list.splice(1, 0, "peach");  //0 is liye likhty hain k kuch b del mat kro aur 1 pr peach add krdo

// document.write(list)

//with the help of push
// let list = ["apple","banana","mango"]
// list.push("Peach");
// document.write(list)
//********************************************************** */
//task4

// let list = ["apple","banana","mango","guava"];
// list.pop();
// document.write(list)


//if we want to remove a random element


// let list = ["apple","banana","mango","guava"];
// list.splice(2,1)//mtlb k index 2 sy 1 element remove krdo
// // list.splice(list.lastIndexOf("mango"),1);// ye b same wo hee kam kry ga mango ko del krdy ga
// document.write(list)
//************************************************************ */

//tasks with loop
// let fruits = ["Apple","Banana","Mango","Peach","Guava"]
// let text = "";
// for(let i= 0; i<fruits.length; i++){
//     text += fruits[i] + "</br>"
// }
// document.write(text)
//************************************************* */
//task2
// let list = [1,2,3,4,5,6]
// let text = " ";
// for(let i =0; i<list.length;i++){
//     text += list[i] + "</br>"
// }
// document.write(text)
//********************************************** */
//task3
// let list = [2,3,4,5,6,7,8]
// let text = " ";
// for (let i = 0; i<list.length;i++){
//     text += "squre of " + list[i] +  "is : " +(list[i]* list[i]) +"</br>"
// }
// document.write(text)
//*************************************************** */
//task 4


let fruits = ["Apple", "Banana", "Mango", "Peach", "Guava"];

let count = 0;
for (let index in fruits) {
    count++;
}


document.write("Total fruits in the list: " + count);//is mn output 5 aay ga kyun k hum count ko dekh rhy hain k mtlb total kitny index hain is mn



