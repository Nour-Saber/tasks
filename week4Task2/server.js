const http = require("http");
const fs = require("fs");
let averageGrade=function(grades){
    return (grades[0]+grades[1]+grades[2])/3;
}
const server = http.createServer((req, res) => {
  fs.readFile("students.json", "utf-8", (err, data) => {
    if (err) {
      res.end(err.message);
      return;
    }
    const students = JSON.parse(data);
    if (req.url === "/students") {
      let fullList =JSON.stringify(students);
      res.end(fullList);
    }
    else if(req.url=="/students/active")
    {
        let activeStudents = students.filter(user=>user.status=="active");
        res.end(JSON.stringify(activeStudents));
        
    }
    else if(req.url=="/students/inactive")
        {
            let inactiveStudents = students.filter(user=>user.status=="inactive");
            res.end(JSON.stringify(inactiveStudents));
            
        }
        else if(req.url=="/students/top")
            {
                let topStudent = students.reduce((acc,curr)=>{
                    return averageGrade(acc.grades)>averageGrade(curr.grades)?acc:curr;
            });
                res.end(JSON.stringify(topStudent));
                
            }
            else if(req.url=="/students/fail")
                {
                    
                    let failedStudents= students.filter(student=>( averageGrade(student.grades)<60))
                    res.end(JSON.stringify(failedStudents));
                    
                }
});
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
