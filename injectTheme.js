function setIcon(){
    var button = document.getElementById("injectTheme");
    const theme=sessionStorage.getItem("theme");
    const root = document.querySelector(':root');
    if(theme=="dark"){
        button.setAttribute("src","dark.svg");
        root.style.setProperty('--shade-grade-1', '#1c1c1c');
        root.style.setProperty('--shade-grade-2', '#442f6f');
        root.style.setProperty('--shade-grade-3', '#9d75eb');
        root.style.setProperty('--shade-grade-4', '#d0bcf5');
    }
    if(theme=="mono"){
        button.setAttribute("src","mono.svg");
        root.style.setProperty('--shade-grade-1', '#1c1c1c');
        root.style.setProperty('--shade-grade-2', '#292929');
        root.style.setProperty('--shade-grade-3', '#636363');
        root.style.setProperty('--shade-grade-4', '#d3d3d3');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var theme=sessionStorage.getItem("theme");
    if(theme==null){
        sessionStorage.setItem("theme","mono");
        theme="mono";
    }
    setIcon();

    document.getElementById("injectTheme").addEventListener("click", function(){
        var theme=sessionStorage.getItem("theme");
        if(theme=="mono"){
            sessionStorage.setItem("theme","dark");
        }
        else if(theme=="dark"){
            sessionStorage.setItem("theme","mono");
        }
        setIcon();
    });

});