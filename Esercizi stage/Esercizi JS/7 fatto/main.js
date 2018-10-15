$(document).ready(() => {
  $('#cap').keyup(function(){
      let val = $('#cap').val();
      if(val.length < 5) $('#lessFiveCap').show();
        else $('#lessFiveCap').hide();
      if(val.length > 5) $('#invalidLengthCap').show();
        else $('#invalidLengthCap').hide();
      val = Number(val);
      if(Number.isNaN(val))  $('#invalidCap').show();
      if(val === '')  $('#invalidCap').hide();
      if(!Number.isNaN(val)) $('#invalidCap').hide();
  });

  $('#nameSur').keyup(function(){
    let val = $('#nameSur').val();
    if(!isNaN(val) && val != '') $('#invalidNameSur').show();
    if(val === '')  $('#invalidNameSur').hide();
    if(isNaN(val))  $('#invalidNameSur').hide();
  });

  $('#myForm').submit(function(e){
    let val = $('#nameSur').val();

    if(val === '') $('#nameSurObbl').show();
    $('#nameSur').focus(function(){
      $('#nameSurObbl').hide();
    });

    if(!$('input[type=radio][name=gender]:checked').val()) $('#genderObbl').css('display','block');
      else $('#genderObbl').hide();
    if($('input[type=radio][name=pos]')[2].checked){
      if($('#descr').val() === '') $('#descrObbl').show();
        else $('#descrObbl').hide();
    }

    if($('.dropDown')[0].selectedIndex === 0) $('#obblUni').css('display','block');
    else $('#obblUni').hide();

    //e.preventDefault();
  });
});
