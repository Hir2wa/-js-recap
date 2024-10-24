
 
  const arry = 
  [ 3 , 5, 6, 8 ,9];
  console.log(arry[4]);
  let doubled = arry.map( num=> num*2  );
  console.log(doubled);
  


    function ClcuArea(lenght,width){
      return (lenght*width);
    }  
    function ClcuPermeter(lenght,width){
      return (length + width);
    }
      let lenght = 10;
      let width = 30;
     let Area = ClcuArea(lenght,width);
     let permeter = ClcuPermeter(lenght,width);
     console.log("the area of reactangle :" +Area);
     console.log("the permeter of reactangale :" +permeter);


     function grades(marks){
      if (marks<=100 && marks>=90) {
       return ("A");
      }else if(marks <90 && marks>=80){
      return ("B");
      }else if(marks <80 && marks >=70){
      return ("C");
      } else if (marks <70 && marks>=60){
     return ("D");
      }else if(marks <60 && marks >=0){
       return("E")
      }else{
       return("Invalid  Input");
      }
     
      }
    var mark = 50;
    let grade = grades(mark);
    console.log("sir your grade is:  " +grade);







    function  sumOfNumbers(){
      var sum=0;
   for( var i=1; i <=100; i++ )
  if(i%2==0){
    sum+=i;
    
  }


return sum;


    }
    console.log(sumOfNumbers());








        function comMent(){
          let comment = [];
       for( let i =1 ; i <=100 ; i++){
     if(i%3==0){
      comment.push("Fizz");
     }else if(i%5==0){
      comment.push("Buzz");
     }else if(1%3==0 && i%5==0){
  comment.push("FizzBuzz");
     }else{
      comment.push(i);

     }


       }

       return  comment;


        
        }
        console.log(comMent());



          function Arrrey(){
             let Array = ['a','b','c','f','o','p']
             return Array.length;
          }

        console.log(Arrrey());

              //functions + Array
          function Arey(){
            let Arrayy = [3,4,5,7,8,9,12];
            let newArray = [];
           for( let i=0; i<=Arrayy.length; i++){
          if(Arrayy[i] %2==0){
            newArray.push(Arrayy[i]);
          }
           }
           return newArray;
          }
          console.log(Arey());
         
           function sumArray(){
            let Array = [3,4,5,7,8,9,12];
            sum = 0;
            for( let i=0; i<Array.length; i++){
              sum +=Array[i];
            }
            return sum;
           }

            console.log(sumArray());


              function   maxNumber(){
                let number = [3,4,5,7,8,9,12];
                let  max = number[0];
                for( let i= 0; i< number.length;i++){
                  if(number[i]> max){
                  max = number[i];
                  }
                }
                 return max;
              }
              console.log(maxNumber());




              function change(){
                let number = [3,4,5,7,8,9,12];
                let newNumber = [];
               for(let i = number.length - 1; i >= 0; i--){    
                  newNumber.push(number[i]);
               }
               return newNumber;
              }
              console.log(change());



                function   removeVowels(){
                  let sentence = " am a  student  at auca ";
                      let newSentence = "";
                      for(i=0 ; i<sentence.length ; i++){
                        let char = sentence[i];
                        if (!"aeuioAUOEI".includes(sentence[i])){
                          newSentence += char;
                        }
                      }
                      return newSentence;
                }
                
                console.log(removeVowels());




                // objects



                let obj1 = {
                name : "fabrice",
                scholl: "AUCA",
                year:2024,
                 details :    function(){
                  return "am " +this.name +"i study at " +this.scholl +"started in " +this.year ;
                  }
                  

                };
                console.log(obj1.name);
                console.log(obj1.details());


                //creating object uysing  a constructor 
                  


                   function Student( name , age , school){
                    this.name = name;
                    this.age= age;
                    this.school = school;
                    this.greet= function (){
                      return "hello" +this.name +"how are you doing";
                    };
                   }
                     let student = new Student("fabrice",12,"Auca");
                       console.log(student.name);
                       console.log(student.greet());

                       let arr = [1,2,3,4,5,-6,7];
                          arr.length = 0;




                           function lough(num){
                            let  result ="";
                            for(let i = 0 ; i<num ; i++){
                              result +="ha";
                            }
                            return result;
                            
                           }
                           console.log(lough(3));



                        function spliice(){
                          let number = [3,4,5,7,8,9,12];
                         // number.splice(0,4,50,90);
                          let num= number.slice(0,3);
                           return num;
                        }

                        console.log(spliice());

                         function   newArray(){
                        
                          let number = [3,4,5,7,8,9,12];
                          let newNumber = [];
                         for( let i= 0;i<number.length; i++){
                             let result = number[i]*2;
                              newNumber.push(result);
                         }
                            return newNumber;
                         }
                           
                       console.log(newArray());





                      /* function removeVowels(str){

                        const vowels = {
                          'a': true, 'e': true, 'i': true, 'u': true, 'o': true,
                          'A': true, 'E': true, 'I': true, 'U': true, 'O': true
                        };
                        
                        let result = "";
                        for(let i=0; i<str.length;i++){
                         if(!vowels[str[i]]){
                           result += str[i];
                           //newSentence.push(result);
                         }  


                        }
                        return result;
                       }
                     //  let sentence = "am at auca";
                     const result = ("hello")
                       console.log(removeVowels(result));

 */




                       function removVowel(){
                        let sentence = "am at auca";
                        let newSentence = "";
                         for(let i =0; i<sentence.length; i++){
                          let result =sentence[i];
                          if(!"aeuioAEUIO".includes(result)){
                            newSentence +=result;
                          }
                        
                         }
                         return newSentence;
                       }
                    console.log(removVowel());




                    let  obj = {
                      name:"fabrice",
                      school:"auca",
                      year:2012
                    };
                    let sstring = JSON.stringify(obj);
                    console.log(sstring);


                    const person = {
                      name: "Fabrice",
                      age: 22,
                      school: "AUCA"
                    };
                    
                    const jsonString = JSON.stringify(person);  // Convert the object to a JSON string
                    console.log(jsonString);
                    let newObject = JSON.parse(sstring);
                    obj.year=2024;
                 //   delete obj.name;
                    obj.major="software engineering";
                    console.log(obj);
                    console.log(newObject);


                    let jsonnString = '[{"name":"Fabrice","year":2012},{"name":"Alain","year":2024}]';
                    let students = JSON.parse(jsonnString);
                    
                    // Find students who are graduating in 2024
                    let graduatingStudents = students.filter(student => student.year === 2024);
                    console.log(graduatingStudents);



                    let  myObj = {
                      lumberJack : 9.95,
                      food : ["egg","sausage","toast","hashbrowns","pancakes"],
                     favourite : function(){
                            return "my favourite food is :" +this.food[1]  +"costs " +this.lumberJack ;
                        }
                    }

                    
                    console.log(myObj.favourite());



            
           function meTHods(){
            let number = [3,4,5,7,8,9,12];
             let be= number.filter( sum=> sum%2===0);
               return be ;
           }

         console.log(meTHods());

         function meTHodss(){
          let number = [3,4,5,7,8,9,12];
           let be= number.map( sum=> sum*2);
             return be ;
         }

       console.log(meTHodss());
       


       function mmeTHods(){
        let fruits = ["apple", "banana", "cherry", "date"];
              
           return fruits.slice(1,3);  
       }

     console.log(mmeTHods());

       
     function reverseWords(){
      let word = ["happy", "me", "why"];
      let newWord = "";

      
      for(let i = word.length - 1; i >= 0; i--){
          newWord += word[i] + " ";  // Add a single space between words
      }
      
      return newWord.trim();  // Remove trailing space after the last word
  }
  
  console.log(reverseWords());
