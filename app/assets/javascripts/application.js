// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function search_bill(){
  var searchContent={};
  var bill_no_field=$('#bill_bill_no');
  var card_no_field=$('#bill_card_no');
  searchContent['bill_no']=bill_no_field.val();
  searchContent['card_no']=card_no_field.val();
  $.ajax(
      {type: "POST",
        url: "/search_bill.json",
    data: searchContent,
    dataType: "json",
    success: function(result){
      var result=result[0];
      $('#bill_bill_no').val(result['bill_no']);
      $('#bill_card_no').val(result['card_no']);
      $('#bill_bill_amount').val(result['bill_amount']);
    }
      });
}
