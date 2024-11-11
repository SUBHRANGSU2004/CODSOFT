console.log("script running.........")
document.querySelector('.cross').style.display='none';
document.querySelector('.hambarger').addEventListener("click",()=> {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.triple').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
            document.querySelector('.cross').style.display = 'inline'
            setTimeout(() => {
                
        
        document.querySelector('.triple').style.display = 'none'
    }, 40);
    }
})
  