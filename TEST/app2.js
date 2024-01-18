let arr1 = [0,1,20]
let arr2 = [1,3,3]
function addArray(arr1,arr2) {    
    let result = [];     
    for (let i = 0; i < arr1.length; i++) {       
         result.push(arr1[i] + arr2[i]); //looper indtil arr1's længde med attributten .length, og ligger tallene på samme position/index fra de to arrays sammen. 
         //Resultatet tilføjes til result-arrayet ved hjælp af .push 
        }return result; } 
        
        console.log(addArray(arr1,arr2)) 


        let dataset = [ 
            {no: 3, comment: 'ok, men…'},
            {no: 5, comment: 'fornemt'}, 
            {no: 1, comment: 'Ingen service'},
            {no: 2, comment: 'Tilovers'},
            {no: 4, comment: 'super!'}, 
            {no: 0, comment: 'Aldrig modtaget'}
          ];

          function countStars(data) {
            let result = [0, 0, 0, 0, 0, 0];
            for (let d of data) {
                result[d.no]++; // Tæller antallet af bedømmelser med d.no stjerner
            }
            return result;
        }
        console.log(countStars(dataset)) 


        function countStars(data){    
            let result = [];    
            for (let i = 0; i < dataset.length; i++){        
                result.push(dataset[i].no)    }    
                return result; } 
                
    console.log(countStars(dataset)) 