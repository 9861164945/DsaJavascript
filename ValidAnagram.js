/**
 *Q-3
 Valid Anagram:
 an anagram is a word or phase formed by rearranging the letters of a differennt word orphrase ,using all the original letters exactly once;
 input:(s="anagram"),(t="nagram") output=true
 input:(s="rat"),(t="car") output=false
  
 */
//first approach
const isAnagram=function(s,t){
    //sort the string
s=s.split("").sort().join();
t=t.split("").sort().join();
return s==t

}
isAnagram("anagram","nagaram");
//2nd approah by using object

const byObjectCheckAnagram=function(s,t){
    if(s.length!==t.length) return false;
    let obj1={};
    let obj2={};
    for(let i=0;i<s.length;i++)
        {
            obj1[s[i]]=(obj1[s[i]]||0)+1;
            obj2[t[i]]=(obj2[t[i]]||0)+1;
    }
    for (const key in obj1) 
        {
            if(obj1[key]!==obj2[key]) 
                return false;
        
        return true;
    }
}
console.log(byObjectCheckAnagram("rat","tar"));