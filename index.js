let courseBtns, masterPanels, mastersName;
window.onload = function()
{
    courseBtns = document.getElementsByName("courseBtn");
    masterPanels = document.getElementsByClassName("masters");
    mastersName = document.getElementsByClassName("mastersName");
    ClickCourse(2);
}
function ClickCourse(index)
{
    let courses = [document.getElementById("course1"), document.getElementById("course2"), document.getElementById("course3")];
    courseBtns[index].click();
    courseBtns[index].style.background = "#000000";
    courseBtns[index].style.color = "#ffffff";
    courses[index].style.display = "block";
    for(let i = 0; i < 3; i++)
    {
        if(i != index)
        {
            courseBtns[i].style.background = "#ffffff";
            courseBtns[i].style.color = "#000000";
            courses[i].style.display = "none";
        }
    }
}
function RightArrow(current_index)
{
    let courseNr = document.getElementById("course_nr");
    if(current_index == 3)
    {
        masterPanels[0].style.display = "inline-flex";
        masterPanels[1].style.display = "none";
        masterPanels[2].style.display = "none";
        mastersName[0].style.display = "inline-flex";
        mastersName[1].style.display = "none";
        mastersName[2].style.display = "none";
        current_index = 1;
    }
    else
    {
        if(current_index == 2)
        {
            masterPanels[0].style.display = "none";
            masterPanels[1].style.display = "none";
            masterPanels[2].style.display = "inline-flex";
            mastersName[0].style.display = "none";
            mastersName[1].style.display = "none";
            mastersName[2].style.display = "inline-flex";
        }
        else
        {
            masterPanels[0].style.display = "none";
            masterPanels[1].style.display = "inline-flex";
            masterPanels[2].style.display = "none";
            mastersName[0].style.display = "none";
            mastersName[1].style.display = "inline-flex";
            mastersName[2].style.display = "none";
        }
        current_index++;
    }
    courseNr.innerHTML = "Course " + String(current_index);
}
function LeftArrow(current_index)
{
    let courseNr = document.getElementById("course_nr");
    if(current_index == 1)
    {
        masterPanels[2].style.display = "inline-flex";
        masterPanels[1].style.display = "none";
        masterPanels[0].style.display = "none";
        mastersName[2].style.display = "inline-flex";
        mastersName[1].style.display = "none";
        mastersName[0].style.display = "none";
        current_index = 3;
    }
    else
    {
        if(current_index == 2)
        {
            masterPanels[2].style.display = "none";
            masterPanels[1].style.display = "none";
            masterPanels[0].style.display = "inline-flex";
            mastersName[2].style.display = "none";
            mastersName[1].style.display = "none";
            mastersName[0].style.display = "inline-flex";
        }
        else
        {
            masterPanels[2].style.display = "none";
            masterPanels[1].style.display = "inline-flex";
            masterPanels[0].style.display = "none";
            mastersName[2].style.display = "none";
            mastersName[1].style.display = "inline-flex";
            mastersName[0].style.display = "none";
        }
        current_index--;
    }
    courseNr.innerHTML = "Course " + String(current_index);
}