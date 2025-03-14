$(document).ready(function(){

    function selectdvariant (param, value) {
      var url = new URL(window.location.href);

      url.searchParams.set(param, value);
      window.history.replaceState({}, '', url); 
    }

    function updateSelection(){
        var selectValues = "";
        $('.product-options input[type="radio"]:checked').each(function(){
            selectValues += (selectValues ? " / " : "") + $(this).val();
            
        });
        

        $('.variants option').each(function(){
            if($(this).text() == selectValues){
                $(this).prop('selected', true);
                return false; // break the loop once a match is found
            }
        });
        
        // $('.variants option').text(selectValues);
    }

    $('.product-options input[type="radio"]').change(function(){
        updateSelection();
        var currentval =  $(".variants").val(); 
        console.log(currentval);
        selectdvariant('variants', currentval);
    });
    updateSelection();
});