// // # duplicate object, overwrite object key value
//     obj1 = {a:1, b:2, c:3}
//     obj2 = {...obj1}
//     console.log(obj2)
//     obj3 = {...obj1,b:4}
//     console.log(obj3)

// # use varaible as key of object property with the help of ECMAScript_2015_Computed_Property_Names feature.
    const key3 = "d"
    const obj4 = {a:1, b:2, c:3, [key3]:4}
    console.log(obj4)
    
// # use any statement inside object literal inside curly braces {}.
    // obj5 = {a:1, 1>0?b:2:c:2}