let backspace=function(){
    let get_value = document.getElementById('put').value;
    document.getElementById('put').value=get_value.substring(0,get_value.length -1);
}