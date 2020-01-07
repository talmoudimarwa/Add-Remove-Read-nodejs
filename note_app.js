let fs=require('fs')
const tab= process.argv[2];
if(tab==='list'){
    fs.readFile('./list.js','utf8',(err,data)=>{
        if(err)
        throw err;
        let str=JSON.parse(data);
        console.log(str)
    })
}

// ADD
else if(process.argv[2].toString()==='add' && (process.argv[3]==='-title')
 && (process.argv[5]==='-body') && process.argv.length===7)
    { 
        const newtitle=process.argv[4];
     const newbody=process.argv[6];
     var newItem=[{
         title:newtitle,
         body:newbody
     }]
     fs.readFile('./list.js','utf8',(err,data)=>{
        if(err)
        throw err;
        let item=JSON.parse(data).concat(newItem);
        fs.writeFile('./list.js', JSON.stringify(item),(err)=>{
           if (err) return console.log(err)
        })
    })
    } 
// delete
else if(process.argv[2].toString()==='remove' && (process.argv[3]==='-title')
&& (process.argv[5]==='-body') && process.argv.length===7){
    const deleteitem=process.argv[4];
    fs.readFile('./list.js','utf8',(err,data)=>{
        if(err)
        throw err;
        let itemd=JSON.parse(data);
        let itemdelete=itemd.filter(el=>el.title!==deleteitem)
        fs.writeFile('./list.js', JSON.stringify(itemdelete),(err)=>{
           if (err) return console.log(err)
        })
    })
     
}
// Read a specific 
else if(process.argv[2].toString()==='read' && (process.argv[3]==='-title')&&
process.argv.length===5){
    const readtitle=process.argv[4]
    fs.readFile('./list.js','utf8',(err,data)=>{
      if (err)
      throw err;
      let filtred=JSON.parse(data)
      let newlist=filtred.filter(el=>el.title=== readtitle)
      console.log(newlist)
    })
}

