

function nombres(array)
{
 let i = 0;
 let m = true;
 while (i<array.length && m)
 {
  if (!array[i].startsWith("M"))
  {m = false}
  i++;
 }
 return m;
}

console.log(nombres(["Maria", "Pepe"]));

