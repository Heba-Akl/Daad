
         
 var notesSection = document.getElementById('notesSection');
 var treeSlicesSection = document.getElementById('treeSlicesSection');
 var framedPaintingsSection = document.getElementById('framedPaintingsSection');
 var calligraphyToolsSection = document.getElementById('calligraphyToolsSection');
 var calligraphyDataSection = document.getElementById('calligraphyDataSection');



/*Show Notes Section*/
var notes = document.getElementById('notes');
notes.addEventListener('click',showNotes);

 function showNotes(){
    notesSection.style.display = 'block';
    treeSlicesSection.style.display = 'none';
    framedPaintingsSection.style.display = 'none';
    calligraphyToolsSection.style.display = 'none';
    calligraphyDataSection.style.display = 'none';     
}
/**/
/*
localStorage.setItem('showNotes',notesFn) ;*/

/*Show Tree Slices Section*/
  
 document.getElementById('treeSlices').addEventListener('click',showTreeSlices
 );
 function showTreeSlices(){
    treeSlicesSection.style.display = 'block';
    notesSection.style.display = 'none';
    framedPaintingsSection.style.display = 'none';
    calligraphyToolsSection.style.display = 'none';
    calligraphyDataSection.style.display = 'none';
     
}
/**/
/*Show Framed Paintings Section*/
 

 document.getElementById('framedPaintings').addEventListener('click',showFramedPaintings
 );
 function showFramedPaintings(){
    framedPaintingsSection.style.display = 'block';
    notesSection.style.display = 'none';
    treeSlicesSection.style.display = 'none';
    calligraphyToolsSection.style.display = 'none';
    calligraphyDataSection.style.display = 'none';
    
    
     
}
/**/


/*Show Calligraphy Tools Section*/


 document.getElementById('calligraphyTools').addEventListener('click',showCalligraphyTools
 );
 function showCalligraphyTools(){
    calligraphyToolsSection.style.display = 'block';
    notesSection.style.display = 'none';
    treeSlicesSection.style.display = 'none';
    framedPaintingsSection.style.display = 'none';
    calligraphyDataSection.style.display = 'none';
     
}
/**/

/*Show Calligraphy Data Section*/
 


 document.getElementById('calligraphyData').addEventListener('click',showCalligraphyData
 );

 function showCalligraphyData(){
    calligraphyDataSection.style.display = 'block';
    notesSection.style.display = 'none';
    treeSlicesSection.style.display = 'none';
    framedPaintingsSection.style.display = 'none';
    calligraphyToolsSection.style.display = 'none';     
}
/**/

