
var x=1
sum=0;

while(x<=100){

   if(x%3==0 && x%5==0){
     document.write(" "+x);

      sum=sum+x;

   }
   
   x=x+1;
   
}
document.write(" Result ="+sum );



