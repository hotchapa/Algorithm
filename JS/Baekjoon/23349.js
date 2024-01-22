const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = parseInt(input[0]);
let submissions = [];
for(let i=1; i<=n; i++) {
    let [name, place, startTime, endTime] = input[i].split(' ');
    submissions.push({place, startTime: parseInt(startTime), endTime: parseInt(endTime)});
}

submissions.sort((a, b) => a.startTime - b.startTime || a.endTime - b.endTime);

let maxOverlap = 1;
let maxOverlapTimes = [{startTime: submissions[0].startTime, endTime: submissions[0].endTime}];
let maxOverlapPlace = submissions[0].place;

for(let i=1; i<n; i++) {
    if(submissions[i].place === submissions[i-1].place && submissions[i].startTime <= submissions[i-1].endTime) {
        let overlap = 2;
        let overlapTimes = [{startTime: submissions[i].startTime, endTime: Math.min(submissions[i].endTime, submissions[i-1].endTime)}];
        let j = i+1;
        while(j<n && submissions[j].place === submissions[i].place && submissions[j].startTime <= overlapTimes[overlapTimes.length-1].endTime) {
            overlapTimes.push({startTime: submissions[j].startTime, endTime: Math.min(submissions[j].endTime, overlapTimes[overlapTimes.length-1].endTime)});
            overlap++;
            j++;
        }
        if(overlap > maxOverlap) {
            maxOverlap = overlap;
            maxOverlapTimes = overlapTimes;
            maxOverlapPlace = submissions[i].place;
        }
    }
}

console.log(maxOverlapPlace, maxOverlapTimes[0].startTime, maxOverlapTimes[0].endTime);
