
const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];
const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron","Aaryan","Aaryn","Conner", "Connolly", "Fauzaan", "Favour","Fawaz","Fawkes","Connor","Aayan", "Bracken", "Brad"];

//// this function picks a element from  arrays and composed them

function compost(group,personal){
    let newsGroup = [];
    let groupLength = group.length;

    for(let index = 0 ; index < groupLength ; index++)
    {
        newsGroup[index] = group[index] + "" + personal[Math.floor(Math.random()*personalList.length)]
    }
    return newsGroup
};
console.log(compost(groupList,personalList));