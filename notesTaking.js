const addbtn = document.querySelector('#new');
addbtn.addEventListener("click",function(){
    addnewnote()
});
const savenotes =()=>{
    const txtarea = document.querySelectorAll('.notes_container textarea');
    const data = [];
    txtarea.forEach((note) => {
        data.push(note.value)
    });
    if(data.length === 0){
        localStorage.removeItem("txtarea")
    }else{
        localStorage.setItem("txtarea",JSON.stringify(data));
    }
}

const addnewnote = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('newnote');
    const htmlData = `
    <div class="notes_container">
                <div class="btn">
                    <button id="trash"><i class="fa-solid fa-trash fa-lg"></i></button>
                    <button id="edit"><i class="fa-solid fa-pen-to-square fa-lg"></i></button>
                </div>
              
              <textarea cols="12" rows="10">${text}</textarea>
                         
    </div>`
            note.insertAdjacentHTML('afterbegin',htmlData);
           
            
            const editbtn = note.querySelector('#edit');
            
             editbtn.addEventListener("click",function(){
                 savenotes()
             })
    
            const delbtn = note.querySelector('#trash');
            delbtn.addEventListener("click",()=>{
                note.remove();
                savenotes()
            })

            const teAr = note.querySelector("textarea")
            teAr.addEventListener("focusout",
            function(){
                savenotes()
            })
            document.body.appendChild(note);
            savenotes()
}

(
window.onload=function(){
    const lsnotes = JSON.parse(localStorage.getItem("txtarea"));
    
         if(lsnotes === null){
            addnewnote()
         }else{
            lsnotes.forEach((lsnotes)=>{
                addnewnote(lsnotes)
            }) 
        }
}
)
const time = document.querySelector(".time")
const Tdate = new Date();

let date = Tdate.getDate();
let month = Tdate.getMonth() + 1;
let year = Tdate.getFullYear();
let hours = Tdate.getHours();
let min = Tdate.getMinutes();
let sec = Tdate.getSeconds();

var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var day = weekdays[Tdate.getDay()];

const currentDate = `${day} ${date}-${month}-${year} || ${hours}:${min}:${sec}`
time.innerHTML=currentDate;


