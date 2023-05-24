
fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
    .then(res => res.json())
    .then(data =>
     
        {
            localStorage.setItem('finaldata',JSON.stringify(data))
      
         })
data=localStorage.getItem('finaldata');
finaldata=JSON.parse(data);
let points=[];
for(let i=0;i<finaldata.length;i++){
    points[i]=finaldata[i].points;
}
;
points=points.sort(function(a, b){return b - a});
newfinaldata=[];
for(let i=0;i<finaldata.length;i++){
    for(let j=0;j<finaldata.length;j++){
        if(points[i]==finaldata[j].points){
            newfinaldata[i]=finaldata[j]
        }
    }
    
}
if(finaldata.length>0){
    if(finaldata.length==1){
        document.getElementById("name1").innerText=newfinaldata[0].name;
        document.getElementById("img1").src=newfinaldata[0].avatar;
    
    }
    if(finaldata.length==2){
        document.getElementById("name1").innerText=newfinaldata[0].name;
        document.getElementById("name2").innerText=newfinaldata[1].name;
        document.getElementById("img1").src=newfinaldata[0].avatar;
        document.getElementById("img2").src=newfinaldata[1].avatar;

    }
    if(finaldata.length==3){
        document.getElementById("name1").innerText=newfinaldata[0].name;
        document.getElementById("name2").innerText=newfinaldata[1].name;
        document.getElementById("name3").innerText=newfinaldata[2].name;
        document.getElementById("img1").src=newfinaldata[0].avatar;
        document.getElementById("img2").src=newfinaldata[1].avatar;
        document.getElementById("img3").src=newfinaldata[2].avatar;

    }
    else{
        document.getElementById("name1").innerText=newfinaldata[0].name;
        document.getElementById("pointsfirst").innerText=newfinaldata[0].points;
        document.getElementById("name2").innerText=newfinaldata[1].name;
        document.getElementById("pointsSecond").innerText=newfinaldata[1].points;
         document.getElementById("name3").innerText=newfinaldata[2].name;
         document.getElementById("pointsThird").innerText=newfinaldata[2].points;
         document.getElementById("img1").src=newfinaldata[0].avatar;
          document.getElementById("img2").src=newfinaldata[1].avatar;
             document.getElementById("img3").src=newfinaldata[2].avatar;
        
        for(let i =3;i<=finaldata.length;i++){
            let temp;
            const inside=document.createElement("div");
            inside.className="insideBody";
            inside.id=`temp${i}`;
            

            const position=document.createElement("div");
            position.className="position";
            const pic=document.createElement("img")
            pic.className="pic";
            const name=document.createElement("div");
            name.className="name";
            const points=document.createElement("div");
            points.className="points";


            position.innerHTML=i+1;
            
            pic.src=newfinaldata[i].avatar;
            name.innerHTML=newfinaldata[i].name;
            points.innerHTML=newfinaldata[i].points;


            document.getElementById("list").appendChild(inside);
            document.getElementById(`temp${i}`).appendChild(position);
            document.getElementById(`temp${i}`).appendChild(pic);
            document.getElementById(`temp${i}`).appendChild(name);
            document.getElementById(`temp${i}`).appendChild(points);
    
            




            
        }

    }
}
    
    

    




















    

        
       


        




