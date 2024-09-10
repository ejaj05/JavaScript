const myLang = ['js','python','cpp','rubby','java']
myLang.forEach( (val,idx,arr)=>{
    console.log(idx, " : ", val)
})

const myObj = [
    {
        languageName : 'javascript',
        languageFile : 'js'
    },
    {
        languageName : 'C++',
        languageFile : 'Cpp'
    },
    {
        languageName : 'Python',
        languageFile : 'py'
    }
]

myObj.forEach((obj)=>{
    console.log( obj.languageName)
})