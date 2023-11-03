function solve(student){
    if(student.charAt(0)=='n' || student.charAt(0)=='N'){
        return true;
    }
    return false;
}
const StudentNames =  ['Neha', 'Rajesh', 'Priya', 'Naveen', 'Sneha',
 'Neeraj', 'Amit', 'Nisha', 'Deepak', 'Nikita', 'Harish',
  'Nandini', 'Manisha', 'Naresh', 'Kiran', 'Navin', 'Swati', 'Rohit', 'Nehal', 'Poonam'];
  names_with_n=StudentNames.filter(solve);
console.log(names_with_n);
console.log(`No. of students whose names start with n are ${names_with_n.length}`)
 
  