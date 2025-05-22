const coding = ["js","Ruby","java", "pyhone ", "cpp"]

coding.forEach(function (val){
    // console.log(val);
    
})

// Arrow funcion 

coding.forEach((item )=>{
    // console.log(item);
    
})

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName:"javascript",
        languagefileName:"Js"
    },
    {
        languageName:"Java",
        languagefileName:"Java"
    },

    {
        languageName:"Pyhon",
        languagefileName:"py"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
    
})