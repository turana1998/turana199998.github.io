$(function(){
    $('.modal').each(function(i, v){
        $(v).on('show.bs.modal', function () {
            var id = $(this).prop('id');
            console.log(id);
            if($('#'+id).html()=='')
            $.get(ajaxModalPath + '?element='+id+'&ajax_modal=Y',function(data){$('#'+id).html(data);});
        });
    });
});