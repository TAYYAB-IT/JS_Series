 function Air_Port(st,en,co){
   this. start=st
    this. end=en
    this. cost=co}
	//Filter the elements Start with ,End with,Rest
function path_finder(airports,st,en){
filt_end=airports.filter((value)=>value.end===en) 
filt_start=airports.filter((value)=> value.start===st)
rest=airports.filter((value)=>
value.start!=st && value.end!=en
)

//console.log(filt_start.length)
//console.log(filt_end.length)
//console.log(rest.length)
//Direct_Path
{
chk=filt_start.find((value)=>
value.start==st &&value.end==en)
}
paths=[] //All possible paths Start -> End
paths_costs=[]  //All Posssible Paths Costs
if(chk!=undefined){
 direct_cost=chk.cost
 paths.push([chk])
}
//Multi
for(j in filt_start){
	for(z in filt_end){
		if(filt_start[j].start==st && filt_end[z].start==filt_start[j].end && filt_end[z].end==en)
	{
		paths.push([filt_start[j],filt_end[z]])

	}
}
}
for(i in filt_start){
	for(j in rest){
		for(z in filt_end){
			if(filt_start[i].start==st &&rest[j].start==filt_start[i].end && filt_end[z].start==rest[j].end && filt_end[z].end==en)
		{
			paths.push([filt_start[i],rest[j],filt_end[z]])

		}
	}
	}
}
//No Path Exist
if(paths.length==0){
	return "No Path Exist";
}
//console.log(paths[0][1].end)
//Cost Finder
for(i of paths){
	cost =0
for(j in i ){
 cost+=i[j].cost
}
 paths_costs.push(cost)
}
lowest_cost=Math.min.apply(0,paths_costs); //Lowest cost
cost_index=paths_costs.indexOf(lowest_cost); 
//console.log(lowest_cost)
best=[paths[cost_index][0].start]
for(i of paths[cost_index]){
	best.push(i.end)
}
return best.toString()+"\n"+lowest_cost         //Lowest Cost Path & Cost
}



const airports=[]
airports.push( new Air_Port('ISB','LHR',1000))
airports.push(new Air_Port('LHR','NYC',750))
airports.push(new Air_Port('CBS','NYC',775))
airports.push( new Air_Port('ISB','CBS',575))
airports.push(new Air_Port('CBS','GRC',731))
airports.push(new Air_Port('NYC','GRC',459))
const st="LHR"
const en="GRC"
console .log(path_finder(airports,st,en))